"use client";

import Image from "next/image";
import { Button } from "@/components/ui";

const Hero = () => {
  return (
    <section className="py-12 px-10 flex justify-center">
      <div className="layout-container flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-10 relative">
        <div className="w-full max-w-[644px] flex-shrink-0 ">
          <div className="rounded-2xl overflow-hidden lg:mb-[42px]">
            <Image
              src="/img/hero.webp"
              alt="Project sample"
              width={644}
              height={466}
              className="w-full lg:w-[622px] h-[354px] sm:h-[490px] lg:h-[466px] object-cover rounded-[20px]"
            />
          </div>
          <div className="hidden lg:flex flex-col gap-[11px] items-start w-fit">
            <Button variant="white" size="lg" isDiscount>
              Купить со скидкой
            </Button>
            <div className="flex items-center gap-3 font-bold m-auto">
              <span className="text-[20px] text-pink-500 ">1000 грн</span>
              <span className="text-sm text-gray-200 line-through">
                2000 грн
              </span>
            </div>
          </div>
        </div>

        <p className="hidden lg:block text-sm mt-[84px] max-w-[320px]">
          Станьте известным всего за 3 месяца без затрат на рекламу! Узнайте
          ключ к созданию вирусного контента и превратите свои идеи в миллионные
          просмотры.
        </p>

        <div className="lg:hidden absolute top-[275px] md:bottom-0  sm:top-[410px] flex flex-col">
          <div className="w-full flex flex-col mb-[31px]">
            <p className="text-[21px] text-center font-bold mb-1 bg-gradient-text bg-clip-text text-transparent">
              От 0 до 100,000 за 90 дней
            </p>
            <h2 className="text-[54px] font-extrabold text-white uppercase text-center">
              Секреты Вирусных Видео
            </h2>
          </div>
          <p className="text-sm mb-[45px] text-center">
            Станьте известным всего за 3 месяца без затрат на рекламу! Узнайте
            ключ к созданию вирусного контента и превратите свои идеи в
            миллионные просмотры.
          </p>
          <div className="flex flex-col gap-[11px] items-center">
            <Button variant="white" size="lg" isDiscount>
              Купить со скидкой
            </Button>
            <div className="flex items-center gap-3 font-bold">
              <span className="text-[20px] text-pink-500 ">1000 грн</span>
              <span className="text-sm text-gray-200 line-through">
                2000 грн
              </span>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-col absolute top-[35%] lg:right-[-50] xl:right-[-30] max-w-[480px] xl:max-w-[570px]">
          <div className="w-full flex flex-col">
            <p className="text-[32px] text-start font-bold mb-1 bg-gradient-text bg-clip-text text-transparent mb-[15px]">
              От 0 до 100,000 за 90 дней
            </p>
            <h2 className="text-[70px] xl:text-[96px] font-extrabold text-white uppercase text-start">
              Секреты Вирусных Видео
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
