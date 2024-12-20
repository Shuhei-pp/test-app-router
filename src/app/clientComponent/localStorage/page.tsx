"use client";
import type { User } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page() {
	const url = {
		name: "test",
	};

	sessionStorage.setItem("urla", JSON.stringify(url));

	return (
		<>
			<p>{sessionStorage.getItem("url")}</p>
		</>
	);
}
