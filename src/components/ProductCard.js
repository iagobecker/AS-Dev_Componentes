import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, onDelete, onEdit }) {
  return (
    <div className="border rounded-lg shadow p-4 space-y-2 bg-white">
      <Link to={`/products/${product.id}`} className="block">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover rounded"
        />
        <h2 className="text-lg font-bold mt-2">{product.name}</h2>
        <p className="text-gray-600">R$ {product.price.toFixed(2)}</p>
        <p className="text-gray-800">{product.description}</p>
      </Link>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => onEdit(product)}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Editar
        </button>
        <button
          onClick={() => onDelete(product.id)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Excluir
        </button>
      </div>
    </div>
  );
}
