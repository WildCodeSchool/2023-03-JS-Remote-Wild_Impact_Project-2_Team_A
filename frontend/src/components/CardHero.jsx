import React, { useState } from "react";
import "../sass/superhero.scss";
import Modal from "./Modal";

export default function CardHero({ superhero, handleBasket }) {
  const [modalOpen, setModalOpen] = useState(false);

  const addToBasket = () => {
    handleBasket(superhero, 1);
    setModalOpen(false);
  };

  return (
    <figure className="superhero-container">
      <img src={superhero.image_sm} alt={superhero.name} />
      <figcaption>{superhero.name}</figcaption>
      <button
        type="button"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Description
      </button>
      {modalOpen && (
        <Modal
          superhero={superhero}
          setOpenModal={setModalOpen}
          addToBasket={addToBasket}
        />
      )}
    </figure>
  );
}
