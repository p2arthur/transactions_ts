export class NegotiationController {
  private _inputData;
  private _inputQuantity;
  private _inputValue;

  constructor() {
    this._inputData = document.getElementById("data");
    this._inputQuantity = document.getElementById("quantidade");
    this._inputValue = document.getElementById("valor");
  }

  addNegotiation() {
    console.log(this._inputData, this._inputQuantity, this._inputValue);
  }
}
