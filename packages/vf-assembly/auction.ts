declare function log(arg: string): void;

declare function currencyFormatter(value: number): string;

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export enum STAMP_DUTY_RANGE {
  FREE = 150000,
  LOW = 200000,
  MEDIUM = 400000,
  HIGH = 700000,
}

export const INSPECTION_COST = 200;

export const AUCTION_ADMIN_PERCENTAGE = 15;

export function getStampDutyCost(propertyValue: i32): i32 {
  // const { FREE, LOW, MEDIUM, HIGH } = STAMP_DUTY_RANGE;
  // return [FREE, LOW, MEDIUM, HIGH].find(
  //   (stampDuty) => propertyValue <= stampDuty,
  // );
  if (propertyValue <= STAMP_DUTY_RANGE.FREE) return STAMP_DUTY_RANGE.FREE;
  if (propertyValue <= STAMP_DUTY_RANGE.LOW) return STAMP_DUTY_RANGE.LOW;
  if (propertyValue <= STAMP_DUTY_RANGE.MEDIUM) return STAMP_DUTY_RANGE.MEDIUM;

  return STAMP_DUTY_RANGE.HIGH;
}

export function totalPrice(propertyValue: i32, deposit: i32): string {
  const stampDuty = getStampDutyCost(propertyValue);
  const adminCost = AUCTION_ADMIN_PERCENTAGE * propertyValue;

  const total =
    propertyValue + stampDuty + adminCost + INSPECTION_COST + deposit;

  log(`total =>  ${total.toString()} ${total}`);

  return currencyFormatter(total);
}
