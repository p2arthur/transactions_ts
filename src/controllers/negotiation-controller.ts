import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiations-view.js";

export class NegotiationController {
  private _inputDate: HTMLInputElement;
  private _inputQuantity: HTMLInputElement;
  private _inputValue: HTMLInputElement;
  private _negotiations = new Negotiations();
  private _negotationsView = new NegotiationsView("#table-container");
  private _messageView = new MessageView("#mensagemView");
  private readonly SABADO = 6;
  private readonly DOMINGO = 0;

  constructor() {
    this._inputDate = <HTMLInputElement>document.getElementById("data");
    this._inputQuantity = <HTMLInputElement>(
      document.getElementById("quantidade")
    );
    this._inputValue = <HTMLInputElement>document.getElementById("valor");

    //Using the template method of the view to render the table once the controller is created
    this._negotationsView.update(this._negotiations);
  }

  public addNegotiation(): void {
    const negotiation = this.createNegotiation();
    if (this.isWeekDay(negotiation.date)) {
      this._messageView.update("You can only add negotiations on weekdays");
      return;
    }
    this._negotiations.addNewNegotiation(negotiation);
    this.cleanForm();
    this.updateUi();
  }

  private isWeekDay(date: Date) {
    return date.getDay() !== this.SABADO || date.getDay() !== this.DOMINGO;
  }

  private cleanForm(): void {
    this._inputDate.value = "";
    this._inputQuantity.value = "";
    this._inputValue.value = "";
    this._inputDate.focus();
  }

  private createNegotiation(): Negotiation {
    const date = new Date(this._inputDate.value.replace(/-/g, ","));
    const quantity = parseInt(this._inputQuantity.value);
    const value = parseFloat(this._inputValue.value);

    return new Negotiation(date, quantity, value);
  }

  //Creating a method to update all views whenever a new transaction is sent
  private updateUi(): void {
    //Saying to the view to update everytime we add a new negotiation with the negotiations(model) as a parameter
    this._negotationsView.update(this._negotiations);
    this._messageView.update("Transaction added successfully");
    setTimeout(() => this._messageView.clearMesasage(), 3000);
  }
}
