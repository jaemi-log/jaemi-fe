import { Transition } from "@headlessui/react";
import React, { Fragment, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Card = ({ children }: Props) => {
  return (
    <div className="fixed inset-0 overflow-y-auto flex min-h-full items-center justify-center p-4 text-center">
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {children}
      </Transition.Child>
    </div>
  );
};

export default Card;
