import { inspectMethod } from "../decorators/inspect-method";
import { logExecutionTime } from "../decorators/log-execution-time";

export abstract class View<T, K> {
  protected _element: HTMLElement;
  private escape = false;

  constructor(selectorElement: string, escape?: boolean) {
    const element = document.querySelector(selectorElement);
    if (element) {
      this._element = <HTMLElement>element;
    } else {
      throw Error(
        `Selector ${selectorElement} doesn't exist at the DOM and returned null`
      );
    }
    if (escape) {
      this.escape = escape;
    }
  }

  protected abstract template(model: T, negotiation?: K): string;
  //Invoke a decorator with argument to test the performance of a function
  @logExecutionTime(true)
  @inspectMethod
  public update(model: T, negotiation?: K): void {
    let template = this.template(model, negotiation);

    //Escape to remove malicious scripts added to our template
    if (this.escape) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    this._element.innerHTML = template;
  }
}
