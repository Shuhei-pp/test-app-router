"use client";
import type { User } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

console.log(process.env.TEST);
console.log(process.env.NEXT_PUBLIC_TEST);

export default function Page() {
	const url = {
		name: "test",
	};
	console.log(process.env.TEST);
	console.log(process.env.NEXT_PUBLIC_TEST);

	return (
		<>
			<p>aaaaa</p>
		</>
	);
}
