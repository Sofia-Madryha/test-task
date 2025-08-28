import Image from "next/image";

import { Button } from "@/components/ui";

const Hero = () => {
  return (
    <section className="layout-container mt-12 flex">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-10 relative">
        <div className="flex-shrink-0 ">
          <div className="rounded-2xl overflow-hidden lg:mb-[42px]">
            <Image
              src="/img/hero.webp"
              alt="Project sample"
              width={644}
              height={466}
              className="w-full lg:w-[622px] xl:w-[644px] h-[354px] sm:h-[490px] lg:h-[466px] object-cover rounded-[20px]"
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

        <div className="lg:hidden absolute top-[275px] md:bottom-0 sm:top-[410px] flex flex-col">
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

        <div className="hidden lg:flex flex-col absolute  top-[40%] xl:top-[35%] right-[-5px] xl:right-[-130px]  max-w-[420px] xl:max-w-[570px]">
          <div className="flex flex-col">
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
