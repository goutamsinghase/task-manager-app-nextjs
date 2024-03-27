import Link from "next/link";

export default function Home() {
  return (
    <main className="container flex justify-center">
        <p className="mt-16 p-6 justify-center bg-green-200 border-radius-5">
          Get started with <Link href="/task-manager">Task manager</Link>
        </p>
    </main>
  );
}
