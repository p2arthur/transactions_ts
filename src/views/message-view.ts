import { View } from "./view.js";

export class MessageView extends View<string> {
  protected template(model: string): string {
    return `
    <p class="alert alert-success">
    ${model}
    </p>
    `;
  }

  clearMesasage(): void {
    this._element.innerHTML = "";
  }
}
