import { Negotiation } from "./models/negotiation.js";

const negotiation1 = new Negotiation(new Date(), 10, 600);

console.log(negotiation1.data);

console.log(negotiation1.volume);
