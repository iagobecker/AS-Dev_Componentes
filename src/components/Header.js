import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Início</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/products" className="hover:text-gray-400">Produtos</Link>
        <Link to="/contact" className="hover:text-gray-400">Contato</Link>
      </nav>
    </header>
  );
}
