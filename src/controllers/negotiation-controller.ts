import { Negotiation } from "../models/negotiation.js";

export class NegotiationController {
  private _inputData: HTMLInputElement;
  private _inputQuantity: HTMLInputElement;
  private _inputValue: HTMLInputElement;

  constructor() {
    this._inputData = <HTMLInputElement>document.getElementById("data");
    this._inputQuantity = <HTMLInputElement>(
      document.getElementById("quantidade")
    );
    this._inputValue = <HTMLInputElement>document.getElementById("valor");
  }

  createNegotiation(): Negotiation {
    const date = new Date(this._inputData.value.replace(/-/g, ","));
    const quantity = parseInt(this._inputQuantity.value);
    const value = parseFloat(this._inputValue.value);

    return new Negotiation(date, quantity, value);
  }

  addNegotiation(): void {
    const negotiation = this.createNegotiation();
    console.log(negotiation);
  }
}
