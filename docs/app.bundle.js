/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/css/style.scss"
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/css/style.scss ***!
  \***************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --color-primary: #163328;
  --color-primary-container: #2d4a3e;
  --color-on-primary-container: #ffffff;
  --color-secondary: #5f5e5e;
  --color-background: #f9f9f9;
  --color-on-background: #1a1c1c;
  --color-surface-container: #eeeeee;
  --color-surface-container-low: #f4f3f3;
  --color-outline-variant: rgba(193, 200, 195, 0.5);
  --color-on-surface-variant: #424844;
  --space-margin-mobile: 20px;
  --space-gutter: 24px;
  --space-stack-sm: 8px;
  --space-stack-md: 24px;
  --space-stack-lg: 64px;
  --container-max: 800px;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Geist", sans-serif;
  background-color: var(--color-background);
  color: var(--color-on-background);
  -webkit-font-smoothing: antialiased;
}

::selection {
  background-color: var(--color-primary-container);
  color: #ffffff;
}

a {
  text-decoration: none;
  color: inherit;
}

.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "opsz" 24;
  font-size: 1.25rem;
  line-height: 1;
}

.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--space-margin-mobile);
}

.divider {
  border: none;
  border-top: 1px solid var(--color-outline-variant);
  margin-bottom: var(--space-stack-lg);
}

.section {
  opacity: 0;
  transform: translateY(1rem);
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
  margin-bottom: var(--space-stack-lg);
}
.section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.section__label {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-secondary);
  margin: 0 0 var(--space-stack-md);
}

.about,
.skills,
.contact {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-gutter);
}

.section__label-col .section__label {
  margin-bottom: var(--space-stack-sm);
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  background-color: rgba(249, 249, 249, 0.8);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--color-outline-variant);
}

.nav__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.nav__brand {
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--color-primary);
}

.nav__links {
  display: none;
  align-items: center;
  gap: var(--space-stack-md);
}
.nav__links--open {
  display: flex;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-stack-sm);
  padding: var(--space-stack-md) var(--space-margin-mobile);
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-outline-variant);
}

.nav__link {
  color: var(--color-secondary);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: color 0.2s ease;
}
.nav__link:hover {
  color: var(--color-primary);
}

.nav__toggle {
  background: none;
  border: none;
  color: var(--color-primary);
  cursor: pointer;
  display: inline-flex;
}

.hero__name {
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.2;
  margin: 0 0 1rem;
}

.hero__role {
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.3;
  color: var(--color-primary);
  margin: 0 0 1.5rem;
}

.hero__description {
  font-size: 18px;
  line-height: 1.6;
  color: var(--color-secondary);
  max-width: 42rem;
  margin: 0 0 2rem;
}

.hero__actions {
  display: flex;
  align-items: center;
  gap: var(--space-gutter);
}

.hero__link {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-secondary);
  border-bottom: 1px solid transparent;
  padding-bottom: 0.25rem;
  transition: all 0.2s ease;
}
.hero__link:hover {
  border-color: var(--color-secondary);
}
.hero__link--primary {
  color: var(--color-primary);
  border-color: var(--color-primary);
}
.hero__link--primary:hover {
  color: var(--color-primary-container);
}

.about__text {
  font-size: 16px;
  line-height: 1.6;
  margin: 0 0 var(--space-stack-md);
}

.about__photo-slot img {
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: var(--space-stack-md);
}

.about__quote {
  margin: 0;
  padding: 1.5rem;
  background-color: var(--color-surface-container-low);
  border: 1px solid var(--color-outline-variant);
  font-size: 16px;
  font-style: italic;
  color: var(--color-secondary);
}

.approach__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-stack-md);
}

.approach__card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border: 1px solid var(--color-outline-variant);
}

.approach__icon {
  color: var(--color-primary);
}

.approach__title {
  font-size: 18px;
  font-weight: 500;
  margin: 0;
}

.approach__desc {
  font-size: 14px;
  color: var(--color-secondary);
  margin: 0;
}

.skills__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-stack-md);
}

.skills__group-title {
  font-size: 13px;
  font-weight: 500;
  color: var(--color-primary);
  margin: 0 0 var(--space-stack-sm);
}

.skills__list {
  list-style: none;
  margin: 0;
  padding: 0;
  color: var(--color-secondary);
  font-size: 16px;
}
.skills__list li {
  margin-bottom: 0.25rem;
}

.timeline__list {
  position: relative;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  gap: var(--space-stack-lg);
}
.timeline__list::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: var(--color-outline-variant);
}

.timeline__item {
  position: relative;
}

.timeline__dot {
  position: absolute;
  left: -2.25rem;
  top: 0.25rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--color-outline-variant);
  border: 4px solid var(--color-background);
}
.timeline__dot--current {
  background-color: var(--color-primary);
}

.timeline__header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
  gap: 0.25rem;
}

.timeline__role {
  font-size: 24px;
  font-weight: 500;
  margin: 0;
}

.timeline__date {
  font-size: 13px;
  color: var(--color-secondary);
}

.timeline__desc {
  font-size: 16px;
  color: var(--color-secondary);
  margin: 0;
}

.projects__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-gutter);
}

.project {
  cursor: pointer;
}

.project__image-wrap {
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  border: 1px solid var(--color-outline-variant);
  margin-bottom: 1rem;
}

.project__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.project:hover .project__image {
  transform: scale(1.05);
}

.project__title {
  font-size: 20px;
  font-weight: 500;
  margin: 0 0 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.project__link-icon {
  color: var(--color-secondary);
  opacity: 0;
  transition: opacity 0.2s ease;
}
.project:hover .project__link-icon {
  opacity: 1;
}

.project__desc {
  font-size: 14px;
  color: var(--color-secondary);
  margin: 0 0 1rem;
}

.project__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.project__tag {
  padding: 0.25rem 0.5rem;
  background-color: var(--color-surface-container);
  color: var(--color-on-surface-variant);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.contact__intro {
  font-size: 32px;
  font-weight: 600;
  margin: 0 0 var(--space-stack-md);
}

.contact__form {
  display: flex;
  flex-direction: column;
  gap: var(--space-gutter);
  margin-bottom: var(--space-stack-lg);
}

.contact__form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-stack-md);
}

.form-field__label {
  display: block;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-secondary);
  margin-bottom: 0.5rem;
}

.form-field__input {
  width: 100%;
  background-color: var(--color-background);
  border: 1px solid var(--color-outline-variant);
  padding: 0.75rem 1rem;
  font-family: inherit;
  font-size: 16px;
  transition: border-color 0.2s ease;
}
.form-field__input:focus {
  outline: none;
  border-color: var(--color-primary-container);
}
.form-field__input--textarea {
  resize: vertical;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 1rem 2rem;
  transition: all 0.2s ease;
}
.btn--primary {
  background-color: var(--color-primary-container);
  color: #ffffff;
}
.btn--primary:hover {
  background-color: var(--color-primary);
}
.btn--primary:hover .btn__icon {
  transform: translateX(0.25rem);
}

.btn__icon {
  font-size: 16px;
  transition: transform 0.2s ease;
}

.contact__details {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-stack-lg);
  padding-top: var(--space-stack-md);
  border-top: 1px solid var(--color-outline-variant);
}

.contact__detail-label {
  font-size: 13px;
  text-transform: uppercase;
  color: var(--color-secondary);
  margin: 0 0 0.25rem;
}

.contact__detail-value {
  font-size: 16px;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-color: var(--color-outline-variant);
  transition: color 0.2s ease;
}
.contact__detail-value:hover {
  color: var(--color-primary);
}

.contact__socials {
  display: flex;
  gap: 1rem;
}

.footer {
  background-color: var(--color-background);
  border-top: 1px solid var(--color-outline-variant);
  padding: var(--space-stack-md) 0;
}

