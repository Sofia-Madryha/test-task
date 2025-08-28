"use client";

import { PlanCard } from "@/components";

import { PlanCardProps } from "@/types";

const plans: PlanCardProps[] = [
  {
    label: "basic",
    title: "Базовый",
    price: "99 $",
    oldPrice: "139 $",
    tags: ["Базовый курс", "38 уроков"],
    bestseller: false,
  },
  {
    label: "pro",
    title: "Продвинутий",
    price: "149 $",
    oldPrice: "199 $",
    tags: [
      "База",
      "Дополнительные уроки",
      "48 уроков",
      "чат-комьюнити для создателей контента",
    ],
    badge: "Pro",
    bestseller: true,
  },
  {
    label: "expert",
    title: "ЭКСПЕРТ",
    price: "299 $",
    oldPrice: "500 $",
    tags: [
      "Дополнительные уроки",
      "48 уроков",
      "Чат-комьюнити для создателей контента",
      "Разбор вашей страницы в формате видеозвонка",
    ],
    badge: "Expert",
    bestseller: false,
  },
];

const Plans = () => (
  <section className="mt-[502px] sm:mt-[400px] lg:mt-[200px] layout-container">
    <h2 className="text-[24px] xl:text-[48px] font-bold uppercase text-white text-center mb-7 xl:mb-[79px]">
      Тарифы
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[47px] lg:gap-5">
      {plans.map((plan, i) => (
        <PlanCard key={i} {...plan} />
      ))}
    </div>
  </section>
);

export default Plans;
