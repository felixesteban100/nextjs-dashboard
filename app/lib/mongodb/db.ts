// import { MongoClient } from "mongodb";

// const uri = process.env.NEXT_ATLAS_URI!;
// // const options = {
// //     useUnifiedTopology: true,
// //     useNewUrlParser: true,
// // };

// let mongoClient: any/* : typeof MongoClient | null */ = null;
// let database: any = null;
// let collection: any = null;

// if (!process.env.NEXT_ATLAS_URI) {
//     throw new Error('Please add your Mongo URI to .env.local')
// }

// export async function connectToDatabase() {
//     try {
//         if (mongoClient != null && database != null && collection != null) {
//             return { mongoClient, database, collection };
//         }
//         if (process.env.NODE_ENV === "development") {
//             // if (!global._mongoClient) {
//                 mongoClient = await (new MongoClient(uri/* , options */)).connect();
//                 // global._mongoClient = mongoClient;
//             // } else {
//                 // mongoClient = global._mongoClient;
//             // }
//         } else {
//             mongoClient = await (new MongoClient(uri/* , options */)).connect();
//         }
//         database = await mongoClient.db(process.env.NEXT_ATLAS_DATABASE!);
//         collection = database.collection(process.env.NEXT_ATLAS_COLLECTION!);

//         return { mongoClient, database, collection };
//     } catch (e) {
//         console.error(e);
//     }
// }

/*  */


import mongoose from 'mongoose'
declare global {
  var mongoose: any // This must be a `var` and not a `let / const`
}

const MONGODB_URI = process.env.MONGODB_URI!

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose
    })
  }
  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.conn
}

export default dbConnect