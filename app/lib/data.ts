import { sql } from "@vercel/postgres";
import {
  CustomerField,
  CustomersTable,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  Revenue,
} from "./definitions";
import { formatCurrency } from "./utils";
import { unstable_noStore as noStore } from "next/cache";
import dbConnect from "./mongodb/db";
import Character from "@/app/lib/mongodb/characterModel";
import {
  sortByType,
  sortDirectionType,
} from "../ui/characters/FilterCharacters";

export async function fetchRevenue() {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();

  try {
    // Artificially delay a reponse for demo purposes.
    // Don't do this in real life :)

    // console.log("Fetching revenue data...");
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Revenue>`SELECT * FROM revenue`;

    // console.log("Data fetch complete after 3 seconds.");

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function fetchLatestInvoices() {
  noStore();

  try {
    // const data = await sql<LatestInvoiceRaw>`
    //   SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
    //   FROM invoices
    //   JOIN customers ON invoices.customer_id = customers.id
    //   ORDER BY invoices.date DESC
    //   LIMIT 5`;
    // console.log("Fetching revenue data...");
    // await new Promise((resolve) => setTimeout(resolve, 5000));

    const data = await sql<LatestInvoiceRaw>`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`;

    // console.log("Data fetch complete after 5 seconds.");

    const latestInvoices = data.rows.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));
    return latestInvoices;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest invoices.");
  }
}

export async function fetchCardData() {
  noStore();

  try {
    // You can probably combine these into a single SQL query
    // However, we are intentionally splitting them to demonstrate
    // how to initialize multiple queries in parallel with JS.
    const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
    const invoiceStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`;

    // console.log("Fetching revenue data...");
    // await new Promise((resolve) => setTimeout(resolve, 7000));

    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ]);

    // console.log("Data fetch complete after 7 seconds.");

    const numberOfInvoices = Number(data[0].rows[0].count ?? "0");
    const numberOfCustomers = Number(data[1].rows[0].count ?? "0");
    const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? "0");
    const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? "0");

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to card data.");
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredInvoices(
  query: string,
  currentPage: number
) {
  noStore();

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const invoices = await sql<InvoicesTable>`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        invoices.amount::text ILIKE ${`%${query}%`} OR
        invoices.date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`}
      ORDER BY invoices.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return invoices.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch invoices.");
  }
}

export async function fetchInvoicesPages(query: string) {
  noStore();

  try {
    const count = await sql`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
      customers.email ILIKE ${`%${query}%`} OR
      invoices.amount::text ILIKE ${`%${query}%`} OR
      invoices.date::text ILIKE ${`%${query}%`} OR
      invoices.status ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of invoices.");
  }
}

export async function fetchInvoiceById(id: string) {
  noStore();

  try {
    const data = await sql<InvoiceForm>`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${id};
    `;

    const invoice = data.rows.map((invoice) => {
      return {
        ...invoice,
        // Convert amount from cents to dollars
        amount: invoice.amount / 100,
      };
    });

    return invoice[0];
  } catch (error) {
    console.error("Database Error:", error);
    // throw new Error("Failed to fetch all invoice by id.");
  }
}

export async function fetchCustomers() {
  noStore();

  try {
    const data = await sql<CustomerField>`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all customers.");
  }
}

export async function fetchFilteredCustomers(query: string) {
  noStore();

  try {
    const data = await sql<CustomersTable>`
		SELECT
		  customers.id,
		  customers.name,
		  customers.email,
		  customers.image_url,
		  COUNT(invoices.id) AS total_invoices,
		  SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
		  SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
		FROM customers
		LEFT JOIN invoices ON customers.id = invoices.customer_id
		WHERE
		  customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`}
		GROUP BY customers.id, customers.name, customers.email, customers.image_url
		ORDER BY customers.name ASC
	  `;

    const customers = data.rows.map((customer) => ({
      ...customer,
      total_pending: formatCurrency(customer.total_pending),
      total_paid: formatCurrency(customer.total_paid),
    }));

    // await new Promise((resolve) => setTimeout(resolve, 7000));

    return customers;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch customer table.");
  }
}

export async function fetchAllCharacters(characterSelectedId: string) {
  noStore();

  try {
    await dbConnect();
    const selectedCharacter = await Character.aggregate([
      { $match: { id: parseInt(characterSelectedId) } },
    ]);

    return selectedCharacter[0];
  } catch (error) {
    console.error(error);
    throw Error(`MongoDB Connection Error: ${error}`);
  }
}

export async function fetchCharacters(
  characterName: string,
  howMany: number,
  side: string/* "All" | "good" | "bad" | "neutral" */,
  universe: string,
  team: string,
  gender: "Both" | "Male" | "Female",
  race: string,
  includeNameOrExactName: boolean,
  characterOrFullName: boolean,
  currentPage: number,
  sortBy: sortByType,
  sortDirection: sortDirectionType
  // characterSelectedId: string
) {
  noStore();
  const CHARACTERS_PER_PAGE = 4;

  try {
    await dbConnect();

    const offset = (currentPage - 1) * CHARACTERS_PER_PAGE;

    const queryOptions = getQueryOptions( characterName, side, universe, team, gender, race, includeNameOrExactName, characterOrFullName );

    const charactersToDisplay = await Character.aggregate([
      { $match: { ...queryOptions } },
      // { $sort : { sortBy: parseInt(sortDirection)} }
      // { $sample: { size: howMany } }, // shuffle
    ])
      .sort({ [`${sortBy}`]: sortDirection as any }) //as string | Record<string, 1 | -1 | Meta> | Record<string, SortOrder>
      .skip(offset)
      // .limit(CHARACTERS_PER_PAGE)

    const allCharacters = await Character.aggregate([
      { $match: { ...queryOptions } },
    ])
      .limit(howMany)
      .sort({ [`${sortBy}`]: sortDirection as any });

    const totalPages = Math.ceil(allCharacters.length / CHARACTERS_PER_PAGE);

    return { charactersToDisplay: charactersToDisplay.filter((c, i) => i < 4), totalPages };
  } catch (error) {
    console.error(error);
    throw Error(`MongoDB Connection Error: ${error}`);
  }
}

function getQueryOptions(
  characterName: string,
  side: string/* "All" | "good" | "bad" | "neutral" */,
  universe: string,
  team: string,
  gender: string/* "Both" | "Male" | "Female" */,
  race: string,
  includeNameOrExactName: boolean,
  characterOrFullName: boolean
) {
  const queryOptions: {
    [key: string]: any;
  } = {};

  if (characterName !== "") {
    if (characterOrFullName === false) {
      queryOptions.name =
        includeNameOrExactName === true
          ? new RegExp(characterName, "ig")
          : characterName;
    } else {
      queryOptions["biography.fullName"] =
        includeNameOrExactName === true
          ? new RegExp(characterName, "ig")
          : characterName;
    }
  }
  if (side !== "All") queryOptions["biography.alignment"] = side;
  if (universe !== "All") {
    queryOptions["biography.publisher"] = universe;
    if (team !== "All")
      queryOptions["connections.groupAffiliation"] = new RegExp(team, "ig");
  }
  if (gender !== "Both") queryOptions["appearance.gender"] = gender;
  if (race !== "All") queryOptions["appearance.race"] = race;

  return queryOptions;
}
