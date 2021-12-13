import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import bgImage from "../assets/bg.svg";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
  fetchWeather,
  changeTempUnit,
  selectIsLoading,
  selectWeatherData,
} from "../features/weather/weatherSlice";
import { BarChart } from "../components/BarChart";
import { UnitSwitch } from "../components/Switch";
import { Progress } from "../components/Progress";
import { WeatherCard } from "../components/WeatherCard";
import { WeatherCarousel } from "../components/WeatherCarousel";

const Home = () => {
  const city: string = "Munich,de";
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const weather = useSelector(selectWeatherData);

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
                    high={item.temp.temp_max}
                    low={item.temp.temp_min}
                    weatherId={item.weather.id}
                    main={item.weather.main}
                  />
                ))}
              </WeatherCarousel>
            </BoxSmall>
            <BarChart show={true} />
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
  padding: 10px;
  margin: 10px 10px 30px;
`;

export default Home;
