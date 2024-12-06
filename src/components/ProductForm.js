import React, { useState, useEffect } from "react";

export default function ProductForm({ onSubmit, initialData }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setPrice(initialData.price);
      setDescription(initialData.description);
      setImage(initialData.image);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !description || !image) {
      alert("Preencha todos os campos!");
      return;
    }

    onSubmit({ name, price: parseFloat(price), description, image });
    setName("");
    setPrice("");
    setDescription("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Preço"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <textarea
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border p-2 rounded"
      ></textarea>
      <input
        type="text"
        placeholder="URL da imagem"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        {initialData ? "Atualizar" : "Adicionar"}
      </button>
    </form>
  );
}
