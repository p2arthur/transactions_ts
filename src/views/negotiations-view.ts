import { Negotiations } from "../models/negotiations.js";

export class NegotiationsView {
  private element: HTMLElement;

  constructor(selectorElement: string) {
    this.element = <HTMLElement>document.querySelector(selectorElement);
  }

  //Method to return a string containing the html that we will need to render the list of negotiations
  template(model: Negotiations): string {
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
        <td>${new Intl.DateTimeFormat().format(negotiation.date)}</td>
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

  updateView(model: Negotiations): void {
    const template = this.template(model);

    console.log(template);
    this.element.innerHTML = template;
  }
}
