import { useFetch } from "@/hooks/use-fetch";
import { Product } from "@/models/Product";
import Modal from "./modal";
import ItemModalContent from "./item-modal-content";
import { useState } from "react";

export default function List() {
  const { data } = useFetch<Product[]>("products");
  const [modalIsActive, setModalIsActive] = useState(false);
  const [productToDisplay, setProductToDisplay] = useState<Product>();

  const openModal = (product: Product) => {
    setProductToDisplay(product);
    setModalIsActive(true);
  };

  return (
    <>
      {modalIsActive && (
        <Modal
          close={() => setModalIsActive(false)}
          content={<ItemModalContent product={productToDisplay} />}
        />
      )}
      {data &&
        data.map((product: Product) => (
          <div className="box" key={product.id}>
            <div className="columns">
              <div className="column is-10">
                <p>
                  <a onClick={() => openModal(product)}>{product.name}</a>
                </p>
              </div>
              <div className="column is-12">
                <p>{product.quantity}</p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
