import { PlanCardProps } from "@/types";

export const menuItems = [
  { label: "Структура", value: "structure" },
  { label: "Обо мне", value: "aboutMe" },
  { label: "Плюсы", value: "advantages" },
  { label: "Отзывы", value: "reviews" },
  { label: "FAQ", value: "faq" },
];

export const plans: PlanCardProps[] = [
  {
    label: "basic",
    title: "Базовый",
    price: "99 $",
    oldPrice: "139$",
    tags: ["Базовый курс", "38 уроков"],
    bestseller: false,
  },
  {
    label: "pro",
    title: "Продвинутий",
    price: "149 $",
    oldPrice: "199$",
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
    oldPrice: "500$",
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
