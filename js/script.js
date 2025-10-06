import tabs from "./modules/tabs";
import slider from "./modules/slider";
import modal from "./modules/modal";
import cards from "./modules/cards";
import forms from "./modules/forms";
import calculator from "./modules/calculator";
import timer from "./modules/timer";
import { openModal } from "./modules/modal";

window.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(
    () => openModal(".modal", modalTimerId),
    50000
  );
  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active"
  );
  slider({
    container: ".offer__slider",
    slide: ".offer__slide",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    totalCounter: "#total",
    currentCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner",
  });
  modal("[data-modal]", ".modal", modalTimerId);
  cards();
  forms("form", modalTimerId);
  calculator();
  timer(".timer", "2026-10-10");
});
