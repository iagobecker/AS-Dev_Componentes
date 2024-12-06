import { useState, useEffect } from "react";

export default function useProducts() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
  
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3001/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Erro ao buscar produtos:", err);
        setError("Erro ao carregar produtos.");
      }
    };
  
    const addProduct = async (product) => {
      try {
        const res = await fetch("http://localhost:3001/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(product),
        });
        const newProduct = await res.json();
        setProducts((prev) => [...prev, newProduct]);
      } catch (err) {
        console.error("Erro ao adicionar produto:", err);
        setError("Erro ao adicionar produto.");
      }
    };
  
    const deleteProduct = async (id) => {
      try {
        await fetch(`http://localhost:3001/products/${id}`, { method: "DELETE" });
        setProducts((prev) => prev.filter((product) => product.id !== id));
      } catch (err) {
        console.error("Erro ao excluir produto:", err);
        setError("Erro ao excluir produto.");
      }
    };
  
    const updateProduct = async (id, updatedProduct) => {
      try {
        const res = await fetch(`http://localhost:3001/products/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedProduct),
        });
        const updatedData = await res.json();
        setProducts((prev) =>
          prev.map((product) => (product.id === id ? updatedData : product))
        );
      } catch (err) {
        console.error("Erro ao atualizar produto:", err);
        setError("Erro ao atualizar produto.");
      }
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);
  
    return { products, addProduct, deleteProduct, updateProduct, error };
  }
  