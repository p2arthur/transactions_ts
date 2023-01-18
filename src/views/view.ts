export abstract class View<T> {
  protected _element: HTMLElement;

  constructor(selectorElement: string) {
    this._element = <HTMLElement>document.querySelector(selectorElement);
  }

  protected abstract template(model: T): string;

  public update(model: T): void {
    const template = this.template(model);
    this._element.innerHTML = template;
  }
}
