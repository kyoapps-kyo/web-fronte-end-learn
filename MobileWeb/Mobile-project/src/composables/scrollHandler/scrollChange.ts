import { ref, watch } from "vue";
import { useScroll } from "@vueuse/core";
import type { MaybeComputedRef } from "@vueuse/shared";
import { INIT_STATE, CHANGED_STATE, DEFAULT } from "./config";

const useScrollState = (
  element: MaybeComputedRef<
    HTMLElement | SVGElement | Window | Document | null | undefined
  >,
  { setWindowHeight = 0 }
) => {
  const { y } = useScroll(element, { throttle: 200, behavior: "smooth" });
  const state = ref<string>(INIT_STATE);
  const change = ref<boolean | undefined>(undefined);
  // const options = {
  //   ...DEFAULT,
  // };
  const windowHeight = !setWindowHeight ? window.innerHeight : setWindowHeight;
  let lock = true;

  watch(y, (newY) => {
    if (isChange(newY) && isOutOfView(newY)) {
      setState();
    } else if (isRest(newY) || isInsideOfView(newY)) {
      resetState();
    }
  });

  function isOutOfView(y: number): boolean {
    if (!windowHeight) return true;
    else if (y >= windowHeight) return true;
    else return false;
  }

  function isInsideOfView(y: number): boolean {
    if (!windowHeight) return false;
    else if (y <= windowHeight) return true;
    else return false;
  }

  function isChange(y: number): boolean {
    return state.value !== CHANGED_STATE && y > 0;
  }

  function isRest(y: number): boolean {
    return state.value !== INIT_STATE && y <= 0;
  }

  function setState() {
    state.value = CHANGED_STATE;
    change.value = true;
  }

  function resetState() {
    state.value = INIT_STATE;
    change.value = false;
  }

  const scrollTo = (top = 0, left = 0) => {
    if (!lock) return;
    element?.scrollTo({ top, left, behavior: "smooth" });
    lock = false;

    setTimeout(() => {
      lock = true;
    }, 200);
  };

  return { change, y, scrollTo };
};

export { useScrollState };
