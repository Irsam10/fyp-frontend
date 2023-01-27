import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Scrollbar, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import './stylesheets/GetHiredSlider.css'
import Card from './Card'
const slider=  () => {
  return (
    <Swiper
      modules={[Navigation, Scrollbar,Pagination]}
      navigation
      scrollbar= {{
        el: '.swiper-scrollbar',
        draggable: true,
      }}
      Pagination= 'true'
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      direction= "vertical"
    //   autoHeight= "true"
      
    >
      <SwiperSlide className='swiper-style' ><Card/></SwiperSlide>
      <SwiperSlide className='swiper-style'><Card/></SwiperSlide>
      <SwiperSlide className='swiper-style'><Card/></SwiperSlide>
      <SwiperSlide className='swiper-style'><Card/></SwiperSlide>
      ...
    </Swiper>
  );
};
export default slider