import { NegotiationController } from "./controllers/negotiation-controller.js";

const negotiationController = new NegotiationController();

const form = document.querySelector(".form");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  negotiationController.addNegotiation();
});
