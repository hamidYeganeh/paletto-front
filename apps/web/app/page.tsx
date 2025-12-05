"use client";

import { Button } from "@repo/ui/Button";
import { Input } from "@repo/ui/Input";
import { TextField } from "@repo/ui/TextField";
import { Modal } from "@repo/ui/Modal";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-linear-0 from-primary-200 to-primary-800 min-h-dvh">
      <div className="bg-white h-40 flex items-center justify-center">
        <Button color="error" variant="contained" size="xl">
          Hero UI
        </Button>
        <TextField />
        <Input color="error" endIcon={<h4>HAA</h4>} startIcon={<h4>STAA</h4>} />
        <Modal open onOpenChange={() => {}} variant="light">
          <Button>OPen</Button>

          <div className="size-48 bg-red-400"></div>
        </Modal>
      </div>
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
