export interface Alert {
  symbol: string;
  email: string;
  price: number;

  getData(): object;
}

export class DefaultAlert implements Alert {
  constructor(public symbol: string, public email: string, public price: number) {}

  getData(): object {
    const result = {};
    Object.keys(this).map(key => result[key] = this[key]);
    return result;
  }
}
