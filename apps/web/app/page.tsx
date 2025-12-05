import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-linear-0 from-primary-200 to-primary-800 min-h-dvh">
      <div className="max-w-4xl mx-auto p-10 text-white">
        <h1 className="text-5xl font-bold">Paletto</h1>
        <p className="mt-4 text-lg">Welcome. Choose an action:</p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/auth/register"
            className="rounded bg-white/20 px-4 py-2 hover:bg-white/30"
          >
            Register
          </Link>
          <Link
            href="/auth/login"
            className="rounded bg-white/20 px-4 py-2 hover:bg-white/30"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
