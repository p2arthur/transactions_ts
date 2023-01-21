import { NegotiationController } from "./controllers/negotiation-controller.js";

const negotiationController = new NegotiationController();

const form = document.querySelector(".form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    negotiationController.addNegotiation();
  });
} else {
  throw Error("Unable to start the application: Couldn't select form element");
}
