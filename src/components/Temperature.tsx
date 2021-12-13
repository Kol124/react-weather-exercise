import React from "react";
import { useSelector } from "react-redux";
import { celciusToFahrenheit, TempUnit } from "../utils";
import { selectTempUnit } from "../features/weather/weatherSlice";

interface temperature {
  value: number;
}

const Temperature: React.FC<temperature> = (props) => {
  const unit = useSelector(selectTempUnit);

  if (unit === TempUnit.FAHRENHEIT) {
    return <>{celciusToFahrenheit(props.value)}</>;
  }
  return <>{props.value}</>;
};

export default Temperature;
