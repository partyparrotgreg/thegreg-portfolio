'use client'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectCard } from "./ProjectCard";
import { Mousewheel } from 'swiper/modules';

export const SwiperCarousel = () => {
    return (
        <Swiper spaceBetween={24} slidesPerView={'auto'} modules={[Mousewheel]} mousewheel
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
            <SwiperSlide>
                <ProjectCard />
            </SwiperSlide>
            <SwiperSlide>
                <ProjectCard />
            </SwiperSlide>
            <SwiperSlide>
                <ProjectCard />
            </SwiperSlide>
        </Swiper>
    )
}