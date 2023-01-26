import { escape } from "../decorators/escape.js";
import { Negotiations } from "../models/negotiations.js";
import { View } from "./view.js";

export class NegotiationsView extends View<Negotiations, Boolean> {
  //Protected Method to return a string containing the html that we will need to render the list of negotiations
  @escape
  protected template(model: Negotiations): string {
    return `
    <table class="table table-hover table-bordered">
    <thead>
        <tr>
         <th>DATE</th>
         <th>QUANTITY</th>
         <th>VALUE</th>
         <th>VOLUME</th>
        </tr>
    </thead>
    <tbody>
    ${model
      .getNegotiationsList()
      .map((negotiation) => {
        return `
      <tr>
        <td>${this.formatDate(negotiation.date)}</td>
        <td>${negotiation.quantity}</td>
        <td>${negotiation.value}</td>
        <td>${negotiation.volume}</td>
      </tr>`;
      })
      .join("")}
    </tbody>
    
    </table>
    `;
  }

  //Private method to format the date inside of the negotiations view
  private formatDate(date: Date): string {
    return new Intl.DateTimeFormat().format(date);
  }
}
