import Link from "next/link";

export default function Admin() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Admin Page</h1>
      <Link href={"/"}>Go to lead page</Link>
    </main>
  );
}
