import React, { useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";
import useProducts from "../hooks/useProducts";

export default function Products() {
  const { products, addProduct, deleteProduct, updateProduct, error } = useProducts();
  const [editingProduct, setEditingProduct] = useState(null); 

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleUpdate = (updatedProduct) => {
    updateProduct(editingProduct.id, updatedProduct);
    setEditingProduct(null); 
  };

  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-6">Produtos</h1>
        {editingProduct ? (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Editando Produto</h2>
            <ProductForm
              onSubmit={handleUpdate}
              initialData={editingProduct}
            />
          </div>
        ) : (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Novo Produto</h2>
            <ProductForm onSubmit={addProduct} />
          </div>
        )}

        {error && <p className="text-red-500 mb-4">{error}</p>} 

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onDelete={deleteProduct}
              onEdit={handleEdit} 
            />
          ))}
        </div>
      </main>
    </div>
  );
}
