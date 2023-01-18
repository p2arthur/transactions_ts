export class Negotiation {
  //In typescript we don't need to define the properties of the class outside of the constructor by using the private or public type
  constructor(
    private readonly _date: Date,
    private readonly _quantity: number,
    private readonly _value: number
  ) {}

  public get date(): Date {
    //Implementing defensive programming to disable other developers to change the _date class property
    const date = new Date(this._date.getTime());
    return date;
  }
  public get quantity(): number {
    //Implementing defensive programming to disable other developers to change the _date class property

    return this._quantity;
  }
  public get value(): number {
    //Implementing defensive programming to disable other developers to change the _date class property

    return this._value;
  }

  public get volume(): number {
    console.log(this._value * this._quantity);
    return Number((this._value * this._quantity).toFixed(2));
  }
}
