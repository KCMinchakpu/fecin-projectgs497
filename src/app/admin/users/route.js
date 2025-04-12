// src/app/api/users/route.ts
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = "mongodb+srv://eliakim:IdoYXsupNwFSHdHA@fecin2025.moyt1dm.mongodb.net/?retryWrites=true&w=majority&appName=Fecin2025";
const client = new MongoClient(uri);
const db = client.db("Fecin2025");
const usersCollection = db.collection("users");

export async function GET() {
  try {
    await client.connect();
    const users = await usersCollection.find().toArray();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.error();
  } finally {
    await client.close();
  }
}

export async function POST(request) {
  try {
    const { name, email } = await request.json();
    await client.connect();
    const newUser = { name, email };
    const result = await usersCollection.insertOne(newUser);
    return NextResponse.json(result.ops[0]);
  } catch (error) {
    return NextResponse.error();
  } finally {
    await client.close();
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    await client.connect();
    const result = await usersCollection.deleteOne({ _id: id });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.error();
  } finally {
    await client.close();
  }
}
