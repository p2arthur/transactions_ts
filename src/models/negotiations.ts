import { Negotiation } from "./negotiation.js";

export class Negotiations {
  //Defining the generic type of the _negotiationsList to be a list containing Negotiation objects
  private _negotiationsList: Array<Negotiation> = [];

  addNewNegotiation(negotiation: Negotiation): void {
    this._negotiationsList.push(negotiation);
  }

  getNegotiationsList(): Array<Negotiation> {
    return this._negotiationsList;
  }
}
