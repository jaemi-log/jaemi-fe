import { Dialog, Transition } from "@headlessui/react";
import { useAtom } from "jotai";
import { Fragment } from "react";

import { dialogOpenAtom } from "../../store";
import Backdrop from "./Backdrop";
import Card from "./Card";
import styles from "./UploadDialog.module.css";

const UploadDialog = () => {
  const [isOpen, setIsOpen] = useAtom(dialogOpenAtom);

  const closeModal = () => setIsOpen(false);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog open={isOpen} onClose={closeModal}>
        <Backdrop />

        <Card>
          <Dialog.Panel className={styles.panel}>
            <Dialog.Title as="h3" className={styles.title}>
              새 글 쓰기
            </Dialog.Title>

            <p className={styles.content}>
              Your payment has been successfully submitted. We’ve sent you an email with all of the details of your
              order.
            </p>

            <button type="button" className={styles.button} onClick={closeModal}>
              Got it, thanks!
            </button>
          </Dialog.Panel>
        </Card>
      </Dialog>
    </Transition>
  );
};

export default UploadDialog;
