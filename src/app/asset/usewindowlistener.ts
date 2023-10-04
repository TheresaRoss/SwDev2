import { useEffect } from "react";

function useWindowListener(
  eventType: string,
  listener: (e: Event) => void,
  targetElement: HTMLElement | null
) {
  useEffect(() => {
    if (!targetElement) return;

    const handleEvent = (e: Event) => {
      listener(e);
    };

    targetElement.addEventListener(eventType, handleEvent);

    return () => {
      targetElement.removeEventListener(eventType, handleEvent);
    };
  }, [eventType, listener, targetElement]);
}

export default useWindowListener;
