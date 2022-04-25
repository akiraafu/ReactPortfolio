import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
    {
        avatar: AVTR1,
        name: "Tina",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ullam possimus culpa odio minus dolore nam doloremque, perferendis, quidelectus quam? Molestias aliquam in ipsum soluta perspiciatis laboriosam? Expedita, sapiente.",
    },
    {
        avatar: AVTR2,
        name: "Shatta",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ullam possimus culpa odio minus dolore nam doloremque, perferendis, quidelectus quam? Molestias aliquam in ipsum soluta perspiciatis laboriosam? Expedita, sapiente.",
    },
    {
        avatar: AVTR3,
        name: "Aaron",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ullam possimus culpa odio minus dolore nam doloremque, perferendis, quidelectus quam? Molestias aliquam in ipsum soluta perspiciatis laboriosam? Expedita, sapiente.",
    },
    {
        avatar: AVTR4,
        name: "Nana",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ullam possimus culpa odio minus dolore nam doloremque, perferendis, quidelectus quam? Molestias aliquam in ipsum soluta perspiciatis laboriosam? Expedita, sapiente.",
    },
];

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper
                className='container testimonials__container'
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                // navigation
                pagination={{ clickable: true }}>
                {data.map(({ avatar, name, review }, index) => {
                    return (
                        <SwiperSlide key={index} className='testimonial'>
                            <div className='client__avatar'>
                                <img src={avatar} />
                            </div>
                            <div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>{review}</small>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Testimonials;
