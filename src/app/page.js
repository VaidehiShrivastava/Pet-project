"use client";
import Image from "next/image";
import Landing from "@/pages/Landing/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <h1 style={{ color: "#fff" }}>Who is your spirit pet animal ?</h1>
      <Landing />
    </main>
  );
}
