export class NegotiationsView {
  private element: HTMLElement;

  constructor(selectorElement: string) {
    this.element = <HTMLElement>document.querySelector(selectorElement);
  }

  //Method to return a string containing the html that we will need to render the list of negotiations
  template(): string {
    return `
    <table class="table table-hover table-bordered">
    <thead>
        <tr>
         <th>DATE</th>
         <th>QUANTITY</th>
         <th>VALUE</th>
        </tr>
    </thead>
    <tbody>
    
    </tbody>
    
    </table>
    `;
  }

  updateView(): void {
    console.log(this.element);
    this.element.innerHTML = this.template();
  }
}
