export class Negotiation {
  //In typescript we don't need to define the properties of the class outside of the constructor by using the private or public type
  constructor(
    private readonly _date: Date,
    private readonly _quantity: number,
    private readonly _value: number
  ) {}

  get volume(): number {
    return this._value * this._quantity + 3;
  }

  get date(): Date {
    //Implementing defensive programming to disable other developers to change the _date class property
    const date = new Date(this._date.getTime());
    return date;
  }
}
