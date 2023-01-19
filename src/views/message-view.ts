import { NegotiationController } from "../controllers/negotiation-controller.js";
import { WeekDays } from "../enums/week-days.js";
import { Negotiation } from "../models/negotiation.js";
import { View } from "./view.js";

export class MessageView extends View<string, Negotiation> {
  protected template(model: string, negotiation: Negotiation): string {
    return `
    <p class="alert ${
      NegotiationController.isWeekDay(negotiation.date)
        ? "alert-success"
        : "alert-danger"
    }">
    ${model}
    </p>
    `;
  }

  public clearMesasage(): void {
    this._element.innerHTML = "";
  }
}
