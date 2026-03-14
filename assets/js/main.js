const currentYear = document.querySelector('[data-current-year]');
if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

const experienceStartDate = new Date(2012, 2, 1); // March 1, 2012
const now = new Date();
let softwareYears = now.getFullYear() - experienceStartDate.getFullYear();

if (
  now.getMonth() < experienceStartDate.getMonth() ||
  (now.getMonth() === experienceStartDate.getMonth() && now.getDate() < experienceStartDate.getDate())
) {
  softwareYears -= 1;
}

softwareYears = Math.max(0, softwareYears);

document.querySelectorAll('[data-software-years]').forEach((node) => {
  node.textContent = String(softwareYears);
});

document.querySelectorAll('[data-software-years-plus]').forEach((node) => {
  node.textContent = `${softwareYears}+`;
});

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
