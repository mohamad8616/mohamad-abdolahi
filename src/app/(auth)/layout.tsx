import SideNav from "@/components/SideNav";
import { auth } from "../lib/auth";

export default async function Layout({ children }) {
  const session = await auth();
  if (!session) return null;
  return (
    <main className="flex min-h-screen w-full justify-center bg-transparent">
      <SideNav userName={session.user.name} />
      <div className="h-full w-11/12 md:w-8/12">{children}</div>
    </main>
  );
}
