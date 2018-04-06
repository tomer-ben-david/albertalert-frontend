export interface Alert {
  symbol: string;
  email: string;

  getData(): object;
}

export class DefaultAlert implements Alert {
  constructor(public symbol: string, public email: string) {}

  getData(): object {
    const result = {};
    Object.keys(this).map(key => result[key] = this[key]);
    return result;
  }
}

export function alertToJson(alert: Alert) {
  return { 'symbol': alert.symbol, 'email': alert.email};
}
