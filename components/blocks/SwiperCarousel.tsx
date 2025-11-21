'use client'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from "swiper/react";

export const SwiperCarousel = ({ items }: { items: React.ReactNode[] }) => {
    // const map children, can be multiple elements
    return (
        <Swiper spaceBetween={24} slidesPerView={'auto'}
            style={{
                overflow: 'visible'
            }}
            scrollbar={{ draggable: true }} breakpoints={
                {
                    320: {
                        slidesPerView: 1.2,
                    },
                    1024: {
                        slidesPerView: 2.5,
                    }
                }
            }>
            {items.map((child, index) => (
                <SwiperSlide key={index}>
                    {child}
                </SwiperSlide>
            ))}
        </Swiper>
    )
}