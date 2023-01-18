import { WeekDays } from "../enums/week-days.js";
import { Negotiation } from "../models/negotiation.js";
import { View } from "./view.js";

export class MessageView extends View<string, Negotiation> {
  protected template(model: string, negotiation: Negotiation): string {
    const isWeekDay: boolean =
      negotiation.date.getDay() !== WeekDays.SATURDAY &&
      negotiation.date.getDay() !== WeekDays.SUNDAY &&
      true;

    return `
    <p class="alert ${isWeekDay ? "alert-success" : "alert-danger"}">
    ${model}
    </p>
    `;
  }

  public clearMesasage(): void {
    this._element.innerHTML = "";
  }
}
