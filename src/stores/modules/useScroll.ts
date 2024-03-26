import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface IScrollState {
  scrollY: number;
  innerWidth: number;
  innerHeight: number;
  bodyHeight: number;
  setScrollY: (scrollY: number) => void;
  setInnerWidth: (width: number) => void;
  setInnerHeight: (height: number) => void;
  setBodyHeight: (height: number) => void;
}

const NAME = 'scrollStore';
export const useScrollStore = create<IScrollState>()(
  devtools(
    (set, get) => ({
      scrollY: 0,
      innerWidth: 0,
      innerHeight: 0,
      bodyHeight: 0,
      setScrollY: (num) => {
        if (get().scrollY !== num) set({ scrollY: num });
      },
      setInnerWidth: (num) => {
        if (get().innerWidth !== num) set({ innerWidth: num });
      },
      setInnerHeight: (num) => {
        if (get().innerHeight !== num) set({ innerHeight: num });
      },
      setBodyHeight: (num) => {
        if (get().bodyHeight !== num) set({ bodyHeight: num });
      }
    }),
    { name: NAME }
  )
);
