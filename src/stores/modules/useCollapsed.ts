import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

interface INavSlice {
  collapsedNav: boolean;
  showCollapsedNav: () => void;
  hideCollapsedNav: () => void;
}

const createCollapsedNavSlice: StateCreator<INavSlice> = (set, get) => ({
  collapsedNav: false,
  showCollapsedNav: () => {
    if (!get().collapsedNav) set({ collapsedNav: true });
  },
  hideCollapsedNav: () => {
    if (get().collapsedNav) set({ collapsedNav: false });
  }
});

const NAME = 'collapsedStore';
export const useCollapsedStore = create<INavSlice>()(
  devtools(
    (...a) => ({
      ...createCollapsedNavSlice(...a)
    }),
    { name: NAME }
  )
);
