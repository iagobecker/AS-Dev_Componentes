import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";

export default function ProductDetails() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3001/products/${id}`);
        if (!res.ok) throw new Error("Erro ao buscar o produto");
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Erro ao buscar o produto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div>
        <Header />
        <main className="p-8">
          <p>Carregando...</p>
        </main>
      </div>
    );
  }

  if (!product) {
    return (
      <div>
        <Header />
        <main className="p-8">
          <p>Produto não encontrado.</p>
          <Link to="/products" className="text-blue-500 hover:underline">
            Voltar para Produtos
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
        <div className="border rounded-lg shadow p-4 space-y-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-60 object-cover rounded"
          />
          <p className="text-gray-600 text-lg">Preço: R$ {product.price.toFixed(2)}</p>
          <p className="text-gray-800">{product.description}</p>
        </div>
        <Link
          to="/products"
          className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Voltar para Produtos
        </Link>
      </main>
    </div>
  );
}
