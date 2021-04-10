import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Lazy, Thumbs, Autoplay } from "swiper";
import "swiper/swiper.scss";

function ItemSlider({ imageUrl, images}) {
  SwiperCore.use([Lazy, Thumbs, Autoplay]);
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null)

  let paramsSwiper = {
    lazy: true,
    loop: true,
  };

  let paramsThumbSwiper = {
    slidesPerView: 4,
    spaceBetween: 23,
    slideToClickedSlide: true,
    lazy: false,
    loop: true,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  };

  return (
    <div className="col-lg-6">
      {images && (
        <div>
          <Swiper {...paramsSwiper} thumbs={{swiper: thumbsSwiper}} autoplay={{delay:5000}}>
            {images.top.map((image, id) => (
              <SwiperSlide key={`slide_${id}`}>
                <div className="product-pic-zoom">
                  <img
                    className="product-big-img swiper-lazy"
                    data-src={image}
                    alt=""
                    key={image}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper {...paramsThumbSwiper} onSwiper={setThumbsSwiper}>
            {images.thumbs.map((image, id) => (
              <SwiperSlide key={`slide_${id}`}>
                  <img src={image} alt="" key={image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}

export default ItemSlider;
