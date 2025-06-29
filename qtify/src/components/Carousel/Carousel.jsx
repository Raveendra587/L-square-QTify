import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Card from "../Card/Card";
import styles from "./Carousel.module.css";

function Carousel({ items, isSongSection = false }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      }}
      className={styles.swiper}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <Card
            title={item.title}
            image={item.image}
            chipLabel={
              isSongSection ? `${item.likes} Likes` : `${item.follows} Follows`
            }
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;