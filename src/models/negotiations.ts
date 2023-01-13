import { Negotiation } from "./negotiation.js";

export class Negotiations {
  //Defining the generic type of the _negotiationsList to be a list containing Negotiation objects
  //Using a typescript shortcut (syntatic sugar) to define the type of the _negotiationList - Instead of defining Array<Negotiation> we can simply say Negotiation[] meaning its an array with Negotiation objects
  private _negotiationsList: Negotiation[] = [];

  addNewNegotiation(negotiation: Negotiation): void {
    this._negotiationsList.push(negotiation);
  }

  //Solving the mutability of the _negotiationList by using the readonly feature of typescript
  //Using a typescript shortcut (syntatic sugar) to define the type of the _getNegotiationList - Instead of defining readOnlyArray <Negotiation> we can simply say readonly Negotiation[] meaning its an array with Negotiation objects
  getNegotiationsList(): readonly Negotiation[] {
    return this._negotiationsList;
  }
}
