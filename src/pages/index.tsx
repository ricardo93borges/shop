import DataChangeModalContent from "@/components/data-change-modal-content";
import Header from "@/components/header";
import ItemModalContent from "@/components/item-modal-content";
import List from "@/components/list";
import Modal from "@/components/modal";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main>
        <h1 className="is-size-3 mb-5 mt-5">Devices</h1>
        <List />
        <Modal isActive={false} content={<ItemModalContent />} />
        <Modal isActive={false} content={<DataChangeModalContent />} />
      </main>
    </div>
  );
}
