import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router";

// export const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useLayoutEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// };

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
