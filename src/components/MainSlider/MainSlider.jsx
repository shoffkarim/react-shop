/* eslint-disable react/style-prop-object */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import "swiper/swiper.scss";

import { useDispatch, useSelector } from "react-redux";
import { fetchMainSliderItems } from "../../redux/actions/MainSlider";

function MainSlider() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchMainSliderItems());
  }, [dispatch]);

  const items = useSelector(({ MainSliderItems }) => MainSliderItems.items);
  const isLoaded = useSelector(
    ({ MainSliderItems }) => MainSliderItems.isLoaded
  );
  SwiperCore.use([Autoplay])
  return (
    <section className="hero-section">
      <div className="hero-slider">
        {isLoaded && (
          <Swiper loop={true} speed={700} autoplay={{delay:5000}}>
            {items.map((obj) => (
              <SwiperSlide key={obj.id}>
                <div className="hs-item set-bg">
                  <img src={obj.imgUrl} alt="slide" class="main-slider-img" />
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6 col-lg-7 text-white">
                        <span>{obj.subtitle}</span>
                        <h2>{obj.title}</h2>
                        <p>{obj.text}</p>
                        <a href={obj.firstLinkUrl} className="site-btn sb-line">
                          {obj.firstLinkText}
                        </a>
                        <a
                          href={obj.secondLinkUrl}
                          className="site-btn sb-white"
                        >
                          {obj.secondLinkText}
                        </a>
                      </div>
                    </div>
                    <div className="offer-card text-white">
                      <span>from</span>
                      <h2>${obj.bannerPrice}</h2>
                      <p>SHOP NOW</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}

export default MainSlider;
