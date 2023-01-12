import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";

export class NegotiationController {
  private _inputDate: HTMLInputElement;
  private _inputQuantity: HTMLInputElement;
  private _inputValue: HTMLInputElement;
  private _negotiations: Negotiations;

  constructor() {
    this._negotiations = new Negotiations();
    this._inputDate = <HTMLInputElement>document.getElementById("data");
    this._inputQuantity = <HTMLInputElement>(
      document.getElementById("quantidade")
    );
    this._inputValue = <HTMLInputElement>document.getElementById("valor");
  }

  cleanForm(): void {
    this._inputDate.value = "";
    this._inputQuantity.value = "";
    this._inputValue.value = "";
    this._inputDate.focus();
  }

  createNegotiation(): Negotiation {
    const date = new Date(this._inputDate.value.replace(/-/g, ","));
    const quantity = parseInt(this._inputQuantity.value);
    const value = parseFloat(this._inputValue.value);

    return new Negotiation(date, quantity, value);
  }

  addNegotiation(): void {
    const negotiation = this.createNegotiation();
    this._negotiations.addNewNegotiation(negotiation);
    console.log(negotiation);
    this.cleanForm();
    console.log(this._negotiations.getNegotiationsList());
  }
}
