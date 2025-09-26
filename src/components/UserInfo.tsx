import { auth } from "@/app/lib/auth";
import React from "react";

const UserInfo = async () => {
  const session = await auth();
  if (!session) return null;

  return <p> Welcome{session.user.name}</p>;
};

export default UserInfo;
