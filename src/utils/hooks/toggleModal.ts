import { useState } from "react";

export const useToggleModal = () => {
  const [stateModal, setStateModal] = useState(false);

  const toggleModal = () => {
    setStateModal((prev) => !prev);
  };

  return { toggleModal, stateModal };
};