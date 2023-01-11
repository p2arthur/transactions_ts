export class Negotiation {
  private _data;
  private _quantity;
  private _value;

  constructor(data: any, quantity: number, value: number) {
    this._data = data;
    this._quantity = quantity;
    this._value = value;
  }

  get data() {
    return this._data;
  }

  get quantity() {
    return this._quantity;
  }

  get value() {
    return this._value;
  }

  get volume() {
    return this._value * this._quantity + 3;
  }
}
