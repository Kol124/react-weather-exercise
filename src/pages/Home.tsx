import { useEffect } from "react";
import bgImage from "../assets/bg.svg";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import {
  fetchWeather,
  changeTempUnit,
  selectIsLoading,
  selectWeatherData,
} from "../features/weather/weatherSlice";
import { UnitSwitch } from "../components/Switch";
import { Progress } from "../components/Progress";
import { WeatherCard } from "../components/WeatherCard";
import { WeatherCarousel } from "../components/WeatherCarousel";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const Home = () => {
  const city: string = "Munich,de";
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectIsLoading);
  const weather = useAppSelector(selectWeatherData);

  useEffect(() => {
    console.log();
    dispatch(fetchWeather(city));
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Progress />
      ) : (
        <BoxLarge>
          <Container maxWidth="md">
            <Typography
              variant="h4"
              sx={{
                mb: "2rem",
                px: "10px",
                color: "#4a6fa1",
                fontWeight: "bold",
                textAlign: "center",
                fontFamily: "inherit",
              }}
            >
              React Weather App
            </Typography>

            <UnitSwitch onClick={() => dispatch(changeTempUnit())} />
            <BoxSmall>
              <WeatherCarousel>
                {weather.map((item, i) => (
                  <WeatherCard
                    key={i}
                    day={item.day}
                    temp={item.avg_temp}
                    weatherId={item.weather.id}
                    main={item.weather.main}
                  />
                ))}
              </WeatherCarousel>
            </BoxSmall>
            <Stack alignItems="center">
              <Button onClick={() => dispatch(fetchWeather(city))}>
                <AutorenewIcon fontSize="large" />
              </Button>
            </Stack>
          </Container>
        </BoxLarge>
      )}
    </>
  );
};

const BoxLarge = styled(Box)`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${bgImage}) no-repeat center 120%,
    linear-gradient(to right bottom, #f9ffff, #38c8e6);
`;

const BoxSmall = styled(Box)`
  box-shadow: 0 14px 25px rgba(0, 0, 0, 0.16);
  background: rgba(255, 255, 255, 0.75);
  margin: 10px 10px 30px;
  padding: 10px;
`;

export default Home;
