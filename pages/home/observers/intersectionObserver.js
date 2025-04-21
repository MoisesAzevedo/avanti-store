export function observeElementVisibility(target, callback, options = {}) {
  if (!target) return;

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.2,
      ...options
    }
  );

  observer.observe(target);
}
