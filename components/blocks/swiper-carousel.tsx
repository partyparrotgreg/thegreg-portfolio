'use client'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from "swiper/react";

export const SwiperCarousel = ({ items }: { items: React.ReactNode[] }) => {
    return (
        <Swiper spaceBetween={24} slidesPerView={"auto"}
            style={{
                overflow: 'visible'
            }}
            scrollbar={{ draggable: true }}>
            {items.map((child, index) => (
                <SwiperSlide key={index}>
                    {child}
                </SwiperSlide>
            ))}
        </Swiper>
    )
}