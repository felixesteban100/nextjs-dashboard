// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};


export type Character = {
  powerstats: {
      intelligence: number;
      strength: number;
      speed: number;
      durability: number;
      power: number;
      combat: number;
  };
  appearance: {
      gender: string;
      race: string | null;
      height: [string, string];
      weight: [string, string];
      eyeColor: string;
      hairColor: string;
  };
  biography: {
      fullName: string;
      alterEgos: string;
      aliases: string[];
      placeOfBirth: string;
      firstAppearance: string;
      publisher: string;
      alignment: string;
  };
  work: {
      occupation: string;
      base: string;
  };
  connections: {
      groupAffiliation: string;
      relatives: string;
  };
  images: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      // mdi?: string;
      // md2?: string;
      [key: string]: string
  };
  _id: string;
  id: number;
  name: string;
  slug: string;
  comics?: string[];
}

export type QueryOptions = {
  name?: RegExp | string;
  "biography.fullName"?: RegExp | string;
  "biography.alignment"?: string;
  "biography.publisher"?: string;
  "connections.groupAffiliation"?: RegExp;
  "appearance.gender"?: string;
  "appearance.race"?: string;
};
/* {
    [key: string]: any;
  } */