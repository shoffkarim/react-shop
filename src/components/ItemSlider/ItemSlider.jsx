import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Lazy, Thumbs } from "swiper";
import "swiper/swiper.scss";

function ItemSlider({ imageUrl }) {
  SwiperCore.use([Lazy, Thumbs]);

  const [thumbsSwiper, setThumbsSwiper] = React.useState(null)

  const images = [
    {
      src: "img/single-product/thumb-1.jpg",
    },
    {
      src: "img/single-product/thumb-2.jpg",
    },
    {
      src: "img/single-product/thumb-3.jpg",
    },
    {
      src: "img/single-product/thumb-4.jpg",
    },
  ];

  let paramsSwiper = {
    lazy: true,
    loop: false,
  };

  let paramsThumbSwiper = {
    slidesPerView: 4,
    slideToClickedSlide: true,
    lazy: false,
    loop: true,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  };


  return (
    <div className="col-lg-6">
      {imageUrl && (
        <div>
          <Swiper {...paramsSwiper} thumbs={{swiper: thumbsSwiper}} >
            {images.map((image, id) => (
              <SwiperSlide key={`slide_${id}`}>
                <div className="product-pic-zoom">
                  <img
                    className="product-big-img swiper-lazy"
                    data-src={image.src}
                    alt=""
                    key={image.src}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper {...paramsThumbSwiper} onSwiper={setThumbsSwiper}>
            {images.map((image, id) => (
              <SwiperSlide key={`slide_${id}`}>
                <div className="pt active">
                  <img src={image.src} alt="" key={image.src} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}

export default ItemSlider;
