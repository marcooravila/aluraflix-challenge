import React, { useContext } from "react";
import Sld from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoCard from "../VideoCard";
import { useMediaQuery } from "@mui/material";
import { DataContext } from "../../../Context";

const Slider = ({category}) => {
  const data = useContext(DataContext);
  
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:960px)");
  const isLargeScreen = useMediaQuery("(min-width:961px)");

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (isSmallScreen) {
    settings.slidesToShow = 1;
    settings.slidesToScroll = 1;
  } else if (isMediumScreen) {
    settings.slidesToShow = 2;
    settings.slidesToScroll = 2;
  } else if (isLargeScreen) {
    settings.slidesToShow = 3;
    settings.slidesToScroll = 3;
  }

  
  return (
      <Sld {...settings}>
        {
          data.videos
          .filter(video => video.category === category.name)
          .map((video, index) => {
            return (
              <div key={index}>
                <VideoCard videoUrl={video.link} category={video.category} name={video.name}/>
              </div>
            )
          })
        }
      </Sld>
  );
};

export default Slider;
