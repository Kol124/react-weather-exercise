import React from "react";
import { Card } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Temperature from "./Temperature";
import styled from "@emotion/styled";
import WeatherIcon from "./WeatherIcon";

interface data {
  day: string;
  weatherId: number;
  temp: number;
  main: string;
}

export const WeatherCard: React.FC<data> = (props) => {
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          my: "1rem",
        }}
      >
        <span>
          <Temperature value={props.temp} />
          <sup>&deg;</sup>
        </span>
        <WeatherIcon code={props.weatherId} />
      </Box>
      <Typography fontWeight="bold">{props.main}</Typography>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  padding: 10px 16px;
  box-shadow: none;
  margin: 1rem;
  opacity: 0.75;
  border: none;
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  flex-direction: column;
  background-color: inherit;

  p span {
    text-align: center;
    font-family: inherit;
  }

  span {
    font-weight: bold;
    margin-right: 1rem;
  }
`;
