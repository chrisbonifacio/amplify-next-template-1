"use server";

import { cookieBasedClient } from "@/app/utils/amplifyServerUtils";

export async function createTodo(formData: FormData) {
  const content = formData.get("content") as string;

  const { data } = await cookieBasedClient.models.Todo.create({
    content,
  });

  console.log("data", data);
}
