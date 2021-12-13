import { ReactNode } from "react";
import Slider from "react-slick";
import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

interface Props {
  children: ReactNode;
}

export const WeatherCarousel = ({ children }: Props) => {
  return <Carousel {...settings}>{children}</Carousel>;
};

const Carousel = styled(Slider)`
  .slick-prev {
    left: -40px;
  }

  .slick-next {
    right: -40px;
  }

  .slick-disabled {
    opacity: 0;
    display: none;
  }
`;
