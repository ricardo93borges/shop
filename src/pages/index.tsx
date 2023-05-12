import Modal from "@/components/modal";
import { CartProvider } from "@/context/cart/provider";
import Header from "@/components/header";
import List from "@/components/list";
import DataChangeModalContent from "@/components/data-change-modal-content";

export default function Home() {
  return (
    <div className="container">
      <CartProvider>
        <Header />
        <main>
          <h1 className="is-size-3 mb-5 mt-5">Devices</h1>
          <List />
          {/* <Modal isActive={false} content={<DataChangeModalContent />} /> */}
        </main>
      </CartProvider>
    </div>
  );
}
