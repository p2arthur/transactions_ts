import { domInjector } from "../decorators/dom-injector.js";
import { inspectMethod } from "../decorators/inspect-method.js";
import { logExecutionTime } from "../decorators/log-execution-time.js";
import { WeekDays } from "../enums/week-days.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiations-view.js";

export class NegotiationController {
  //BUG
  @domInjector("#data")
  private _inputDate: HTMLInputElement;
  //BUG
  @domInjector("#quantidade")
  private _inputQuantity: HTMLInputElement;
  //BUG
  @domInjector("#valor")
  private _inputValue: HTMLInputElement;
  private _negotiations = new Negotiations();
  private _negotationsView = new NegotiationsView("#table-container");
  private _messageView = new MessageView("#mensagemView");

  constructor() {
    //Using the template method of the view to render the table once the controller is created

    //BUG - Trying to substitute these selector with propertie decorator
    /*
    this._inputDate = <HTMLInputElement>document.querySelector("#data");
    this._inputQuantity = <HTMLInputElement>(
      document.querySelector("#quantidade")
    );
    this._inputValue = <HTMLInputElement>document.querySelector("#valor");
    */
    this._negotationsView.update(this._negotiations);
  }

  //Invoke a decorator to test the performance of a function
  @logExecutionTime(true)
  @inspectMethod
  public addNegotiation(): void {
    console.log(this._inputDate); //undefined
    console.log(this._inputQuantity); //undefined
    console.log(this._inputValue); //undefined
    const negotiation = Negotiation.createOf(
      //BUG
      this._inputDate.value,
      this._inputQuantity.value,
      this._inputValue.value
      //BUG
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
  public static isWeekDay(date: Date): boolean {
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
