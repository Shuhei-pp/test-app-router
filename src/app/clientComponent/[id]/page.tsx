"use client";
import { User } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const [user, setUser] = useState<User>();
  const url = `http://localhost:3000/api/user/${params.id}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setUser(res.data.user);
    });
  }, [url]);

  return (
    <>
      <p>
        name:{user?.name},age:{user?.age}
      </p>
    </>
  );
}
