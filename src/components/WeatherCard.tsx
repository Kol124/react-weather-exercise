import React, { useState } from "react";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import Temperature from "./Temperature";
import styled from "@emotion/styled";
import WeatherIcon from "./WeatherIcon";

interface data {
  day: string;
  weatherId: number;
  high: number;
  low: number;
  main: string;
}

export const WeatherCard: React.FC<data> = (props) => {
  const dispatch = useAppDispatch();

  return (
    <StyledCard>
      <Typography
        variant="h6"
        textAlign="center"
        fontFamily="inherit"
        color="#38c8e6"
      >
        {props.day}
      </Typography>
      <WeatherIcon code={props.weatherId} />
      <Typography fontWeight="bold">{props.main}</Typography>
      <span>
        <Temperature value={props.high} />
        <sup>&deg;</sup>
        <small>/</small>
        <Temperature value={props.low} />
        <sup>&deg;</sup>
      </span>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  padding: 10px 16px;
  box-shadow: none;
  margin: 0 1rem;
  opacity: 0.75;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: inherit;

  p span {
    text-align: center;
    font-family: inherit;
  }

  span {
    font-weight: bold;
  }
`;
