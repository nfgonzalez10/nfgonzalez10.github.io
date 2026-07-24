import "../css/style.scss";
import Picture1 from "../assets/foto1.jpg";
import headerHTML from "../components/header.html";
import mainHTML from "../components/main.html";
import contactHTML from "../components/contact.html";
import footerHTML from "../components/footer.html";
import { createImages } from "./utils";

const root = document.getElementById("root");
root.innerHTML = headerHTML + mainHTML + contactHTML + footerHTML;

// Portrait photo, injected into the About section
const photoSlot = document.querySelector(".about__photo-slot");
if (photoSlot) {
	const photo = createImages(
		Picture1,
		"Nicolás González",
		"Software Architect"
	);
	photoSlot.appendChild(photo);
}

// Reveal sections as they enter the viewport
const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("is-visible");
				observer.unobserve(entry.target);
			}
		});
	},
	{ threshold: 0.1 }
);
document.querySelectorAll(".section").forEach((section) => {
	observer.observe(section);
});

// Smooth scroll for in-page anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", (event) => {
		const target = document.querySelector(anchor.getAttribute("href"));
		if (!target) return;
		event.preventDefault();
		target.scrollIntoView({ behavior: "smooth" });
	});
});

// Mobile nav toggle
const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");
if (navToggle && navLinks) {
	navToggle.addEventListener("click", () => {
		navLinks.classList.toggle("nav__links--open");
	});
}

// Contact form is a static placeholder (no backend wired up yet)
const contactForm = document.querySelector(".contact__form");
if (contactForm) {
	contactForm.addEventListener("submit", (event) => {
		event.preventDefault();
	});
}