.footer__inner {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.footer__copy {
  font-size: 13px;
  color: var(--color-secondary);
}

.footer__links {
  display: flex;
  gap: var(--space-gutter);
}

.footer__link {
  font-size: 13px;
  color: var(--color-secondary);
  transition: color 0.2s ease;
}
.footer__link:hover {
  color: var(--color-primary);
}

.content {
  padding-top: 8rem;
}

@media screen and (min-width: 48rem) {
  .nav__links {
    display: flex;
  }
  .nav__toggle {
    display: none;
  }
  .hero__name {
    font-size: 48px;
  }
  .about,
  .skills,
  .contact {
    grid-template-columns: repeat(4, 1fr);
  }
  .section__label-col {
    grid-column: span 1;
  }
  .section__body,
  .skills__grid {
    grid-column: span 3;
  }
  .approach__grid,
  .projects__grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .projects__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .timeline__header {
    flex-direction: row;
  }
  .contact__form-row {
    grid-template-columns: repeat(2, 1fr);
  }
  .footer__inner {
    flex-direction: row;
  }
}`, "",{"version":3,"sources":["webpack://./src/css/style.scss"],"names":[],"mappings":"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","sourcesContent":["// Design tokens\n:root {\n\t--color-primary: #163328;\n\t--color-primary-container: #2d4a3e;\n\t--color-on-primary-container: #ffffff;\n\t--color-secondary: #5f5e5e;\n\t--color-background: #f9f9f9;\n\t--color-on-background: #1a1c1c;\n\t--color-surface-container: #eeeeee;\n\t--color-surface-container-low: #f4f3f3;\n\t--color-outline-variant: rgba(193, 200, 195, 0.5);\n\t--color-on-surface-variant: #424844;\n\n\t--space-margin-mobile: 20px;\n\t--space-gutter: 24px;\n\t--space-stack-sm: 8px;\n\t--space-stack-md: 24px;\n\t--space-stack-lg: 64px;\n\t--container-max: 800px;\n}\n\n* {\n\tbox-sizing: border-box;\n}\n\nbody {\n\tmargin: 0;\n\tfont-family: \"Geist\", sans-serif;\n\tbackground-color: var(--color-background);\n\tcolor: var(--color-on-background);\n\t-webkit-font-smoothing: antialiased;\n}\n\n::selection {\n\tbackground-color: var(--color-primary-container);\n\tcolor: #ffffff;\n}\n\na {\n\ttext-decoration: none;\n\tcolor: inherit;\n}\n\n.material-symbols-outlined {\n\tfont-variation-settings: \"FILL\" 0, \"wght\" 300, \"GRAD\" 0, \"opsz\" 24;\n\tfont-size: 1.25rem;\n\tline-height: 1;\n}\n\n.container {\n\tmax-width: var(--container-max);\n\tmargin: 0 auto;\n\tpadding: 0 var(--space-margin-mobile);\n}\n\n.divider {\n\tborder: none;\n\tborder-top: 1px solid var(--color-outline-variant);\n\tmargin-bottom: var(--space-stack-lg);\n}\n\n// Reveal-on-scroll (toggled via IntersectionObserver in index.js)\n.section {\n\topacity: 0;\n\ttransform: translateY(1rem);\n\ttransition: opacity 0.7s ease-out, transform 0.7s ease-out;\n\tmargin-bottom: var(--space-stack-lg);\n\n\t&.is-visible {\n\t\topacity: 1;\n\t\ttransform: translateY(0);\n\t}\n}\n\n.section__label {\n\tfont-size: 13px;\n\tfont-weight: 500;\n\tletter-spacing: 0.05em;\n\ttext-transform: uppercase;\n\tcolor: var(--color-secondary);\n\tmargin: 0 0 var(--space-stack-md);\n}\n\n// About / Skills / Contact share a label-column + body layout\n.about,\n.skills,\n.contact {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgap: var(--space-gutter);\n}\n\n.section__label-col {\n\t.section__label {\n\t\tmargin-bottom: var(--space-stack-sm);\n\t}\n}\n\n// Nav\n.nav {\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\tz-index: 50;\n\tbackground-color: rgba(249, 249, 249, 0.8);\n\tbackdrop-filter: blur(8px);\n\tborder-bottom: 1px solid var(--color-outline-variant);\n}\n\n.nav__inner {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding-top: 1rem;\n\tpadding-bottom: 1rem;\n}\n\n.nav__brand {\n\tfont-size: 20px;\n\tfont-weight: 600;\n\tletter-spacing: -0.01em;\n\tcolor: var(--color-primary);\n}\n\n.nav__links {\n\tdisplay: none;\n\talign-items: center;\n\tgap: var(--space-stack-md);\n\n\t&--open {\n\t\tdisplay: flex;\n\t\tposition: absolute;\n\t\ttop: 100%;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tflex-direction: column;\n\t\talign-items: flex-start;\n\t\tgap: var(--space-stack-sm);\n\t\tpadding: var(--space-stack-md) var(--space-margin-mobile);\n\t\tbackground-color: var(--color-background);\n\t\tborder-bottom: 1px solid var(--color-outline-variant);\n\t}\n}\n\n.nav__link {\n\tcolor: var(--color-secondary);\n\tfont-size: 11px;\n\tfont-weight: 500;\n\tletter-spacing: 0.05em;\n\ttext-transform: uppercase;\n\ttransition: color 0.2s ease;\n\n\t&:hover {\n\t\tcolor: var(--color-primary);\n\t}\n}\n\n.nav__toggle {\n\tbackground: none;\n\tborder: none;\n\tcolor: var(--color-primary);\n\tcursor: pointer;\n\tdisplay: inline-flex;\n}\n\n// Hero\n.hero__name {\n\tfont-size: 32px;\n\tfont-weight: 600;\n\tletter-spacing: -0.01em;\n\tline-height: 1.2;\n\tmargin: 0 0 1rem;\n}\n\n.hero__role {\n\tfont-size: 24px;\n\tfont-weight: 500;\n\tletter-spacing: -0.01em;\n\tline-height: 1.3;\n\tcolor: var(--color-primary);\n\tmargin: 0 0 1.5rem;\n}\n\n.hero__description {\n\tfont-size: 18px;\n\tline-height: 1.6;\n\tcolor: var(--color-secondary);\n\tmax-width: 42rem;\n\tmargin: 0 0 2rem;\n}\n\n.hero__actions {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: var(--space-gutter);\n}\n\n.hero__link {\n\tfont-size: 13px;\n\tfont-weight: 500;\n\tletter-spacing: 0.05em;\n\ttext-transform: uppercase;\n\tcolor: var(--color-secondary);\n\tborder-bottom: 1px solid transparent;\n\tpadding-bottom: 0.25rem;\n\ttransition: all 0.2s ease;\n\n\t&:hover {\n\t\tborder-color: var(--color-secondary);\n\t}\n\n\t&--primary {\n\t\tcolor: var(--color-primary);\n\t\tborder-color: var(--color-primary);\n\n\t\t&:hover {\n\t\t\tcolor: var(--color-primary-container);\n\t\t}\n\t}\n}\n\n// About\n.about__text {\n\tfont-size: 16px;\n\tline-height: 1.6;\n\tmargin: 0 0 var(--space-stack-md);\n}\n\n.about__photo-slot img {\n\twidth: 8rem;\n\theight: 8rem;\n\tborder-radius: 50%;\n\tobject-fit: cover;\n\tmargin-bottom: var(--space-stack-md);\n}\n\n.about__quote {\n\tmargin: 0;\n\tpadding: 1.5rem;\n\tbackground-color: var(--color-surface-container-low);\n\tborder: 1px solid var(--color-outline-variant);\n\tfont-size: 16px;\n\tfont-style: italic;\n\tcolor: var(--color-secondary);\n}\n\n// Approach\n.approach__grid {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgap: var(--space-stack-md);\n}\n\n.approach__card {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n\tpadding: 1.5rem;\n\tborder: 1px solid var(--color-outline-variant);\n}\n\n.approach__icon {\n\tcolor: var(--color-primary);\n}\n\n.approach__title {\n\tfont-size: 18px;\n\tfont-weight: 500;\n\tmargin: 0;\n}\n\n.approach__desc {\n\tfont-size: 14px;\n\tcolor: var(--color-secondary);\n\tmargin: 0;\n}\n\n// Skills\n.skills__grid {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(2, 1fr);\n\tgap: var(--space-stack-md);\n}\n\n.skills__group-title {\n\tfont-size: 13px;\n\tfont-weight: 500;\n\tcolor: var(--color-primary);\n\tmargin: 0 0 var(--space-stack-sm);\n}\n\n.skills__list {\n\tlist-style: none;\n\tmargin: 0;\n\tpadding: 0;\n\tcolor: var(--color-secondary);\n\tfont-size: 16px;\n\n\tli {\n\t\tmargin-bottom: 0.25rem;\n\t}\n}\n\n// Timeline\n.timeline__list {\n\tposition: relative;\n\tpadding-left: 2rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--space-stack-lg);\n\n\t&::before {\n\t\tcontent: \"\";\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\ttop: 0;\n\t\theight: 100%;\n\t\twidth: 1px;\n\t\tbackground-color: var(--color-outline-variant);\n\t}\n}\n\n.timeline__item {\n\tposition: relative;\n}\n\n.timeline__dot {\n\tposition: absolute;\n\tleft: -2.25rem;\n\ttop: 0.25rem;\n\twidth: 1rem;\n\theight: 1rem;\n\tborder-radius: 50%;\n\tbackground-color: var(--color-outline-variant);\n\tborder: 4px solid var(--color-background);\n\n\t&--current {\n\t\tbackground-color: var(--color-primary);\n\t}\n}\n\n.timeline__header {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\talign-items: baseline;\n\tmargin-bottom: 0.5rem;\n\tgap: 0.25rem;\n}\n\n.timeline__role {\n\tfont-size: 24px;\n\tfont-weight: 500;\n\tmargin: 0;\n}\n\n.timeline__date {\n\tfont-size: 13px;\n\tcolor: var(--color-secondary);\n}\n\n.timeline__desc {\n\tfont-size: 16px;\n\tcolor: var(--color-secondary);\n\tmargin: 0;\n}\n\n// Projects\n.projects__grid {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgap: var(--space-gutter);\n}\n\n.project {\n\tcursor: pointer;\n}\n\n.project__image-wrap {\n\twidth: 100%;\n\taspect-ratio: 16 / 9;\n\toverflow: hidden;\n\tborder: 1px solid var(--color-outline-variant);\n\tmargin-bottom: 1rem;\n}\n\n.project__image {\n\twidth: 100%;\n\theight: 100%;\n\tobject-fit: cover;\n\ttransition: transform 0.5s ease;\n\n\t.project:hover & {\n\t\ttransform: scale(1.05);\n\t}\n}\n\n.project__title {\n\tfont-size: 20px;\n\tfont-weight: 500;\n\tmargin: 0 0 0.5rem;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.5rem;\n}\n\n.project__link-icon {\n\tcolor: var(--color-secondary);\n\topacity: 0;\n\ttransition: opacity 0.2s ease;\n\n\t.project:hover & {\n\t\topacity: 1;\n\t}\n}\n\n.project__desc {\n\tfont-size: 14px;\n\tcolor: var(--color-secondary);\n\tmargin: 0 0 1rem;\n}\n\n.project__tags {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: 0.5rem;\n}\n\n.project__tag {\n\tpadding: 0.25rem 0.5rem;\n\tbackground-color: var(--color-surface-container);\n\tcolor: var(--color-on-surface-variant);\n\tfont-size: 10px;\n\tfont-weight: 500;\n\tletter-spacing: -0.02em;\n\ttext-transform: uppercase;\n}\n\n// Contact\n.contact__intro {\n\tfont-size: 32px;\n\tfont-weight: 600;\n\tmargin: 0 0 var(--space-stack-md);\n}\n\n.contact__form {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--space-gutter);\n\tmargin-bottom: var(--space-stack-lg);\n}\n\n.contact__form-row {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgap: var(--space-stack-md);\n}\n\n.form-field__label {\n\tdisplay: block;\n\tfont-size: 13px;\n\tfont-weight: 500;\n\tletter-spacing: 0.05em;\n\ttext-transform: uppercase;\n\tcolor: var(--color-secondary);\n\tmargin-bottom: 0.5rem;\n}\n\n.form-field__input {\n\twidth: 100%;\n\tbackground-color: var(--color-background);\n\tborder: 1px solid var(--color-outline-variant);\n\tpadding: 0.75rem 1rem;\n\tfont-family: inherit;\n\tfont-size: 16px;\n\ttransition: border-color 0.2s ease;\n\n\t&:focus {\n\t\toutline: none;\n\t\tborder-color: var(--color-primary-container);\n\t}\n\n\t&--textarea {\n\t\tresize: vertical;\n\t}\n}\n\n.btn {\n\tdisplay: inline-flex;\n\talign-items: center;\n\tgap: 0.5rem;\n\tborder: none;\n\tcursor: pointer;\n\tfont-size: 13px;\n\tfont-weight: 500;\n\tletter-spacing: 0.05em;\n\ttext-transform: uppercase;\n\tpadding: 1rem 2rem;\n\ttransition: all 0.2s ease;\n\n\t&--primary {\n\t\tbackground-color: var(--color-primary-container);\n\t\tcolor: #ffffff;\n\n\t\t&:hover {\n\t\t\tbackground-color: var(--color-primary);\n\t\t}\n\n\t\t&:hover .btn__icon {\n\t\t\ttransform: translateX(0.25rem);\n\t\t}\n\t}\n}\n\n.btn__icon {\n\tfont-size: 16px;\n\ttransition: transform 0.2s ease;\n}\n\n.contact__details {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: var(--space-stack-lg);\n\tpadding-top: var(--space-stack-md);\n\tborder-top: 1px solid var(--color-outline-variant);\n}\n\n.contact__detail-label {\n\tfont-size: 13px;\n\ttext-transform: uppercase;\n\tcolor: var(--color-secondary);\n\tmargin: 0 0 0.25rem;\n}\n\n.contact__detail-value {\n\tfont-size: 16px;\n\ttext-decoration: underline;\n\ttext-underline-offset: 4px;\n\ttext-decoration-color: var(--color-outline-variant);\n\ttransition: color 0.2s ease;\n\n\t&:hover {\n\t\tcolor: var(--color-primary);\n\t}\n}\n\n.contact__socials {\n\tdisplay: flex;\n\tgap: 1rem;\n}\n\n// Footer\n.footer {\n\tbackground-color: var(--color-background);\n\tborder-top: 1px solid var(--color-outline-variant);\n\tpadding: var(--space-stack-md) 0;\n}\n\n.footer__inner {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\talign-items: center;\n\tgap: 1rem;\n}\n\n.footer__copy {\n\tfont-size: 13px;\n\tcolor: var(--color-secondary);\n}\n\n.footer__links {\n\tdisplay: flex;\n\tgap: var(--space-gutter);\n}\n\n.footer__link {\n\tfont-size: 13px;\n\tcolor: var(--color-secondary);\n\ttransition: color 0.2s ease;\n\n\t&:hover {\n\t\tcolor: var(--color-primary);\n\t}\n}\n\n// Layout adjustments\n.content {\n\tpadding-top: 8rem;\n}\n\n@media screen and (min-width: 48rem) {\n\t.nav__links {\n\t\tdisplay: flex;\n\t}\n\n\t.nav__toggle {\n\t\tdisplay: none;\n\t}\n\n\t.hero__name {\n\t\tfont-size: 48px;\n\t}\n\n\t.about,\n\t.skills,\n\t.contact {\n\t\tgrid-template-columns: repeat(4, 1fr);\n\t}\n\n\t.section__label-col {\n\t\tgrid-column: span 1;\n\t}\n\n\t.section__body,\n\t.skills__grid {\n\t\tgrid-column: span 3;\n\t}\n\n\t.approach__grid,\n\t.projects__grid {\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t}\n\n\t.projects__grid {\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t}\n\n\t.timeline__header {\n\t\tflex-direction: row;\n\t}\n\n\t.contact__form-row {\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t}\n\n\t.footer__inner {\n\t\tflex-direction: row;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./src/components/contact.html"
/*!*************************************!*\
  !*** ./src/components/contact.html ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<section class="section contact container" id="contact">
	<div class="section__label-col">
		<h2 class="section__label">Contact</h2>
	</div>
	<div class="section__body">
		<h3 class="contact__intro">
			Let's discuss the next evolution of your stack.
		</h3>
		<form class="contact__form">
			<div class="contact__form-row">
				<div class="form-field">
					<label class="form-field__label" for="contact-name">Name</label>
					<input
						class="form-field__input"
						id="contact-name"
						name="name"
						placeholder="Jane Doe"
						type="text"
					/>
				</div>
				<div class="form-field">
					<label class="form-field__label" for="contact-email">Email</label>
					<input
						class="form-field__input"
						id="contact-email"
						name="email"
						placeholder="jane@example.com"
						type="email"
					/>
				</div>
			</div>
			<div class="form-field">
				<label class="form-field__label" for="contact-message">Message</label>
				<textarea
					class="form-field__input form-field__input--textarea"
					id="contact-message"
					name="message"
					placeholder="Describe the architectural challenge..."
					rows="4"
				></textarea>
			</div>
			<button class="btn btn--primary" type="submit">
				Send Inquiry
				<span class="material-symbols-outlined btn__icon">send</span>
			</button>
		</form>
		<div class="contact__details">
			<div class="contact__detail">
				<p class="contact__detail-label">Email</p>
				<a
					class="contact__detail-value"
					href="mailto:nicolas.gonzalez@forge.com"
					>nicolas.gonzalez@forge.com</a
				>
			</div>
			<div class="contact__detail">
				<p class="contact__detail-label">Social</p>
				<div class="contact__socials">
					<a class="contact__detail-value" href="#">LinkedIn</a>
					<a class="contact__detail-value" href="#">GitHub</a>
				</div>
			</div>
		</div>
	</div>
</section>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ },

/***/ "./src/components/footer.html"
/*!************************************!*\
  !*** ./src/components/footer.html ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<footer class="footer">
	<div class="footer__inner container">
		<span class="footer__copy"
			>© 2024 Nicolás González. Software Architect in transition.</span
		>
		<div class="footer__links">
			<a class="footer__link" href="#">LinkedIn</a>
			<a class="footer__link" href="#">GitHub</a>
			<a class="footer__link" href="#">X / Twitter</a>
		</div>
	</div>
</footer>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ },

/***/ "./src/components/header.html"
/*!************************************!*\
  !*** ./src/components/header.html ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<nav class="nav">
	<div class="nav__inner container">
		<span class="nav__brand">Architectural Logic</span>
		<div class="nav__links">
			<a class="nav__link" href="#projects">Projects</a>
			<a class="nav__link" href="#skills">Skills</a>
			<a class="nav__link" href="#experience">Resume</a>
			<a class="nav__link" href="#contact">Contact</a>
		</div>
		<button class="nav__toggle" type="button" aria-label="Toggle menu">
			<span class="material-symbols-outlined">menu</span>
		</button>
	</div>
</nav>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ },

/***/ "./src/components/main.html"
/*!**********************************!*\
  !*** ./src/components/main.html ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<main class="content container">
	<!-- Hero -->
	<section class="section hero">
		<h1 class="hero__name">Nicolás González</h1>
		<p class="hero__role">Full-Stack Software Engineer</p>
		<p class="hero__description">
			Building resilient systems at the intersection of performance and
			scalability. Transitioning into Software Architecture with a focus on
			high-integrity distributed systems.
		</p>
		<div class="hero__actions">
			<a class="hero__link hero__link--primary" href="#projects"
				>View my work</a
			>
			<a class="hero__link" href="#contact">Get in touch</a>
		</div>
	</section>

	<hr class="divider" />

	<!-- About -->
	<section class="section about">
		<div class="section__label-col">
			<h2 class="section__label">About</h2>
		</div>
		<div class="section__body">
			<p class="about__text">
				With over 5 years of professional experience, I am currently at
				<strong>Forge</strong> in Bogotá, where I architect and implement
				critical infrastructure components. My journey is defined by a deep
				curiosity for how large-scale systems behave under pressure.
			</p>
			<div class="about__photo-slot"></div>
			<blockquote class="about__quote">
				"I believe code is a liability, but architecture is an asset. My focus
				is on reducing cognitive load for developers while ensuring system
				longevity through Java, Kubernetes, and Rust."
			</blockquote>
		</div>
	</section>

	<hr class="divider" />

	<!-- Approach -->
	<section class="section approach">
		<h2 class="section__label">Architectural Approach</h2>
		<div class="approach__grid">
			<div class="approach__card">
				<span class="material-symbols-outlined approach__icon">balance</span>
				<h3 class="approach__title">Tradeoff Analysis</h3>
				<p class="approach__desc">
					Every technical decision is a choice between constraints. I prioritize
					long-term maintainability over short-term velocity.
				</p>
			</div>
			<div class="approach__card">
				<span class="material-symbols-outlined approach__icon">layers</span>
				<h3 class="approach__title">Scalability First</h3>
				<p class="approach__desc">
					Designing systems that handle 10x growth without a full rewrite. Focus
					on statelessness and distributed patterns.
				</p>
			</div>
			<div class="approach__card">
				<span class="material-symbols-outlined approach__icon">shield</span>
				<h3 class="approach__title">Observability</h3>
				<p class="approach__desc">
					A system is only as good as its telemetry. Implementation of rigorous
					logging, metrics, and tracing cycles.
				</p>
			</div>
		</div>
	</section>

	<hr class="divider" />

	<!-- Skills -->
	<section class="section skills" id="skills">
		<div class="section__label-col">
			<h2 class="section__label">Technical Stack</h2>
		</div>
		<div class="skills__grid">
			<div class="skills__group">
				<h4 class="skills__group-title">Languages</h4>
				<ul class="skills__list">
					<li>Java (Spring Boot)</li>
					<li>Rust (Tokio, Axum)</li>
					<li>TypeScript / Node.js</li>
					<li>Go (Microservices)</li>
				</ul>
			</div>
			<div class="skills__group">
				<h4 class="skills__group-title">Infrastructure</h4>
				<ul class="skills__list">
					<li>Kubernetes &amp; Docker</li>
					<li>AWS (EKS, RDS, S3)</li>
					<li>Terraform / IaC</li>
					<li>GitHub Actions CI/CD</li>
				</ul>
			</div>
			<div class="skills__group">
				<h4 class="skills__group-title">Databases</h4>
				<ul class="skills__list">
					<li>PostgreSQL</li>
					<li>Redis (Caching)</li>
					<li>Elasticsearch</li>
					<li>MongoDB</li>
				</ul>
			</div>
			<div class="skills__group">
				<h4 class="skills__group-title">Practices</h4>
				<ul class="skills__list">
					<li>Domain-Driven Design</li>
					<li>TDD / Property Testing</li>
					<li>Event Sourcing</li>
					<li>gRPC &amp; Protobuf</li>
				</ul>
			</div>
		</div>
	</section>

	<hr class="divider" />

	<!-- Experience -->
	<section class="section timeline" id="experience">
		<h2 class="section__label">Professional Trajectory</h2>
		<div class="timeline__list">
			<div class="timeline__item">
				<div class="timeline__dot timeline__dot--current"></div>
				<div class="timeline__header">
					<h3 class="timeline__role">Software Engineer @ Forge</h3>
					<span class="timeline__date">Jan 2022 — Present</span>
				</div>
				<p class="timeline__desc">
					Leading the transition from a monolithic architecture to a
					service-mesh based ecosystem in Bogotá. Reduced latency by 40% through
					Rust-based sidecar implementation.
				</p>
			</div>
			<div class="timeline__item">
				<div class="timeline__dot"></div>
				<div class="timeline__header">
					<h3 class="timeline__role">Full-Stack Developer @ TechNova</h3>
					<span class="timeline__date">2019 — 2021</span>
				</div>
				<p class="timeline__desc">
					Developed high-concurrency fintech applications using Spring Boot and
					React. Spearheaded the adoption of automated end-to-end testing.
				</p>
			</div>
			<div class="timeline__item">
				<div class="timeline__dot"></div>
				<div class="timeline__header">
					<h3 class="timeline__role">Junior Developer @ StartStream</h3>
					<span class="timeline__date">2018 — 2019</span>
				</div>
				<p class="timeline__desc">
					Initial immersion into professional software development, focusing on
					internal tooling and RESTful API maintenance.
				</p>
			</div>
		</div>
	</section>

	<hr class="divider" />

	<!-- Projects -->
	<section class="section projects" id="projects">
		<h2 class="section__label">Selected Projects</h2>
		<div class="projects__grid">
			<article class="project">
				<div class="project__image-wrap">
					<img
						class="project__image"
						alt="A clean, minimalist screenshot of a technical dashboard with sophisticated line charts and system health metrics."
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2ilwOydFU0jliw0OVZ7EXTU-H8IVFIco3G0Xvy1VE5oW8e1PEAw37zjyHjjp4nuPp6fYXOvYKkPnvj8dtcXC0Zdiq_QIVWv0swoqQOZ-Kv4ShW_hBMcXEsv75DHdgP-J7W6vDvcbbqi685SQjZI9CniUq_YAZybv5GLhzPJFOinyPR5RDo90RAB5LcdS9MqYzb3m59l8sUqzeq6xAXKVlKW0Xxo_VxO8fsNSZT1fXdY6ty-dTtilTP11mCK4zHmZXBfTCEyGSN0E"
					/>
				</div>
				<h3 class="project__title">
					Project Zenith
					<span class="material-symbols-outlined project__link-icon"
						>arrow_outward</span
					>
				</h3>
				<p class="project__desc">
					A high-performance observability platform for Kubernetes clusters,
					written in Rust and Go.
				</p>
				<div class="project__tags">
					<span class="project__tag">Rust</span>
					<span class="project__tag">GRPC</span>
					<span class="project__tag">Kubernetes</span>
				</div>
			</article>
			<article class="project">
				<div class="project__image-wrap">
					<img
						class="project__image"
						alt="A close-up shot of a high-end architectural model made of light wood and glass in a sun-drenched minimalist studio."
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFlUHb2vvNiO4_GgUgALwejxT0E-ss6I84kQ3o6zLvaTUNh89ugz97ESlvY8uULlTwkv6wAfWi2_dJlLRL0xDET2tmL-2C0gBf9yWoTDUr5rCuQUTLsHOHz__l7kCGZcIz-BB7263kNQOwmoDleHNWjJHp-i3iTO7CftQLwswO_iDyaV-AEhMj_9dYIGyI14HHWqMXq5rJUMnkrHVtH8y0pVt0GBwfkJEJnVUOoljjOpbkdXt4Fw2SuaybrhNYTpQWSgLT6sCE6O4"
					/>
				</div>
				<h3 class="project__title">
					Lattice Core
					<span class="material-symbols-outlined project__link-icon"
						>arrow_outward</span
					>
				</h3>
				<p class="project__desc">
					Custom event-sourcing framework for distributed financial ledgers,
					built on top of Java 17.
				</p>
				<div class="project__tags">
					<span class="project__tag">Java</span>
					<span class="project__tag">PostgreSQL</span>
					<span class="project__tag">Events</span>
				</div>
			</article>
		</div>
	</section>
</main>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ },

/***/ "./src/css/style.scss"
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs/index.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/css/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ "./src/js/utils.js"
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
(__unused_webpack_module, exports) {

exports.createImages = (src, alt, title) => {
	const img = new Image();
	img.src = src;
	if (alt != null) img.alt = alt;
	if (title != null) img.title = title;
	return img;
};


/***/ },

/***/ "./src/assets/foto1.jpg"
/*!******************************!*\
  !*** ./src/assets/foto1.jpg ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "655c91e01d2fa372a8be.jpg";

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.scss */ "./src/css/style.scss");
/* harmony import */ var _assets_foto1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/foto1.jpg */ "./src/assets/foto1.jpg");
/* harmony import */ var _components_header_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header.html */ "./src/components/header.html");
/* harmony import */ var _components_main_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/main.html */ "./src/components/main.html");
/* harmony import */ var _components_contact_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/contact.html */ "./src/components/contact.html");
/* harmony import */ var _components_footer_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer.html */ "./src/components/footer.html");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");








const root = document.getElementById("root");
root.innerHTML = _components_header_html__WEBPACK_IMPORTED_MODULE_2__["default"] + _components_main_html__WEBPACK_IMPORTED_MODULE_3__["default"] + _components_contact_html__WEBPACK_IMPORTED_MODULE_4__["default"] + _components_footer_html__WEBPACK_IMPORTED_MODULE_5__["default"];

// Portrait photo, injected into the About section
const photoSlot = document.querySelector(".about__photo-slot");
if (photoSlot) {
	const photo = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.createImages)(
		_assets_foto1_jpg__WEBPACK_IMPORTED_MODULE_1__,
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHFGQUFxRixXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxRQUFRLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxPQUFPLFdBQVcsTUFBTSxPQUFPLFdBQVcs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUksRTs7Ozs7Ozs7Ozs7Ozs7O0FDcEVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJLEU7Ozs7Ozs7Ozs7Ozs7OztBQ2ZuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSSxFOzs7Ozs7Ozs7Ozs7Ozs7QUNqQm5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNB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QSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7OztXQ2xCQSxtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0EyQjtBQUNnQjtBQUNRO0FBQ0o7QUFDTTtBQUNGO0FBQ1o7O0FBRXZDO0FBQ0EsaUJBQWlCLCtEQUFVLEdBQUcsNkRBQVEsR0FBRyxnRUFBVyxHQUFHLCtEQUFVOztBQUVqRTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9EQUFZO0FBQzNCLEVBQUUsOENBQVE7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixvQkFBb0I7QUFDOUMsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QZXJzb25hbC1TaXRlLy4vc3JjL2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL1BlcnNvbmFsLVNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1BlcnNvbmFsLVNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9QZXJzb25hbC1TaXRlLy4vc3JjL2NvbXBvbmVudHMvY29udGFjdC5odG1sIiwid2VicGFjazovL1BlcnNvbmFsLVNpdGUvLi9zcmMvY29tcG9uZW50cy9mb290ZXIuaHRtbCIsIndlYnBhY2s6Ly9QZXJzb25hbC1TaXRlLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmh0bWwiLCJ3ZWJwYWNrOi8vUGVyc29uYWwtU2l0ZS8uL3NyYy9jb21wb25lbnRzL21haW4uaHRtbCIsIndlYnBhY2s6Ly9QZXJzb25hbC1TaXRlLy4vc3JjL2Nzcy9zdHlsZS5zY3NzPzcxOWMiLCJ3ZWJwYWNrOi8vUGVyc29uYWwtU2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9QZXJzb25hbC1TaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9QZXJzb25hbC1TaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1BlcnNvbmFsLVNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vUGVyc29uYWwtU2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL1BlcnNvbmFsLVNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9QZXJzb25hbC1TaXRlLy4vc3JjL2pzL3V0aWxzLmpzIiwid2VicGFjazovL1BlcnNvbmFsLVNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUGVyc29uYWwtU2l0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9QZXJzb25hbC1TaXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9QZXJzb25hbC1TaXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vUGVyc29uYWwtU2l0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1BlcnNvbmFsLVNpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9QZXJzb25hbC1TaXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL1BlcnNvbmFsLVNpdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL1BlcnNvbmFsLVNpdGUvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1jb2xvci1wcmltYXJ5OiAjMTYzMzI4O1xuICAtLWNvbG9yLXByaW1hcnktY29udGFpbmVyOiAjMmQ0YTNlO1xuICAtLWNvbG9yLW9uLXByaW1hcnktY29udGFpbmVyOiAjZmZmZmZmO1xuICAtLWNvbG9yLXNlY29uZGFyeTogIzVmNWU1ZTtcbiAgLS1jb2xvci1iYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICAtLWNvbG9yLW9uLWJhY2tncm91bmQ6ICMxYTFjMWM7XG4gIC0tY29sb3Itc3VyZmFjZS1jb250YWluZXI6ICNlZWVlZWU7XG4gIC0tY29sb3Itc3VyZmFjZS1jb250YWluZXItbG93OiAjZjRmM2YzO1xuICAtLWNvbG9yLW91dGxpbmUtdmFyaWFudDogcmdiYSgxOTMsIDIwMCwgMTk1LCAwLjUpO1xuICAtLWNvbG9yLW9uLXN1cmZhY2UtdmFyaWFudDogIzQyNDg0NDtcbiAgLS1zcGFjZS1tYXJnaW4tbW9iaWxlOiAyMHB4O1xuICAtLXNwYWNlLWd1dHRlcjogMjRweDtcbiAgLS1zcGFjZS1zdGFjay1zbTogOHB4O1xuICAtLXNwYWNlLXN0YWNrLW1kOiAyNHB4O1xuICAtLXNwYWNlLXN0YWNrLWxnOiA2NHB4O1xuICAtLWNvbnRhaW5lci1tYXg6IDgwMHB4O1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFwiR2Vpc3RcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1vbi1iYWNrZ3JvdW5kKTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1jb250YWluZXIpO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFwiRklMTFwiIDAsIFwid2dodFwiIDMwMCwgXCJHUkFEXCIgMCwgXCJvcHN6XCIgMjQ7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IHZhcigtLWNvbnRhaW5lci1tYXgpO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1tYXJnaW4tbW9iaWxlKTtcbn1cblxuLmRpdmlkZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1vdXRsaW5lLXZhcmlhbnQpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1zdGFjay1sZyk7XG59XG5cbi5zZWN0aW9uIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFyZW0pO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuN3MgZWFzZS1vdXQsIHRyYW5zZm9ybSAwLjdzIGVhc2Utb3V0O1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1zdGFjay1sZyk7XG59XG4uc2VjdGlvbi5pcy12aXNpYmxlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xufVxuXG4uc2VjdGlvbl9fbGFiZWwge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xuICBtYXJnaW46IDAgMCB2YXIoLS1zcGFjZS1zdGFjay1tZCk7XG59XG5cbi5hYm91dCxcbi5za2lsbHMsXG4uY29udGFjdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBnYXA6IHZhcigtLXNwYWNlLWd1dHRlcik7XG59XG5cbi5zZWN0aW9uX19sYWJlbC1jb2wgLnNlY3Rpb25fX2xhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2Utc3RhY2stc20pO1xufVxuXG4ubmF2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA1MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjgpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLW91dGxpbmUtdmFyaWFudCk7XG59XG5cbi5uYXZfX2lubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG59XG5cbi5uYXZfX2JyYW5kIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ubmF2X19saW5rcyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogdmFyKC0tc3BhY2Utc3RhY2stbWQpO1xufVxuLm5hdl9fbGlua3MtLW9wZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IHZhcigtLXNwYWNlLXN0YWNrLXNtKTtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2Utc3RhY2stbWQpIHZhcigtLXNwYWNlLW1hcmdpbi1tb2JpbGUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLW91dGxpbmUtdmFyaWFudCk7XG59XG5cbi5uYXZfX2xpbmsge1xuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XG59XG4ubmF2X19saW5rOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ubmF2X190b2dnbGUge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLmhlcm9fX25hbWUge1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBtYXJnaW46IDAgMCAxcmVtO1xufVxuXG4uaGVyb19fcm9sZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luOiAwIDAgMS41cmVtO1xufVxuXG4uaGVyb19fZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xuICBtYXgtd2lkdGg6IDQycmVtO1xuICBtYXJnaW46IDAgMCAycmVtO1xufVxuXG4uaGVyb19fYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogdmFyKC0tc3BhY2UtZ3V0dGVyKTtcbn1cblxuLmhlcm9fX2xpbmsge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuLmhlcm9fX2xpbms6aG92ZXIge1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG59XG4uaGVyb19fbGluay0tcHJpbWFyeSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cbi5oZXJvX19saW5rLS1wcmltYXJ5OmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktY29udGFpbmVyKTtcbn1cblxuLmFib3V0X190ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS42O1xuICBtYXJnaW46IDAgMCB2YXIoLS1zcGFjZS1zdGFjay1tZCk7XG59XG5cbi5hYm91dF9fcGhvdG8tc2xvdCBpbWcge1xuICB3aWR0aDogOHJlbTtcbiAgaGVpZ2h0OiA4cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1zdGFjay1tZCk7XG59XG5cbi5hYm91dF9fcXVvdGUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc3VyZmFjZS1jb250YWluZXItbG93KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3Itb3V0bGluZS12YXJpYW50KTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4uYXBwcm9hY2hfX2dyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ2FwOiB2YXIoLS1zcGFjZS1zdGFjay1tZCk7XG59XG5cbi5hcHByb2FjaF9fY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbiAgcGFkZGluZzogMS41cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1vdXRsaW5lLXZhcmlhbnQpO1xufVxuXG4uYXBwcm9hY2hfX2ljb24ge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5hcHByb2FjaF9fdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmFwcHJvYWNoX19kZXNjIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc2tpbGxzX19ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ2FwOiB2YXIoLS1zcGFjZS1zdGFjay1tZCk7XG59XG5cbi5za2lsbHNfX2dyb3VwLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbjogMCAwIHZhcigtLXNwYWNlLXN0YWNrLXNtKTtcbn1cblxuLnNraWxsc19fbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5za2lsbHNfX2xpc3QgbGkge1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxuXG4udGltZWxpbmVfX2xpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiB2YXIoLS1zcGFjZS1zdGFjay1sZyk7XG59XG4udGltZWxpbmVfX2xpc3Q6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW91dGxpbmUtdmFyaWFudCk7XG59XG5cbi50aW1lbGluZV9faXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRpbWVsaW5lX19kb3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0yLjI1cmVtO1xuICB0b3A6IDAuMjVyZW07XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb3V0bGluZS12YXJpYW50KTtcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XG59XG4udGltZWxpbmVfX2RvdC0tY3VycmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG4udGltZWxpbmVfX2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGdhcDogMC4yNXJlbTtcbn1cblxuLnRpbWVsaW5lX19yb2xlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDA7XG59XG5cbi50aW1lbGluZV9fZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi50aW1lbGluZV9fZGVzYyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG4gIG1hcmdpbjogMDtcbn1cblxuLnByb2plY3RzX19ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdhcDogdmFyKC0tc3BhY2UtZ3V0dGVyKTtcbn1cblxuLnByb2plY3Qge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0X19pbWFnZS13cmFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGFzcGVjdC1yYXRpbzogMTYvOTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3Itb3V0bGluZS12YXJpYW50KTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnByb2plY3RfX2ltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XG59XG4ucHJvamVjdDpob3ZlciAucHJvamVjdF9faW1hZ2Uge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4ucHJvamVjdF9fdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMCAwIDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi5wcm9qZWN0X19saW5rLWljb24ge1xuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2U7XG59XG4ucHJvamVjdDpob3ZlciAucHJvamVjdF9fbGluay1pY29uIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnByb2plY3RfX2Rlc2Mge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xuICBtYXJnaW46IDAgMCAxcmVtO1xufVxuXG4ucHJvamVjdF9fdGFncyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi5wcm9qZWN0X190YWcge1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc3VyZmFjZS1jb250YWluZXIpO1xuICBjb2xvcjogdmFyKC0tY29sb3Itb24tc3VyZmFjZS12YXJpYW50KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNvbnRhY3RfX2ludHJvIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDAgMCB2YXIoLS1zcGFjZS1zdGFjay1tZCk7XG59XG5cbi5jb250YWN0X19mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiB2YXIoLS1zcGFjZS1ndXR0ZXIpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1zdGFjay1sZyk7XG59XG5cbi5jb250YWN0X19mb3JtLXJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBnYXA6IHZhcigtLXNwYWNlLXN0YWNrLW1kKTtcbn1cblxuLmZvcm0tZmllbGRfX2xhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuLmZvcm0tZmllbGRfX2lucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJhY2tncm91bmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1vdXRsaW5lLXZhcmlhbnQpO1xuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2U7XG59XG4uZm9ybS1maWVsZF9faW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktY29udGFpbmVyKTtcbn1cbi5mb3JtLWZpZWxkX19pbnB1dC0tdGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG4uYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG4uYnRuLS1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1jb250YWluZXIpO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5idG4tLXByaW1hcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cbi5idG4tLXByaW1hcnk6aG92ZXIgLmJ0bl9faWNvbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjI1cmVtKTtcbn1cblxuLmJ0bl9faWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcbn1cblxuLmNvbnRhY3RfX2RldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogdmFyKC0tc3BhY2Utc3RhY2stbGcpO1xuICBwYWRkaW5nLXRvcDogdmFyKC0tc3BhY2Utc3RhY2stbWQpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3Itb3V0bGluZS12YXJpYW50KTtcbn1cblxuLmNvbnRhY3RfX2RldGFpbC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG4gIG1hcmdpbjogMCAwIDAuMjVyZW07XG59XG5cbi5jb250YWN0X19kZXRhaWwtdmFsdWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDRweDtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1jb2xvci1vdXRsaW5lLXZhcmlhbnQpO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XG59XG4uY29udGFjdF9fZGV0YWlsLXZhbHVlOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uY29udGFjdF9fc29jaWFscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJhY2tncm91bmQpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3Itb3V0bGluZS12YXJpYW50KTtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2Utc3RhY2stbWQpIDA7XG59XG5cbi5mb290ZXJfX2lubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG59XG5cbi5mb290ZXJfX2NvcHkge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4uZm9vdGVyX19saW5rcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogdmFyKC0tc3BhY2UtZ3V0dGVyKTtcbn1cblxuLmZvb3Rlcl9fbGluayB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcbn1cbi5mb290ZXJfX2xpbms6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDhyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4cmVtKSB7XG4gIC5uYXZfX2xpbmtzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5uYXZfX3RvZ2dsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaGVyb19fbmFtZSB7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICB9XG4gIC5hYm91dCxcbiAgLnNraWxscyxcbiAgLmNvbnRhY3Qge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIH1cbiAgLnNlY3Rpb25fX2xhYmVsLWNvbCB7XG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcbiAgfVxuICAuc2VjdGlvbl9fYm9keSxcbiAgLnNraWxsc19fZ3JpZCB7XG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMztcbiAgfVxuICAuYXBwcm9hY2hfX2dyaWQsXG4gIC5wcm9qZWN0c19fZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgfVxuICAucHJvamVjdHNfX2dyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIH1cbiAgLnRpbWVsaW5lX19oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLmNvbnRhY3RfX2Zvcm0tcm93IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICB9XG4gIC5mb290ZXJfX2lubmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDQyx3QkFBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsaURBQUE7RUFDQSxtQ0FBQTtFQUVBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtB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Q0E7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyBEZXNpZ24gdG9rZW5zXFxuOnJvb3Qge1xcblxcdC0tY29sb3ItcHJpbWFyeTogIzE2MzMyODtcXG5cXHQtLWNvbG9yLXByaW1hcnktY29udGFpbmVyOiAjMmQ0YTNlO1xcblxcdC0tY29sb3Itb24tcHJpbWFyeS1jb250YWluZXI6ICNmZmZmZmY7XFxuXFx0LS1jb2xvci1zZWNvbmRhcnk6ICM1ZjVlNWU7XFxuXFx0LS1jb2xvci1iYWNrZ3JvdW5kOiAjZjlmOWY5O1xcblxcdC0tY29sb3Itb24tYmFja2dyb3VuZDogIzFhMWMxYztcXG5cXHQtLWNvbG9yLXN1cmZhY2UtY29udGFpbmVyOiAjZWVlZWVlO1xcblxcdC0tY29sb3Itc3VyZmFjZS1jb250YWluZXItbG93OiAjZjRmM2YzO1xcblxcdC0tY29sb3Itb3V0bGluZS12YXJpYW50OiByZ2JhKDE5MywgMjAwLCAxOTUsIDAuNSk7XFxuXFx0LS1jb2xvci1vbi1zdXJmYWNlLXZhcmlhbnQ6ICM0MjQ4NDQ7XFxuXFxuXFx0LS1zcGFjZS1tYXJnaW4tbW9iaWxlOiAyMHB4O1xcblxcdC0tc3BhY2UtZ3V0dGVyOiAyNHB4O1xcblxcdC0tc3BhY2Utc3RhY2stc206IDhweDtcXG5cXHQtLXNwYWNlLXN0YWNrLW1kOiAyNHB4O1xcblxcdC0tc3BhY2Utc3RhY2stbGc6IDY0cHg7XFxuXFx0LS1jb250YWluZXItbWF4OiA4MDBweDtcXG59XFxuXFxuKiB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiR2Vpc3RcXFwiLCBzYW5zLXNlcmlmO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJhY2tncm91bmQpO1xcblxcdGNvbG9yOiB2YXIoLS1jb2xvci1vbi1iYWNrZ3JvdW5kKTtcXG5cXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuXFxuOjpzZWxlY3Rpb24ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktY29udGFpbmVyKTtcXG5cXHRjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuYSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuXFx0Zm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFxcXCJGSUxMXFxcIiAwLCBcXFwid2dodFxcXCIgMzAwLCBcXFwiR1JBRFxcXCIgMCwgXFxcIm9wc3pcXFwiIDI0O1xcblxcdGZvbnQtc2l6ZTogMS4yNXJlbTtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuXFx0bWF4LXdpZHRoOiB2YXIoLS1jb250YWluZXItbWF4KTtcXG5cXHRtYXJnaW46IDAgYXV0bztcXG5cXHRwYWRkaW5nOiAwIHZhcigtLXNwYWNlLW1hcmdpbi1tb2JpbGUpO1xcbn1cXG5cXG4uZGl2aWRlciB7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1vdXRsaW5lLXZhcmlhbnQpO1xcblxcdG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXN0YWNrLWxnKTtcXG59XFxuXFxuLy8gUmV2ZWFsLW9uLXNjcm9sbCAodG9nZ2xlZCB2aWEgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaW4gaW5kZXguanMpXFxuLnNlY3Rpb24ge1xcblxcdG9wYWNpdHk6IDA7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFyZW0pO1xcblxcdHRyYW5zaXRpb246IG9wYWNpdHkgMC43cyBlYXNlLW91dCwgdHJhbnNmb3JtIDAuN3MgZWFzZS1vdXQ7XFxuXFx0bWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2Utc3RhY2stbGcpO1xcblxcblxcdCYuaXMtdmlzaWJsZSB7XFxuXFx0XFx0b3BhY2l0eTogMTtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuXFx0fVxcbn1cXG5cXG4uc2VjdGlvbl9fbGFiZWwge1xcblxcdGZvbnQtc2l6ZTogMTNweDtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXHRjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG5cXHRtYXJnaW46IDAgMCB2YXIoLS1zcGFjZS1zdGFjay1tZCk7XFxufVxcblxcbi8vIEFib3V0IC8gU2tpbGxzIC8gQ29udGFjdCBzaGFyZSBhIGxhYmVsLWNvbHVtbiArIGJvZHkgbGF5b3V0XFxuLmFib3V0LFxcbi5za2lsbHMsXFxuLmNvbnRhY3Qge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuXFx0Z2FwOiB2YXIoLS1zcGFjZS1ndXR0ZXIpO1xcbn1cXG5cXG4uc2VjdGlvbl9fbGFiZWwtY29sIHtcXG5cXHQuc2VjdGlvbl9fbGFiZWwge1xcblxcdFxcdG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXN0YWNrLXNtKTtcXG5cXHR9XFxufVxcblxcbi8vIE5hdlxcbi5uYXYge1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHR6LWluZGV4OiA1MDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OSwgMjQ5LCAyNDksIDAuOCk7XFxuXFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLW91dGxpbmUtdmFyaWFudCk7XFxufVxcblxcbi5uYXZfX2lubmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmctdG9wOiAxcmVtO1xcblxcdHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4ubmF2X19icmFuZCB7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XFxuXFx0Y29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbn1cXG5cXG4ubmF2X19saW5rcyB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogdmFyKC0tc3BhY2Utc3RhY2stbWQpO1xcblxcblxcdCYtLW9wZW4ge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdHRvcDogMTAwJTtcXG5cXHRcXHRsZWZ0OiAwO1xcblxcdFxcdHJpZ2h0OiAwO1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXFx0XFx0Z2FwOiB2YXIoLS1zcGFjZS1zdGFjay1zbSk7XFxuXFx0XFx0cGFkZGluZzogdmFyKC0tc3BhY2Utc3RhY2stbWQpIHZhcigtLXNwYWNlLW1hcmdpbi1tb2JpbGUpO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJhY2tncm91bmQpO1xcblxcdFxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1vdXRsaW5lLXZhcmlhbnQpO1xcblxcdH1cXG59XFxuXFxuLm5hdl9fbGluayB7XFxuXFx0Y29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxuXFx0Zm9udC1zaXplOiAxMXB4O1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcdHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcXG5cXG5cXHQmOmhvdmVyIHtcXG5cXHRcXHRjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuXFx0fVxcbn1cXG5cXG4ubmF2X190b2dnbGUge1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XFxufVxcblxcbi8vIEhlcm9cXG4uaGVyb19fbmFtZSB7XFxuXFx0Zm9udC1zaXplOiAzMnB4O1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XFxuXFx0bGluZS1oZWlnaHQ6IDEuMjtcXG5cXHRtYXJnaW46IDAgMCAxcmVtO1xcbn1cXG5cXG4uaGVyb19fcm9sZSB7XFxuXFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XFxuXFx0bGluZS1oZWlnaHQ6IDEuMztcXG5cXHRjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuXFx0bWFyZ2luOiAwIDAgMS41cmVtO1xcbn1cXG5cXG4uaGVyb19fZGVzY3JpcHRpb24ge1xcblxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHRsaW5lLWhlaWdodDogMS42O1xcblxcdGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcblxcdG1heC13aWR0aDogNDJyZW07XFxuXFx0bWFyZ2luOiAwIDAgMnJlbTtcXG59XFxuXFxuLmhlcm9fX2FjdGlvbnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IHZhcigtLXNwYWNlLWd1dHRlcik7XFxufVxcblxcbi5oZXJvX19saW5rIHtcXG5cXHRmb250LXNpemU6IDEzcHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG5cXHRsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFx0Y29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcdHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuXFxuXFx0Jjpob3ZlciB7XFxuXFx0XFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcblxcdH1cXG5cXG5cXHQmLS1wcmltYXJ5IHtcXG5cXHRcXHRjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuXFx0XFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG5cXG5cXHRcXHQmOmhvdmVyIHtcXG5cXHRcXHRcXHRjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1jb250YWluZXIpO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbi8vIEFib3V0XFxuLmFib3V0X190ZXh0IHtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNjtcXG5cXHRtYXJnaW46IDAgMCB2YXIoLS1zcGFjZS1zdGFjay1tZCk7XFxufVxcblxcbi5hYm91dF9fcGhvdG8tc2xvdCBpbWcge1xcblxcdHdpZHRoOiA4cmVtO1xcblxcdGhlaWdodDogOHJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0b2JqZWN0LWZpdDogY292ZXI7XFxuXFx0bWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2Utc3RhY2stbWQpO1xcbn1cXG5cXG4uYWJvdXRfX3F1b3RlIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMS41cmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXN1cmZhY2UtY29udGFpbmVyLWxvdyk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3Itb3V0bGluZS12YXJpYW50KTtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbn1cXG5cXG4vLyBBcHByb2FjaFxcbi5hcHByb2FjaF9fZ3JpZCB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG5cXHRnYXA6IHZhcigtLXNwYWNlLXN0YWNrLW1kKTtcXG59XFxuXFxuLmFwcHJvYWNoX19jYXJkIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxcmVtO1xcblxcdHBhZGRpbmc6IDEuNXJlbTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1vdXRsaW5lLXZhcmlhbnQpO1xcbn1cXG5cXG4uYXBwcm9hY2hfX2ljb24ge1xcblxcdGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG59XFxuXFxuLmFwcHJvYWNoX190aXRsZSB7XFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uYXBwcm9hY2hfX2Rlc2Mge1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG5cXHRjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi8vIFNraWxsc1xcbi5za2lsbHNfX2dyaWQge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG5cXHRnYXA6IHZhcigtLXNwYWNlLXN0YWNrLW1kKTtcXG59XFxuXFxuLnNraWxsc19fZ3JvdXAtdGl0bGUge1xcblxcdGZvbnQtc2l6ZTogMTNweDtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG5cXHRtYXJnaW46IDAgMCB2YXIoLS1zcGFjZS1zdGFjay1zbSk7XFxufVxcblxcbi5za2lsbHNfX2xpc3Qge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Y29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcblxcdGxpIHtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xcblxcdH1cXG59XFxuXFxuLy8gVGltZWxpbmVcXG4udGltZWxpbmVfX2xpc3Qge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRwYWRkaW5nLWxlZnQ6IDJyZW07XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogdmFyKC0tc3BhY2Utc3RhY2stbGcpO1xcblxcblxcdCY6OmJlZm9yZSB7XFxuXFx0XFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdGxlZnQ6IDA7XFxuXFx0XFx0dG9wOiAwO1xcblxcdFxcdGhlaWdodDogMTAwJTtcXG5cXHRcXHR3aWR0aDogMXB4O1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW91dGxpbmUtdmFyaWFudCk7XFxuXFx0fVxcbn1cXG5cXG4udGltZWxpbmVfX2l0ZW0ge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRpbWVsaW5lX19kb3Qge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRsZWZ0OiAtMi4yNXJlbTtcXG5cXHR0b3A6IDAuMjVyZW07XFxuXFx0d2lkdGg6IDFyZW07XFxuXFx0aGVpZ2h0OiAxcmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1vdXRsaW5lLXZhcmlhbnQpO1xcblxcdGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWNvbG9yLWJhY2tncm91bmQpO1xcblxcblxcdCYtLWN1cnJlbnQge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcblxcdH1cXG59XFxuXFxuLnRpbWVsaW5lX19oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcblxcdG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG5cXHRnYXA6IDAuMjVyZW07XFxufVxcblxcbi50aW1lbGluZV9fcm9sZSB7XFxuXFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4udGltZWxpbmVfX2RhdGUge1xcblxcdGZvbnQtc2l6ZTogMTNweDtcXG5cXHRjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG59XFxuXFxuLnRpbWVsaW5lX19kZXNjIHtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0Y29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4vLyBQcm9qZWN0c1xcbi5wcm9qZWN0c19fZ3JpZCB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG5cXHRnYXA6IHZhcigtLXNwYWNlLWd1dHRlcik7XFxufVxcblxcbi5wcm9qZWN0IHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0X19pbWFnZS13cmFwIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRhc3BlY3QtcmF0aW86IDE2IC8gOTtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLW91dGxpbmUtdmFyaWFudCk7XFxuXFx0bWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnByb2plY3RfX2ltYWdlIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0b2JqZWN0LWZpdDogY292ZXI7XFxuXFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcXG5cXG5cXHQucHJvamVjdDpob3ZlciAmIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcblxcdH1cXG59XFxuXFxuLnByb2plY3RfX3RpdGxlIHtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG5cXHRtYXJnaW46IDAgMCAwLjVyZW07XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMC41cmVtO1xcbn1cXG5cXG4ucHJvamVjdF9fbGluay1pY29uIHtcXG5cXHRjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG5cXHRvcGFjaXR5OiAwO1xcblxcdHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlO1xcblxcblxcdC5wcm9qZWN0OmhvdmVyICYge1xcblxcdFxcdG9wYWNpdHk6IDE7XFxuXFx0fVxcbn1cXG5cXG4ucHJvamVjdF9fZGVzYyB7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcblxcdGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcblxcdG1hcmdpbjogMCAwIDFyZW07XFxufVxcblxcbi5wcm9qZWN0X190YWdzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnByb2plY3RfX3RhZyB7XFxuXFx0cGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc3VyZmFjZS1jb250YWluZXIpO1xcblxcdGNvbG9yOiB2YXIoLS1jb2xvci1vbi1zdXJmYWNlLXZhcmlhbnQpO1xcblxcdGZvbnQtc2l6ZTogMTBweDtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi8vIENvbnRhY3RcXG4uY29udGFjdF9faW50cm8ge1xcblxcdGZvbnQtc2l6ZTogMzJweDtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcblxcdG1hcmdpbjogMCAwIHZhcigtLXNwYWNlLXN0YWNrLW1kKTtcXG59XFxuXFxuLmNvbnRhY3RfX2Zvcm0ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IHZhcigtLXNwYWNlLWd1dHRlcik7XFxuXFx0bWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2Utc3RhY2stbGcpO1xcbn1cXG5cXG4uY29udGFjdF9fZm9ybS1yb3cge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuXFx0Z2FwOiB2YXIoLS1zcGFjZS1zdGFjay1tZCk7XFxufVxcblxcbi5mb3JtLWZpZWxkX19sYWJlbCB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Zm9udC1zaXplOiAxM3B4O1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcdGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcblxcdG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLmZvcm0tZmllbGRfX2lucHV0IHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1vdXRsaW5lLXZhcmlhbnQpO1xcblxcdHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0dHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMgZWFzZTtcXG5cXG5cXHQmOmZvY3VzIHtcXG5cXHRcXHRvdXRsaW5lOiBub25lO1xcblxcdFxcdGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1jb250YWluZXIpO1xcblxcdH1cXG5cXG5cXHQmLS10ZXh0YXJlYSB7XFxuXFx0XFx0cmVzaXplOiB2ZXJ0aWNhbDtcXG5cXHR9XFxufVxcblxcbi5idG4ge1xcblxcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAwLjVyZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRmb250LXNpemU6IDEzcHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG5cXHRsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFx0cGFkZGluZzogMXJlbSAycmVtO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuXFxuXFx0Ji0tcHJpbWFyeSB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1jb250YWluZXIpO1xcblxcdFxcdGNvbG9yOiAjZmZmZmZmO1xcblxcblxcdFxcdCY6aG92ZXIge1xcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQmOmhvdmVyIC5idG5fX2ljb24ge1xcblxcdFxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjI1cmVtKTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG4uYnRuX19pY29uIHtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcXG59XFxuXFxuLmNvbnRhY3RfX2RldGFpbHMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGdhcDogdmFyKC0tc3BhY2Utc3RhY2stbGcpO1xcblxcdHBhZGRpbmctdG9wOiB2YXIoLS1zcGFjZS1zdGFjay1tZCk7XFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLW91dGxpbmUtdmFyaWFudCk7XFxufVxcblxcbi5jb250YWN0X19kZXRhaWwtbGFiZWwge1xcblxcdGZvbnQtc2l6ZTogMTNweDtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcdGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcblxcdG1hcmdpbjogMCAwIDAuMjVyZW07XFxufVxcblxcbi5jb250YWN0X19kZXRhaWwtdmFsdWUge1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG5cXHR0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDRweDtcXG5cXHR0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWNvbG9yLW91dGxpbmUtdmFyaWFudCk7XFxuXFx0dHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xcblxcblxcdCY6aG92ZXIge1xcblxcdFxcdGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG5cXHR9XFxufVxcblxcbi5jb250YWN0X19zb2NpYWxzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuLy8gRm9vdGVyXFxuLmZvb3RlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLW91dGxpbmUtdmFyaWFudCk7XFxuXFx0cGFkZGluZzogdmFyKC0tc3BhY2Utc3RhY2stbWQpIDA7XFxufVxcblxcbi5mb290ZXJfX2lubmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4uZm9vdGVyX19jb3B5IHtcXG5cXHRmb250LXNpemU6IDEzcHg7XFxuXFx0Y29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxufVxcblxcbi5mb290ZXJfX2xpbmtzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogdmFyKC0tc3BhY2UtZ3V0dGVyKTtcXG59XFxuXFxuLmZvb3Rlcl9fbGluayB7XFxuXFx0Zm9udC1zaXplOiAxM3B4O1xcblxcdGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcblxcdHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcXG5cXG5cXHQmOmhvdmVyIHtcXG5cXHRcXHRjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuXFx0fVxcbn1cXG5cXG4vLyBMYXlvdXQgYWRqdXN0bWVudHNcXG4uY29udGVudCB7XFxuXFx0cGFkZGluZy10b3A6IDhyZW07XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4cmVtKSB7XFxuXFx0Lm5hdl9fbGlua3Mge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0fVxcblxcblxcdC5uYXZfX3RvZ2dsZSB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxuXFxuXFx0Lmhlcm9fX25hbWUge1xcblxcdFxcdGZvbnQtc2l6ZTogNDhweDtcXG5cXHR9XFxuXFxuXFx0LmFib3V0LFxcblxcdC5za2lsbHMsXFxuXFx0LmNvbnRhY3Qge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuXFx0fVxcblxcblxcdC5zZWN0aW9uX19sYWJlbC1jb2wge1xcblxcdFxcdGdyaWQtY29sdW1uOiBzcGFuIDE7XFxuXFx0fVxcblxcblxcdC5zZWN0aW9uX19ib2R5LFxcblxcdC5za2lsbHNfX2dyaWQge1xcblxcdFxcdGdyaWQtY29sdW1uOiBzcGFuIDM7XFxuXFx0fVxcblxcblxcdC5hcHByb2FjaF9fZ3JpZCxcXG5cXHQucHJvamVjdHNfX2dyaWQge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuXFx0fVxcblxcblxcdC5wcm9qZWN0c19fZ3JpZCB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG5cXHR9XFxuXFxuXFx0LnRpbWVsaW5lX19oZWFkZXIge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0fVxcblxcblxcdC5jb250YWN0X19mb3JtLXJvdyB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG5cXHR9XFxuXFxuXFx0LmZvb3Rlcl9faW5uZXIge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBgPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uIGNvbnRhY3QgY29udGFpbmVyXCIgaWQ9XCJjb250YWN0XCI+XG5cdDxkaXYgY2xhc3M9XCJzZWN0aW9uX19sYWJlbC1jb2xcIj5cblx0XHQ8aDIgY2xhc3M9XCJzZWN0aW9uX19sYWJlbFwiPkNvbnRhY3Q8L2gyPlxuXHQ8L2Rpdj5cblx0PGRpdiBjbGFzcz1cInNlY3Rpb25fX2JvZHlcIj5cblx0XHQ8aDMgY2xhc3M9XCJjb250YWN0X19pbnRyb1wiPlxuXHRcdFx0TGV0J3MgZGlzY3VzcyB0aGUgbmV4dCBldm9sdXRpb24gb2YgeW91ciBzdGFjay5cblx0XHQ8L2gzPlxuXHRcdDxmb3JtIGNsYXNzPVwiY29udGFjdF9fZm9ybVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRhY3RfX2Zvcm0tcm93XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkXCI+XG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiZm9ybS1maWVsZF9fbGFiZWxcIiBmb3I9XCJjb250YWN0LW5hbWVcIj5OYW1lPC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdGNsYXNzPVwiZm9ybS1maWVsZF9faW5wdXRcIlxuXHRcdFx0XHRcdFx0aWQ9XCJjb250YWN0LW5hbWVcIlxuXHRcdFx0XHRcdFx0bmFtZT1cIm5hbWVcIlxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJKYW5lIERvZVwiXG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkXCI+XG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiZm9ybS1maWVsZF9fbGFiZWxcIiBmb3I9XCJjb250YWN0LWVtYWlsXCI+RW1haWw8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJmb3JtLWZpZWxkX19pbnB1dFwiXG5cdFx0XHRcdFx0XHRpZD1cImNvbnRhY3QtZW1haWxcIlxuXHRcdFx0XHRcdFx0bmFtZT1cImVtYWlsXCJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiamFuZUBleGFtcGxlLmNvbVwiXG5cdFx0XHRcdFx0XHR0eXBlPVwiZW1haWxcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuXHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJmb3JtLWZpZWxkX19sYWJlbFwiIGZvcj1cImNvbnRhY3QtbWVzc2FnZVwiPk1lc3NhZ2U8L2xhYmVsPlxuXHRcdFx0XHQ8dGV4dGFyZWFcblx0XHRcdFx0XHRjbGFzcz1cImZvcm0tZmllbGRfX2lucHV0IGZvcm0tZmllbGRfX2lucHV0LS10ZXh0YXJlYVwiXG5cdFx0XHRcdFx0aWQ9XCJjb250YWN0LW1lc3NhZ2VcIlxuXHRcdFx0XHRcdG5hbWU9XCJtZXNzYWdlXCJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkRlc2NyaWJlIHRoZSBhcmNoaXRlY3R1cmFsIGNoYWxsZW5nZS4uLlwiXG5cdFx0XHRcdFx0cm93cz1cIjRcIlxuXHRcdFx0XHQ+PC90ZXh0YXJlYT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XG5cdFx0XHRcdFNlbmQgSW5xdWlyeVxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgYnRuX19pY29uXCI+c2VuZDwvc3Bhbj5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvZm9ybT5cblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFjdF9fZGV0YWlsc1wiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRhY3RfX2RldGFpbFwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImNvbnRhY3RfX2RldGFpbC1sYWJlbFwiPkVtYWlsPC9wPlxuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdGNsYXNzPVwiY29udGFjdF9fZGV0YWlsLXZhbHVlXCJcblx0XHRcdFx0XHRocmVmPVwibWFpbHRvOm5pY29sYXMuZ29uemFsZXpAZm9yZ2UuY29tXCJcblx0XHRcdFx0XHQ+bmljb2xhcy5nb256YWxlekBmb3JnZS5jb208L2Fcblx0XHRcdFx0PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGFjdF9fZGV0YWlsXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwiY29udGFjdF9fZGV0YWlsLWxhYmVsXCI+U29jaWFsPC9wPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGFjdF9fc29jaWFsc1wiPlxuXHRcdFx0XHRcdDxhIGNsYXNzPVwiY29udGFjdF9fZGV0YWlsLXZhbHVlXCIgaHJlZj1cIiNcIj5MaW5rZWRJbjwvYT5cblx0XHRcdFx0XHQ8YSBjbGFzcz1cImNvbnRhY3RfX2RldGFpbC12YWx1ZVwiIGhyZWY9XCIjXCI+R2l0SHViPC9hPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvc2VjdGlvbj5cbmA7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBgPGZvb3RlciBjbGFzcz1cImZvb3RlclwiPlxuXHQ8ZGl2IGNsYXNzPVwiZm9vdGVyX19pbm5lciBjb250YWluZXJcIj5cblx0XHQ8c3BhbiBjbGFzcz1cImZvb3Rlcl9fY29weVwiXG5cdFx0XHQ+wqkgMjAyNCBOaWNvbMOhcyBHb256w6FsZXouIFNvZnR3YXJlIEFyY2hpdGVjdCBpbiB0cmFuc2l0aW9uLjwvc3BhblxuXHRcdD5cblx0XHQ8ZGl2IGNsYXNzPVwiZm9vdGVyX19saW5rc1wiPlxuXHRcdFx0PGEgY2xhc3M9XCJmb290ZXJfX2xpbmtcIiBocmVmPVwiI1wiPkxpbmtlZEluPC9hPlxuXHRcdFx0PGEgY2xhc3M9XCJmb290ZXJfX2xpbmtcIiBocmVmPVwiI1wiPkdpdEh1YjwvYT5cblx0XHRcdDxhIGNsYXNzPVwiZm9vdGVyX19saW5rXCIgaHJlZj1cIiNcIj5YIC8gVHdpdHRlcjwvYT5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L2Zvb3Rlcj5cbmA7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBgPG5hdiBjbGFzcz1cIm5hdlwiPlxuXHQ8ZGl2IGNsYXNzPVwibmF2X19pbm5lciBjb250YWluZXJcIj5cblx0XHQ8c3BhbiBjbGFzcz1cIm5hdl9fYnJhbmRcIj5BcmNoaXRlY3R1cmFsIExvZ2ljPC9zcGFuPlxuXHRcdDxkaXYgY2xhc3M9XCJuYXZfX2xpbmtzXCI+XG5cdFx0XHQ8YSBjbGFzcz1cIm5hdl9fbGlua1wiIGhyZWY9XCIjcHJvamVjdHNcIj5Qcm9qZWN0czwvYT5cblx0XHRcdDxhIGNsYXNzPVwibmF2X19saW5rXCIgaHJlZj1cIiNza2lsbHNcIj5Ta2lsbHM8L2E+XG5cdFx0XHQ8YSBjbGFzcz1cIm5hdl9fbGlua1wiIGhyZWY9XCIjZXhwZXJpZW5jZVwiPlJlc3VtZTwvYT5cblx0XHRcdDxhIGNsYXNzPVwibmF2X19saW5rXCIgaHJlZj1cIiNjb250YWN0XCI+Q29udGFjdDwvYT5cblx0XHQ8L2Rpdj5cblx0XHQ8YnV0dG9uIGNsYXNzPVwibmF2X190b2dnbGVcIiB0eXBlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBtZW51XCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5tZW51PC9zcGFuPlxuXHRcdDwvYnV0dG9uPlxuXHQ8L2Rpdj5cbjwvbmF2PlxuYDtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IGA8bWFpbiBjbGFzcz1cImNvbnRlbnQgY29udGFpbmVyXCI+XG5cdDwhLS0gSGVybyAtLT5cblx0PHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uIGhlcm9cIj5cblx0XHQ8aDEgY2xhc3M9XCJoZXJvX19uYW1lXCI+Tmljb2zDoXMgR29uesOhbGV6PC9oMT5cblx0XHQ8cCBjbGFzcz1cImhlcm9fX3JvbGVcIj5GdWxsLVN0YWNrIFNvZnR3YXJlIEVuZ2luZWVyPC9wPlxuXHRcdDxwIGNsYXNzPVwiaGVyb19fZGVzY3JpcHRpb25cIj5cblx0XHRcdEJ1aWxkaW5nIHJlc2lsaWVudCBzeXN0ZW1zIGF0IHRoZSBpbnRlcnNlY3Rpb24gb2YgcGVyZm9ybWFuY2UgYW5kXG5cdFx0XHRzY2FsYWJpbGl0eS4gVHJhbnNpdGlvbmluZyBpbnRvIFNvZnR3YXJlIEFyY2hpdGVjdHVyZSB3aXRoIGEgZm9jdXMgb25cblx0XHRcdGhpZ2gtaW50ZWdyaXR5IGRpc3RyaWJ1dGVkIHN5c3RlbXMuXG5cdFx0PC9wPlxuXHRcdDxkaXYgY2xhc3M9XCJoZXJvX19hY3Rpb25zXCI+XG5cdFx0XHQ8YSBjbGFzcz1cImhlcm9fX2xpbmsgaGVyb19fbGluay0tcHJpbWFyeVwiIGhyZWY9XCIjcHJvamVjdHNcIlxuXHRcdFx0XHQ+VmlldyBteSB3b3JrPC9hXG5cdFx0XHQ+XG5cdFx0XHQ8YSBjbGFzcz1cImhlcm9fX2xpbmtcIiBocmVmPVwiI2NvbnRhY3RcIj5HZXQgaW4gdG91Y2g8L2E+XG5cdFx0PC9kaXY+XG5cdDwvc2VjdGlvbj5cblxuXHQ8aHIgY2xhc3M9XCJkaXZpZGVyXCIgLz5cblxuXHQ8IS0tIEFib3V0IC0tPlxuXHQ8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb24gYWJvdXRcIj5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbl9fbGFiZWwtY29sXCI+XG5cdFx0XHQ8aDIgY2xhc3M9XCJzZWN0aW9uX19sYWJlbFwiPkFib3V0PC9oMj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbl9fYm9keVwiPlxuXHRcdFx0PHAgY2xhc3M9XCJhYm91dF9fdGV4dFwiPlxuXHRcdFx0XHRXaXRoIG92ZXIgNSB5ZWFycyBvZiBwcm9mZXNzaW9uYWwgZXhwZXJpZW5jZSwgSSBhbSBjdXJyZW50bHkgYXRcblx0XHRcdFx0PHN0cm9uZz5Gb3JnZTwvc3Ryb25nPiBpbiBCb2dvdMOhLCB3aGVyZSBJIGFyY2hpdGVjdCBhbmQgaW1wbGVtZW50XG5cdFx0XHRcdGNyaXRpY2FsIGluZnJhc3RydWN0dXJlIGNvbXBvbmVudHMuIE15IGpvdXJuZXkgaXMgZGVmaW5lZCBieSBhIGRlZXBcblx0XHRcdFx0Y3VyaW9zaXR5IGZvciBob3cgbGFyZ2Utc2NhbGUgc3lzdGVtcyBiZWhhdmUgdW5kZXIgcHJlc3N1cmUuXG5cdFx0XHQ8L3A+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYWJvdXRfX3Bob3RvLXNsb3RcIj48L2Rpdj5cblx0XHRcdDxibG9ja3F1b3RlIGNsYXNzPVwiYWJvdXRfX3F1b3RlXCI+XG5cdFx0XHRcdFwiSSBiZWxpZXZlIGNvZGUgaXMgYSBsaWFiaWxpdHksIGJ1dCBhcmNoaXRlY3R1cmUgaXMgYW4gYXNzZXQuIE15IGZvY3VzXG5cdFx0XHRcdGlzIG9uIHJlZHVjaW5nIGNvZ25pdGl2ZSBsb2FkIGZvciBkZXZlbG9wZXJzIHdoaWxlIGVuc3VyaW5nIHN5c3RlbVxuXHRcdFx0XHRsb25nZXZpdHkgdGhyb3VnaCBKYXZhLCBLdWJlcm5ldGVzLCBhbmQgUnVzdC5cIlxuXHRcdFx0PC9ibG9ja3F1b3RlPlxuXHRcdDwvZGl2PlxuXHQ8L3NlY3Rpb24+XG5cblx0PGhyIGNsYXNzPVwiZGl2aWRlclwiIC8+XG5cblx0PCEtLSBBcHByb2FjaCAtLT5cblx0PHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uIGFwcHJvYWNoXCI+XG5cdFx0PGgyIGNsYXNzPVwic2VjdGlvbl9fbGFiZWxcIj5BcmNoaXRlY3R1cmFsIEFwcHJvYWNoPC9oMj5cblx0XHQ8ZGl2IGNsYXNzPVwiYXBwcm9hY2hfX2dyaWRcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJhcHByb2FjaF9fY2FyZFwiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgYXBwcm9hY2hfX2ljb25cIj5iYWxhbmNlPC9zcGFuPlxuXHRcdFx0XHQ8aDMgY2xhc3M9XCJhcHByb2FjaF9fdGl0bGVcIj5UcmFkZW9mZiBBbmFseXNpczwvaDM+XG5cdFx0XHRcdDxwIGNsYXNzPVwiYXBwcm9hY2hfX2Rlc2NcIj5cblx0XHRcdFx0XHRFdmVyeSB0ZWNobmljYWwgZGVjaXNpb24gaXMgYSBjaG9pY2UgYmV0d2VlbiBjb25zdHJhaW50cy4gSSBwcmlvcml0aXplXG5cdFx0XHRcdFx0bG9uZy10ZXJtIG1haW50YWluYWJpbGl0eSBvdmVyIHNob3J0LXRlcm0gdmVsb2NpdHkuXG5cdFx0XHRcdDwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImFwcHJvYWNoX19jYXJkXCI+XG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCBhcHByb2FjaF9faWNvblwiPmxheWVyczwvc3Bhbj5cblx0XHRcdFx0PGgzIGNsYXNzPVwiYXBwcm9hY2hfX3RpdGxlXCI+U2NhbGFiaWxpdHkgRmlyc3Q8L2gzPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImFwcHJvYWNoX19kZXNjXCI+XG5cdFx0XHRcdFx0RGVzaWduaW5nIHN5c3RlbXMgdGhhdCBoYW5kbGUgMTB4IGdyb3d0aCB3aXRob3V0IGEgZnVsbCByZXdyaXRlLiBGb2N1c1xuXHRcdFx0XHRcdG9uIHN0YXRlbGVzc25lc3MgYW5kIGRpc3RyaWJ1dGVkIHBhdHRlcm5zLlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJhcHByb2FjaF9fY2FyZFwiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgYXBwcm9hY2hfX2ljb25cIj5zaGllbGQ8L3NwYW4+XG5cdFx0XHRcdDxoMyBjbGFzcz1cImFwcHJvYWNoX190aXRsZVwiPk9ic2VydmFiaWxpdHk8L2gzPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImFwcHJvYWNoX19kZXNjXCI+XG5cdFx0XHRcdFx0QSBzeXN0ZW0gaXMgb25seSBhcyBnb29kIGFzIGl0cyB0ZWxlbWV0cnkuIEltcGxlbWVudGF0aW9uIG9mIHJpZ29yb3VzXG5cdFx0XHRcdFx0bG9nZ2luZywgbWV0cmljcywgYW5kIHRyYWNpbmcgY3ljbGVzLlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9zZWN0aW9uPlxuXG5cdDxociBjbGFzcz1cImRpdmlkZXJcIiAvPlxuXG5cdDwhLS0gU2tpbGxzIC0tPlxuXHQ8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb24gc2tpbGxzXCIgaWQ9XCJza2lsbHNcIj5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbl9fbGFiZWwtY29sXCI+XG5cdFx0XHQ8aDIgY2xhc3M9XCJzZWN0aW9uX19sYWJlbFwiPlRlY2huaWNhbCBTdGFjazwvaDI+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cInNraWxsc19fZ3JpZFwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInNraWxsc19fZ3JvdXBcIj5cblx0XHRcdFx0PGg0IGNsYXNzPVwic2tpbGxzX19ncm91cC10aXRsZVwiPkxhbmd1YWdlczwvaDQ+XG5cdFx0XHRcdDx1bCBjbGFzcz1cInNraWxsc19fbGlzdFwiPlxuXHRcdFx0XHRcdDxsaT5KYXZhIChTcHJpbmcgQm9vdCk8L2xpPlxuXHRcdFx0XHRcdDxsaT5SdXN0IChUb2tpbywgQXh1bSk8L2xpPlxuXHRcdFx0XHRcdDxsaT5UeXBlU2NyaXB0IC8gTm9kZS5qczwvbGk+XG5cdFx0XHRcdFx0PGxpPkdvIChNaWNyb3NlcnZpY2VzKTwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJza2lsbHNfX2dyb3VwXCI+XG5cdFx0XHRcdDxoNCBjbGFzcz1cInNraWxsc19fZ3JvdXAtdGl0bGVcIj5JbmZyYXN0cnVjdHVyZTwvaDQ+XG5cdFx0XHRcdDx1bCBjbGFzcz1cInNraWxsc19fbGlzdFwiPlxuXHRcdFx0XHRcdDxsaT5LdWJlcm5ldGVzICZhbXA7IERvY2tlcjwvbGk+XG5cdFx0XHRcdFx0PGxpPkFXUyAoRUtTLCBSRFMsIFMzKTwvbGk+XG5cdFx0XHRcdFx0PGxpPlRlcnJhZm9ybSAvIElhQzwvbGk+XG5cdFx0XHRcdFx0PGxpPkdpdEh1YiBBY3Rpb25zIENJL0NEPC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cInNraWxsc19fZ3JvdXBcIj5cblx0XHRcdFx0PGg0IGNsYXNzPVwic2tpbGxzX19ncm91cC10aXRsZVwiPkRhdGFiYXNlczwvaDQ+XG5cdFx0XHRcdDx1bCBjbGFzcz1cInNraWxsc19fbGlzdFwiPlxuXHRcdFx0XHRcdDxsaT5Qb3N0Z3JlU1FMPC9saT5cblx0XHRcdFx0XHQ8bGk+UmVkaXMgKENhY2hpbmcpPC9saT5cblx0XHRcdFx0XHQ8bGk+RWxhc3RpY3NlYXJjaDwvbGk+XG5cdFx0XHRcdFx0PGxpPk1vbmdvREI8L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwic2tpbGxzX19ncm91cFwiPlxuXHRcdFx0XHQ8aDQgY2xhc3M9XCJza2lsbHNfX2dyb3VwLXRpdGxlXCI+UHJhY3RpY2VzPC9oND5cblx0XHRcdFx0PHVsIGNsYXNzPVwic2tpbGxzX19saXN0XCI+XG5cdFx0XHRcdFx0PGxpPkRvbWFpbi1Ecml2ZW4gRGVzaWduPC9saT5cblx0XHRcdFx0XHQ8bGk+VEREIC8gUHJvcGVydHkgVGVzdGluZzwvbGk+XG5cdFx0XHRcdFx0PGxpPkV2ZW50IFNvdXJjaW5nPC9saT5cblx0XHRcdFx0XHQ8bGk+Z1JQQyAmYW1wOyBQcm90b2J1ZjwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9zZWN0aW9uPlxuXG5cdDxociBjbGFzcz1cImRpdmlkZXJcIiAvPlxuXG5cdDwhLS0gRXhwZXJpZW5jZSAtLT5cblx0PHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uIHRpbWVsaW5lXCIgaWQ9XCJleHBlcmllbmNlXCI+XG5cdFx0PGgyIGNsYXNzPVwic2VjdGlvbl9fbGFiZWxcIj5Qcm9mZXNzaW9uYWwgVHJhamVjdG9yeTwvaDI+XG5cdFx0PGRpdiBjbGFzcz1cInRpbWVsaW5lX19saXN0XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidGltZWxpbmVfX2l0ZW1cIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInRpbWVsaW5lX19kb3QgdGltZWxpbmVfX2RvdC0tY3VycmVudFwiPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGltZWxpbmVfX2hlYWRlclwiPlxuXHRcdFx0XHRcdDxoMyBjbGFzcz1cInRpbWVsaW5lX19yb2xlXCI+U29mdHdhcmUgRW5naW5lZXIgQCBGb3JnZTwvaDM+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ0aW1lbGluZV9fZGF0ZVwiPkphbiAyMDIyIOKAlCBQcmVzZW50PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHAgY2xhc3M9XCJ0aW1lbGluZV9fZGVzY1wiPlxuXHRcdFx0XHRcdExlYWRpbmcgdGhlIHRyYW5zaXRpb24gZnJvbSBhIG1vbm9saXRoaWMgYXJjaGl0ZWN0dXJlIHRvIGFcblx0XHRcdFx0XHRzZXJ2aWNlLW1lc2ggYmFzZWQgZWNvc3lzdGVtIGluIEJvZ290w6EuIFJlZHVjZWQgbGF0ZW5jeSBieSA0MCUgdGhyb3VnaFxuXHRcdFx0XHRcdFJ1c3QtYmFzZWQgc2lkZWNhciBpbXBsZW1lbnRhdGlvbi5cblx0XHRcdFx0PC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidGltZWxpbmVfX2l0ZW1cIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInRpbWVsaW5lX19kb3RcIj48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInRpbWVsaW5lX19oZWFkZXJcIj5cblx0XHRcdFx0XHQ8aDMgY2xhc3M9XCJ0aW1lbGluZV9fcm9sZVwiPkZ1bGwtU3RhY2sgRGV2ZWxvcGVyIEAgVGVjaE5vdmE8L2gzPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidGltZWxpbmVfX2RhdGVcIj4yMDE5IOKAlCAyMDIxPC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHAgY2xhc3M9XCJ0aW1lbGluZV9fZGVzY1wiPlxuXHRcdFx0XHRcdERldmVsb3BlZCBoaWdoLWNvbmN1cnJlbmN5IGZpbnRlY2ggYXBwbGljYXRpb25zIHVzaW5nIFNwcmluZyBCb290IGFuZFxuXHRcdFx0XHRcdFJlYWN0LiBTcGVhcmhlYWRlZCB0aGUgYWRvcHRpb24gb2YgYXV0b21hdGVkIGVuZC10by1lbmQgdGVzdGluZy5cblx0XHRcdFx0PC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidGltZWxpbmVfX2l0ZW1cIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInRpbWVsaW5lX19kb3RcIj48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInRpbWVsaW5lX19oZWFkZXJcIj5cblx0XHRcdFx0XHQ8aDMgY2xhc3M9XCJ0aW1lbGluZV9fcm9sZVwiPkp1bmlvciBEZXZlbG9wZXIgQCBTdGFydFN0cmVhbTwvaDM+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ0aW1lbGluZV9fZGF0ZVwiPjIwMTgg4oCUIDIwMTk8L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8cCBjbGFzcz1cInRpbWVsaW5lX19kZXNjXCI+XG5cdFx0XHRcdFx0SW5pdGlhbCBpbW1lcnNpb24gaW50byBwcm9mZXNzaW9uYWwgc29mdHdhcmUgZGV2ZWxvcG1lbnQsIGZvY3VzaW5nIG9uXG5cdFx0XHRcdFx0aW50ZXJuYWwgdG9vbGluZyBhbmQgUkVTVGZ1bCBBUEkgbWFpbnRlbmFuY2UuXG5cdFx0XHRcdDwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L3NlY3Rpb24+XG5cblx0PGhyIGNsYXNzPVwiZGl2aWRlclwiIC8+XG5cblx0PCEtLSBQcm9qZWN0cyAtLT5cblx0PHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uIHByb2plY3RzXCIgaWQ9XCJwcm9qZWN0c1wiPlxuXHRcdDxoMiBjbGFzcz1cInNlY3Rpb25fX2xhYmVsXCI+U2VsZWN0ZWQgUHJvamVjdHM8L2gyPlxuXHRcdDxkaXYgY2xhc3M9XCJwcm9qZWN0c19fZ3JpZFwiPlxuXHRcdFx0PGFydGljbGUgY2xhc3M9XCJwcm9qZWN0XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJwcm9qZWN0X19pbWFnZS13cmFwXCI+XG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0Y2xhc3M9XCJwcm9qZWN0X19pbWFnZVwiXG5cdFx0XHRcdFx0XHRhbHQ9XCJBIGNsZWFuLCBtaW5pbWFsaXN0IHNjcmVlbnNob3Qgb2YgYSB0ZWNobmljYWwgZGFzaGJvYXJkIHdpdGggc29waGlzdGljYXRlZCBsaW5lIGNoYXJ0cyBhbmQgc3lzdGVtIGhlYWx0aCBtZXRyaWNzLlwiXG5cdFx0XHRcdFx0XHRzcmM9XCJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYWlkYS1wdWJsaWMvQUI2QVh1RDJpbHdPeWRGVTBqbGl3ME9WWjdFWFRVLUg4SVZGSWNvM0cwWHZ5MVZFNW9XOGUxUEVBdzM3emp5SGpqcDRudVBwNmZZWE92WUtrUG52ajhkdGNYQzBaZGlxX1FJVld2MHN3b3FRT1otS3Y0U2hXX2hCTWNYRXN2NzVESGRnUC1KN1c2dkR2Y2JicWk2ODVTUWpaSTlDbmlVcV9ZQVp5YnY1R0xoelBKRk9pbnlQUjVSRG85MFJBQjVMY2RTOU1xWXpiM201OWw4c1VxemVxNnhBWEtWbEtXMFh4b19WeE84ZnNOU1pUMWZYZFk2dHktZFR0aWxUUDExbUNLNHpIbVpYQmZUQ0V5R1NOMEVcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8aDMgY2xhc3M9XCJwcm9qZWN0X190aXRsZVwiPlxuXHRcdFx0XHRcdFByb2plY3QgWmVuaXRoXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHByb2plY3RfX2xpbmstaWNvblwiXG5cdFx0XHRcdFx0XHQ+YXJyb3dfb3V0d2FyZDwvc3BhblxuXHRcdFx0XHRcdD5cblx0XHRcdFx0PC9oMz5cblx0XHRcdFx0PHAgY2xhc3M9XCJwcm9qZWN0X19kZXNjXCI+XG5cdFx0XHRcdFx0QSBoaWdoLXBlcmZvcm1hbmNlIG9ic2VydmFiaWxpdHkgcGxhdGZvcm0gZm9yIEt1YmVybmV0ZXMgY2x1c3RlcnMsXG5cdFx0XHRcdFx0d3JpdHRlbiBpbiBSdXN0IGFuZCBHby5cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicHJvamVjdF9fdGFnc1wiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwicHJvamVjdF9fdGFnXCI+UnVzdDwvc3Bhbj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInByb2plY3RfX3RhZ1wiPkdSUEM8L3NwYW4+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJwcm9qZWN0X190YWdcIj5LdWJlcm5ldGVzPC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvYXJ0aWNsZT5cblx0XHRcdDxhcnRpY2xlIGNsYXNzPVwicHJvamVjdFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicHJvamVjdF9faW1hZ2Utd3JhcFwiPlxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdGNsYXNzPVwicHJvamVjdF9faW1hZ2VcIlxuXHRcdFx0XHRcdFx0YWx0PVwiQSBjbG9zZS11cCBzaG90IG9mIGEgaGlnaC1lbmQgYXJjaGl0ZWN0dXJhbCBtb2RlbCBtYWRlIG9mIGxpZ2h0IHdvb2QgYW5kIGdsYXNzIGluIGEgc3VuLWRyZW5jaGVkIG1pbmltYWxpc3Qgc3R1ZGlvLlwiXG5cdFx0XHRcdFx0XHRzcmM9XCJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYWlkYS1wdWJsaWMvQUI2QVh1REZsVUhiMnZ2TmlPNF9HZ1VnQUx3ZWp4VDBFLXNzNkk4NGtRM282ekx2YVRVTmg4OXVnejk3RVNsdlk4dVVMbFR3a3Y2d0FmV2kyX2RKbExSTDB4REVUMnRtTC0yQzBnQmY5eVdvVERVcjVyQ3VRVVRMc0hPSHpfX2w3a0NHWmNJei1CQjcyNjNrTlFPd21vRGxlSE5XakpIcC1pM2lUTzdDZnRRTHdzd09faUR5YVYtQUVoTWpfOWRZSUd5STE0SEhXcU1YcTVySlVNbmtySFZ0SDh5MHBWdDBHQndma0pFSm5WVU9vbGpqT3Bia2RYdDRGdzJTdWF5YnJoTllUcFFXU2dMVDZzQ0U2TzRcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8aDMgY2xhc3M9XCJwcm9qZWN0X190aXRsZVwiPlxuXHRcdFx0XHRcdExhdHRpY2UgQ29yZVxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCBwcm9qZWN0X19saW5rLWljb25cIlxuXHRcdFx0XHRcdFx0PmFycm93X291dHdhcmQ8L3NwYW5cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdDwvaDM+XG5cdFx0XHRcdDxwIGNsYXNzPVwicHJvamVjdF9fZGVzY1wiPlxuXHRcdFx0XHRcdEN1c3RvbSBldmVudC1zb3VyY2luZyBmcmFtZXdvcmsgZm9yIGRpc3RyaWJ1dGVkIGZpbmFuY2lhbCBsZWRnZXJzLFxuXHRcdFx0XHRcdGJ1aWx0IG9uIHRvcCBvZiBKYXZhIDE3LlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJwcm9qZWN0X190YWdzXCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJwcm9qZWN0X190YWdcIj5KYXZhPC9zcGFuPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwicHJvamVjdF9fdGFnXCI+UG9zdGdyZVNRTDwvc3Bhbj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInByb2plY3RfX3RhZ1wiPkV2ZW50czwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2FydGljbGU+XG5cdFx0PC9kaXY+XG5cdDwvc2VjdGlvbj5cbjwvbWFpbj5cbmA7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzL2luZGV4LmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMvaW5kZXguanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnRzLmNyZWF0ZUltYWdlcyA9IChzcmMsIGFsdCwgdGl0bGUpID0+IHtcblx0Y29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG5cdGltZy5zcmMgPSBzcmM7XG5cdGlmIChhbHQgIT0gbnVsbCkgaW1nLmFsdCA9IGFsdDtcblx0aWYgKHRpdGxlICE9IG51bGwpIGltZy50aXRsZSA9IHRpdGxlO1xuXHRyZXR1cm4gaW1nO1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbmNvbnN0IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0Y29uc3QgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdGNvbnN0IG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHRjb25zdCBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0Y29uc3QgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIvdmFsdWUgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGlmKEFycmF5LmlzQXJyYXkoZGVmaW5pdGlvbikpIHtcblx0XHR2YXIgaSA9IDA7XG5cdFx0d2hpbGUoaSA8IGRlZmluaXRpb24ubGVuZ3RoKSB7XG5cdFx0XHR2YXIga2V5ID0gZGVmaW5pdGlvbltpKytdO1xuXHRcdFx0dmFyIGJpbmRpbmcgPSBkZWZpbml0aW9uW2krK107XG5cdFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdFx0aWYoYmluZGluZyA9PT0gMCkge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IGRlZmluaXRpb25baSsrXSB9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogYmluZGluZyB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmKGJpbmRpbmcgPT09IDApIHsgaSsrOyB9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZihTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJsZXQgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xuY29uc3QgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdD8udGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHRjb25zdCBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdGxldCBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoL15ibG9iOi8sIFwiXCIpLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4uL2Nzcy9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgUGljdHVyZTEgZnJvbSBcIi4uL2Fzc2V0cy9mb3RvMS5qcGdcIjtcbmltcG9ydCBoZWFkZXJIVE1MIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlci5odG1sXCI7XG5pbXBvcnQgbWFpbkhUTUwgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWFpbi5odG1sXCI7XG5pbXBvcnQgY29udGFjdEhUTUwgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGFjdC5odG1sXCI7XG5pbXBvcnQgZm9vdGVySFRNTCBmcm9tIFwiLi4vY29tcG9uZW50cy9mb290ZXIuaHRtbFwiO1xuaW1wb3J0IHsgY3JlYXRlSW1hZ2VzIH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKTtcbnJvb3QuaW5uZXJIVE1MID0gaGVhZGVySFRNTCArIG1haW5IVE1MICsgY29udGFjdEhUTUwgKyBmb290ZXJIVE1MO1xuXG4vLyBQb3J0cmFpdCBwaG90bywgaW5qZWN0ZWQgaW50byB0aGUgQWJvdXQgc2VjdGlvblxuY29uc3QgcGhvdG9TbG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dF9fcGhvdG8tc2xvdFwiKTtcbmlmIChwaG90b1Nsb3QpIHtcblx0Y29uc3QgcGhvdG8gPSBjcmVhdGVJbWFnZXMoXG5cdFx0UGljdHVyZTEsXG5cdFx0XCJOaWNvbMOhcyBHb256w6FsZXpcIixcblx0XHRcIlNvZnR3YXJlIEFyY2hpdGVjdFwiXG5cdCk7XG5cdHBob3RvU2xvdC5hcHBlbmRDaGlsZChwaG90byk7XG59XG5cbi8vIFJldmVhbCBzZWN0aW9ucyBhcyB0aGV5IGVudGVyIHRoZSB2aWV3cG9ydFxuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG5cdChlbnRyaWVzKSA9PiB7XG5cdFx0ZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuXHRcdFx0aWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG5cdFx0XHRcdGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaXMtdmlzaWJsZVwiKTtcblx0XHRcdFx0b2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cdHsgdGhyZXNob2xkOiAwLjEgfVxuKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VjdGlvblwiKS5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG5cdG9ic2VydmVyLm9ic2VydmUoc2VjdGlvbik7XG59KTtcblxuLy8gU21vb3RoIHNjcm9sbCBmb3IgaW4tcGFnZSBhbmNob3IgbGlua3NcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCIjXCJdJykuZm9yRWFjaCgoYW5jaG9yKSA9PiB7XG5cdGFuY2hvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0Y29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhbmNob3IuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSk7XG5cdFx0aWYgKCF0YXJnZXQpIHJldHVybjtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRhcmdldC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuXHR9KTtcbn0pO1xuXG4vLyBNb2JpbGUgbmF2IHRvZ2dsZVxuY29uc3QgbmF2VG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZfX3RvZ2dsZVwiKTtcbmNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZfX2xpbmtzXCIpO1xuaWYgKG5hdlRvZ2dsZSAmJiBuYXZMaW5rcykge1xuXHRuYXZUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRuYXZMaW5rcy5jbGFzc0xpc3QudG9nZ2xlKFwibmF2X19saW5rcy0tb3BlblwiKTtcblx0fSk7XG59XG5cbi8vIENvbnRhY3QgZm9ybSBpcyBhIHN0YXRpYyBwbGFjZWhvbGRlciAobm8gYmFja2VuZCB3aXJlZCB1cCB5ZXQpXG5jb25zdCBjb250YWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdF9fZm9ybVwiKTtcbmlmIChjb250YWN0Rm9ybSkge1xuXHRjb250YWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9