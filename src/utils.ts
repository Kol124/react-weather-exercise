export function getDays(): string[] {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const nextDays = [];
  for (let i = 0; i < 7; i++) {
    nextDays.push(
      days[new Date(Date.now() + i * 24 * 60 * 60 * 1000).getDay()]
    );
  }
  return nextDays;
}

export enum TempUnit {
  CELCIUS,
  FAHRENHEIT,
}

function kelvinToCelcius(num: number) {
  return Math.round(num - 273.15);
}

function celciusToFahrenheit(c: number) {
  return Math.round(c * (9 / 5) + 32);
}

function fahrenheitToCelcius(f: number) {
  return Math.round(((f - 32) * 5) / 9);
}

export { kelvinToCelcius, celciusToFahrenheit, fahrenheitToCelcius };
