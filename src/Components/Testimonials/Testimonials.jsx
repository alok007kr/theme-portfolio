import React from 'react';
import './Testimonials.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import profilepic1 from "../../img/profile1.jpg";
import profilepic2 from "../../img/profile2.jpg";
import profilepic3 from "../../img/profile3.jpg";
import profilepic4 from "../../img/profile4.jpg";
import {Pagination} from "swiper";
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonials = () => {
   const clients = [
        {
            img: profilepic1,
            review:
              "Hey! i created this website using Reactjs. we provide the same way of quality websites."
        },

        {
            img: profilepic2,
            review:
            "Hey! i created this website using Reactjs. we provide the same way of quality websites."
        },

        {
            img: profilepic3,
            review:
            "Hey! i created this website using Reactjs. we provide the same way of quality websites."
        },

        {
            img: profilepic4,
            review:
            "Hey! i created this website using Reactjs. we provide the same way of quality websites."
        },
    ]

  return (
    <div className="t-wrapper" id="Testimonials">
        <div className="t-heading">
            <span>Client always get</span>
            <span> Exceptional Work </span>
            <span> from me...</span>
            <div className="blur t-blur1" style={{ background : "var(--purple)"}}></div>
            <div className="blur t-blur2" style={{ background : "skyblue"}}></div>
        </div>

        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable: true}}
        >
            {clients.map((clients, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={clients.img} alt="" />
                           <span>{clients.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Testimonials