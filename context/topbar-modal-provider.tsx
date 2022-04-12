import { useState } from "react";
import ChildrenProps from "../types/children-props";
import { TopbarModalContext } from "./topbar-modal-context";

export default function TopbarModalProvider({ children }: ChildrenProps) {
  const [isTopbarModalOpen, setIsTopbarModalOpen] = useState(false);

  function onTopbarModalOpen() {
    setIsTopbarModalOpen(true);
  }

  function onTopbarModalClose() {
    setIsTopbarModalOpen(false);
  }

  return (
    <TopbarModalContext.Provider
      value={{ isTopbarModalOpen, onTopbarModalOpen, onTopbarModalClose }}
    >
      {children}
    </TopbarModalContext.Provider>
  );
}
