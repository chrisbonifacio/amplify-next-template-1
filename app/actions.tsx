"use server";

import { Schema } from "@/amplify/data/resource";
import {
  cookieBasedClient,
  reqResBasedClient,
} from "@/app/utils/amplifyServerUtils";
import { generateClient } from "aws-amplify/api";

const client = generateClient<Schema>();
export async function createTodo(formData: FormData) {
  const content = formData.get("content") as string;

  const { data: cookieData } = await cookieBasedClient.models.Todo.create({
    content,
  });

  const { data: reqResData } = await reqResBasedClient.models.Todo.create(
    {},
    { content }
  );

  const { data } = await client.models.Todo.create({
    content,
  });

  console.log("data", data);
}
