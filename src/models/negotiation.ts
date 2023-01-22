export class Negotiation {
  //In typescript we don't need to define the properties of the class outside of the constructor by using the private or public type
  constructor(
    private readonly _date: any,
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
    return Number((this._value * this._quantity).toFixed(2));
  }

  //Creating a static method inside the model to convert the values coming from the controller from a string to respective formats
  public static createOf(
    dateString: string,
    quantityString: string,
    valueString: string
  ): Negotiation {
    const exp = /-/g;
    const date = new Date(dateString.replace(exp, ","));
    const quantity = parseInt(quantityString);
    const value = parseFloat(valueString);
    return new Negotiation(date, quantity, value);
  }
}
