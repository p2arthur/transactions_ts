export abstract class View<T, K> {
  protected _element: HTMLElement;

  constructor(selectorElement: string) {
    this._element = <HTMLElement>document.querySelector(selectorElement);
  }

  protected abstract template(model: T, negotiation: K): string;

  public update(model: T, negotiation: K): void {
    const template = this.template(model, negotiation);
    this._element.innerHTML = template;
  }
}
