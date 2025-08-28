import { Button } from "@/components/ui";
import { PlanCardProps } from "@/types";

const PlanCard = ({
  label = "basic",
  title,
  price,
  oldPrice,
  tags,
  badge,
  bestseller,
}: PlanCardProps) => {
  const variants = {
    basic:
      "bg-gradient-purple text-white inset-shadow-sm inset-shadow-purple-200/50 ",
    pro: "bg-white text-black",
    expert: "bg-gradient-primary",
  };

  return (
    <div
      className={`relative rounded-2xl py-[31px] px-6 h-[466px] flex flex-col shadow-md ${variants[label]}`}
    >
      {bestseller ? (
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[169px] px-[33px] py-[11px] text-[16px] font-bold text-white uppercase bg-gradient-primary rounded-full shadow-lg">
          Best seller
        </span>
      ) : null}
      <div className="w-full mb-[18px] flex gap-[11px] items-center justify-between">
        <h3 className="text-[20px] uppercase font-semibold">{title}</h3>

        {badge ? (
          <div
            className={`py-[11px] px-[33px] rounded-full ${
              label === `pro` ? `bg-black` : `bg-white`
            }`}
          >
            <p className="text-[16px] uppercase bg-gradient-text bg-clip-text text-transparent font-bold">
              {badge}
            </p>
          </div>
        ) : null}
      </div>
      <div className="flex mb-[28px] items-end justify-between">
        <p className="text-[60px] sm:text-[74px] font-bold font-manrope">
          {price}
        </p>
        <span className="text-[20px] line-through">{oldPrice}</span>
      </div>
      <ul className="flex flex-col gap-[14px] justify-center">
        {tags.map((tag, idx) => (
          <li
            key={idx}
            className="text-[16px] uppercase relative leading-[20px] pl-7 before:content-[''] before:absolute before:left-0 before:w-5 before:h-5 before:bg-current before:rounded-full"
          >
            {tag}
          </li>
        ))}
      </ul>
      <Button variant={label === "pro" ? "black" : "white"} className="mt-auto">
        Купить
      </Button>
    </div>
  );
};

export default PlanCard;
