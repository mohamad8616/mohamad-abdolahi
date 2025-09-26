import SideNav from "@/components/SideNav";

export default function Layout({ children }) {
  return (
    <main className="flex min-h-screen w-full justify-center">
      <SideNav />
      <div className="h-full w-11/12 md:w-8/12">{children}</div>
    </main>
  );
}
