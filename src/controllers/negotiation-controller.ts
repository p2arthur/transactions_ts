import { WeekDays } from "../enums/week-days.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiations-view.js";
import { logExecutionTime } from "../decorators/log-execution-time.js";

export class NegotiationController {
  private _inputDate: HTMLInputElement;
  private _inputQuantity: HTMLInputElement;
  private _inputValue: HTMLInputElement;
  private _negotiations = new Negotiations();
  private _negotationsView = new NegotiationsView("#table-container");
  private _messageView = new MessageView("#mensagemView");

  constructor() {
    this._inputDate = <HTMLInputElement>document.getElementById("data");
    this._inputQuantity = <HTMLInputElement>(
      document.getElementById("quantidade")
    );
    this._inputValue = <HTMLInputElement>document.getElementById("valor");

    //Using the template method of the view to render the table once the controller is created
    this._negotationsView.update(this._negotiations, false);
  }

  //Invoke a decorator to test the performance of a function
  @logExecutionTime();
  public addNegotiation(): void {
    const negotiation = Negotiation.createOf(
      this._inputDate.value,
      this._inputQuantity.value,
      this._inputValue.value
    );
    if (!NegotiationController.isWeekDay(negotiation.date)) {
      this._messageView.update(
        "You can only add negotiations on weekdays",
        negotiation
      );
      return;
    }
    this._negotiations.addNewNegotiation(negotiation);
    this.cleanForm();
    this.updateUi(negotiation);
  }

  //Defining a method to validate if the negotiation was done in a week day - Implemented the week-days enum
  public static isWeekDay(date: Date) {
    return (
      date.getDay() !== WeekDays.SUNDAY && date.getDay() !== WeekDays.SATURDAY
    );
  }

  private cleanForm(): void {
    this._inputDate.value = "";
    this._inputQuantity.value = "";
    this._inputValue.value = "";
    this._inputDate.focus();
  }

  //Creating a method to update all views whenever a new transaction is sent
  private updateUi(negotiation: Negotiation): void {
    //Saying to the view to update everytime we add a new negotiation with the negotiations(model) as a parameter
    this._negotationsView.update(this._negotiations, true);
    this._messageView.update("Transaction added successfully", negotiation);
    setTimeout(() => this._messageView.clearMesasage(), 3000);
  }
}
