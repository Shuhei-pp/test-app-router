import { User } from "@/types";
import axios from "axios";
import { use } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const res = use(getUser(params.id));
  const user = res.user;

  return (
    <>
      <p>
        name:{user?.name},age:{user?.age}
      </p>
    </>
  );
}

const getUser: (id: string) => Promise<{ user: User | null }> = async (
  id: string
) => {
  const res = await axios
    .get(`http://localhost:3000/api/user/${id}`)
    .then((res) => res);
  return res.data;
};
