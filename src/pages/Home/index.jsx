import React, { useContext } from 'react'
import Banner from '../../components/Shared/Banner'
import Carousel from '../../components/Home/Carousel'

import { DataContext } from '../../Context'

const Home = () => {
  
  const data = useContext(DataContext);

  const categoriesWithVideos = data.categories.filter((category) => {
    return data.videos.some((video) => video.category === category.name);
  });
  
  const categoryCarousels = categoriesWithVideos.map((category) => (
    <Carousel key={category.id} category={category} />
  ));
  
  return (
    <>
        <Banner/>
        {
          categoryCarousels
        }
    </>
  )
}

export default Home