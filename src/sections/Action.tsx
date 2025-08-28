"use client";

import Image from "next/image";

import { Button } from "@/components/ui";

const Action = () => {
  return (
    <section className="w-full relative px-[56px] py-[113px] flex items-center justify-center mt-[76px] lg:mt-50 mb-[48px] lg:mb-[59px] bg-gradient-purple-secondary lg:bg-gradient-action overflow-hidden">
      <div className="hidden lg:block absolute left-0 top-0 h-full w-[513px] z-2">
        <Image
          src="/img/action-bg.webp"
          alt="Decorative left image"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-[62px] lg:gap-[44px] max-w-[281px] md:max-w-[534px] items-center z-5">
        <div className="flex flex-col text-center">
          <h3 className="text-[20px] lg:text-[36px] font-bold uppercase mb-5">
            Узнай, как создавать контент, который{" "}
            <span className="bg-gradient-text bg-clip-text text-transparent">
              покоряет аудитории
            </span>
          </h3>
          <p className="text-[14px] lg:text-[20px] lg:text-[24px]">
            Материалы, способные стать вирусными и охватить тысячи людей!
          </p>
        </div>
        <Button
          isDiscount
          size="lg"
          className="max-w-[268px] h-[68px] md:max-w-full"
        >
          Купить со скидкой
        </Button>
      </div>

      <div className="hidden lg:flex items-center absolute bottom-30 -right-[180px] w-fit px-10 h-[97px] bg-gradient-primary rotate-[-45deg] filter blur-xs">
        <span className="text-[34px] font-bold text-white uppercase">
          Секреты вирусных видео
        </span>
      </div>
    </section>
  );
};

export default Action;
