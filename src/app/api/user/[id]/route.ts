import { NextResponse } from "next/server";
import { Context } from "vm";

export type User = {
  name: string;
  age: number;
};
const USERS_DATA: User[] = [
  {
    name: "kota",
    age: 22,
  },
  {
    name: "haru",
    age: 23,
  },
  {
    name: "akito",
    age: 21,
  },
];

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const userId = context.params.id;

  return NextResponse.json({ user: USERS_DATA[Number(userId)] });
}
