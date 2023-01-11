export class Negotiation {
  #data;
  #quantity;
  #value;

  constructor(data, quantity, value) {
    this.#data = data;
    this.#quantity = quantity;
    this.#value = value;
  }

  get data() {
    return this.#data;
  }

  get quantity() {
    return this.#quantity;
  }

  get value() {
    return this.#value;
  }

  get volume() {
    return this.#value * this.#quantity + 3;
  }
}
