import { Negotiation } from "../models/negotiation";

export abstract class View<T, K> {
  protected _element: HTMLElement;
  private escape = false;

  constructor(selectorElement: string, escape?: boolean) {
    this._element = <HTMLElement>document.querySelector(selectorElement);
    if (escape) {
      this.escape = escape;
    }
  }

  protected abstract template(model: T, negotiation?: K): string;

  public update(model: T, negotiation?: K): void {
    let template = this.template(model, negotiation);

    //Escape to remove malicious scripts added to our template
    if (this.escape) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    this._element.innerHTML = template;
  }
}
