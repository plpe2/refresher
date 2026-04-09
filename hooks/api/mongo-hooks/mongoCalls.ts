import { MongoConnection } from "@/lib/db_connection";

export async function Get_mongoCalls({
  collectionName,
  searchFilters,
}: {
  collectionName: string;
  searchFilters: Record<string, any>;
}) {
  const mongoconn = await MongoConnection();
  return mongoconn.collection(collectionName).find(searchFilters).toArray();
}

export async function POST_mongoCalls({
  collectionName,
  insertValues,
}: {
  collectionName: string;
  insertValues: Record<string, any>;
}) {
  const mongoconn = await MongoConnection();
  return mongoconn.collection(collectionName).insertOne(insertValues);
}
