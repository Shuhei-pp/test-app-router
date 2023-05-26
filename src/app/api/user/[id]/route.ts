import { USERS_DATA } from "@/constants";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const userId = context.params.id;

  return NextResponse.json({ user: USERS_DATA[Number(userId)] });
}
