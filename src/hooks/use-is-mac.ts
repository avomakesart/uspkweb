import { useState } from "react";

export function useIsMac() {
  const [isMac] = useState(() => {
    if (typeof navigator === "undefined") return true;
    return navigator.platform.toUpperCase().includes("MAC");
  });

  return isMac;
}