import React from "react";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Bem-vindo ao nosso site!</h1>
      </main>
    </div>
  );
}
