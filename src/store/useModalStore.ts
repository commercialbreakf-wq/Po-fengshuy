import { create } from 'zustand';

interface ModalStore {
  isOpen: boolean;
  leadData: {
    type?: string;
    message?: string;
    project_type?: string;
  } | null;
  openModal: (data?: { type?: string; message?: string; project_type?: string }) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  leadData: null,
  openModal: (data) => set({ isOpen: true, leadData: data || null }),
  closeModal: () => set({ isOpen: false, leadData: null }),
}));
