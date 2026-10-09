import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js-motion");

    const reducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let observer: IntersectionObserver | null = null;

    const observeElement = (element: HTMLElement) => {
      if (reducedMotion || !observer) {
        element.classList.add("is-visible");
      } else {
        observer.observe(element);
      }
    };

    const scan = (scope: ParentNode) => {
      scope.querySelectorAll<HTMLElement>(".reveal").forEach(observeElement);
    };

    if (!reducedMotion && typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
      );
    }

    scan(document);

    const mutationObserver =
      typeof MutationObserver !== "undefined"
        ? new MutationObserver((records) => {
            records.forEach((record) => {
              record.addedNodes.forEach((node) => {
                if (!(node instanceof HTMLElement)) return;
                if (node.matches(".reveal")) observeElement(node);
                scan(node);
              });
            });
          })
        : null;

    mutationObserver?.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      mutationObserver?.disconnect();
    };
  }, []);
}
