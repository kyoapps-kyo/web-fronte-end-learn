import { ref, watch } from "vue";
import { useScroll } from "@vueuse/core";
import type { MaybeComputedRef } from "@vueuse/shared";

const INIT_STATE = "init";
const CHANGED_STATE = "changed";

const useScrollState = (
  element: MaybeComputedRef<
    HTMLElement | SVGElement | Window | Document | null | undefined
  >
) => {
  const { y } = useScroll(element, { throttle: 200 });
  const state = ref<string>(INIT_STATE);
  const change = ref<boolean | undefined>(undefined);

  watch(y, (newY) => {
    if (isChange(newY)) {
      setState();
    } else if (isRest(newY)) {
      resetState();
    }
  });

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

  return { change };
};

export { useScrollState };
