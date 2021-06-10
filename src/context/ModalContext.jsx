import { useState, createContext } from "react";

export const ModalContext = createContext({});

export const ModalContextProvider = ({ children }) => {
  const [isCreateChartModalOpen, setIsCreateChartModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openChartModal = () => {
    setIsCreateChartModalOpen(true);
  };

  const closeChartModal = () => {
    setIsCreateChartModalOpen(false);
  };

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isCreateChartModalOpen,
        isEditModalOpen,
        openChartModal,
        closeChartModal,
        openEditModal,
        closeEditModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
