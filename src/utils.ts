const responsive = {
  superLarge: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  large: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  medium: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const items = [
  {
    day: "Monday",
    weatherId: 800,
    high: 27,
    low: 24,
    main: "Sunny",
  },
  {
    day: "Tuesday",
    weatherId: 200,
    high: 37,
    low: 17,
    main: "Thunder storm",
  },
  {
    day: "Wednesday",
    weatherId: 711,
    high: 40,
    low: 38,
    main: "Hazy",
  },
  {
    day: "Thursday",
    weatherId: 321,
    high: 20,
    low: 18,
    main: "Hazy",
  },
  {
    day: "Friday",
    weatherId: 600,
    high: 7,
    low: 2,
    main: "Snow",
  },
];

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

export {
  responsive,
  items,
  kelvinToCelcius,
  celciusToFahrenheit,
  fahrenheitToCelcius,
};
