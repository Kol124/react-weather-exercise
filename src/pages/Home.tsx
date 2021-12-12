import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { responsive, items } from "../utils";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { fetchWeather } from "../features/weather/weatherSlice";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { WeatherCard } from "../components/WeatherCard";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log();
    dispatch(fetchWeather("Munich,de"));
  }, [dispatch]);

  return (
    <div style={{ maxWidth: 960 }}>
      <Typography
        variant="h3"
        sx={{
          mb: "2.5rem",
          color: "#4a6fa1",
          fontWeight: "bold",
          textAlign: "center",
          fontFamily: "inherit",
        }}
      >
        React Weather App
      </Typography>

      <button>
        <h3>Degree</h3>
      </button>
      <StyledBox>
        <Carousel responsive={responsive}>
          {items.map((item, i) => (
            <WeatherCard
              key={i}
              day={item.day}
              high={item.high}
              low={item.low}
              weatherId={item.weatherId}
              main={item.main}
            />
          ))}
        </Carousel>
      </StyledBox>
    </div>
  );
};

const StyledBox = styled(Box)`
  box-shadow: 0 14px 25px rgba(0, 0, 0, 0.16);
  background: rgba(255, 255, 255, 0.75);
  margin: 0 10px;
  padding: 1rem;
`;

export default Home;
