import React from "react";
import Box from "@mui/material/Box";
import { Card } from "@mui/material";
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
      <Typography color="#4a6fa1" fontWeight="bold">
        {props.main}
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
      <Typography
        variant="h6"
        textAlign="center"
        fontFamily="inherit"
        color="#38c8e6"
      >
        {props.day}
      </Typography>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  padding: 10px 16px;
  box-shadow: none;
  opacity: 0.75;
  margin: 1rem;
  border: none;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  background-color: inherit;

  p span {
    text-align: center;
    font-family: inherit;
  }

  span {
    color: #555;
    font-weight: 800;
    margin-right: 1rem;
  }
`;
