import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Web Page</h1>
      <Link href={"/admin"}>Go to admin</Link>
    </main>
  );
}
