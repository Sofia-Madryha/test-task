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
      "bg-purple-600 text-white py-[33px] pl-[33px] pr-[32px] lg:pt-[36px] lg:pr-[37px] lg:pb-[26px] lg:pl-[36px] h-[430px] overflow-hidden",
    pro: "bg-white text-black py-[33px] pl-[29px] pr-[28px] lg:pt-[27px] lg:pr-[37px] lg:pb-[26px] lg:pl-[36px] h-[467px]",
    expert:
      "bg-gradient-primary pt-[31px] pb-[32px] px-[24px]  lg:pt-[27px] lg:pr-[37px] lg:pb-[26px] lg:pl-[36px] h-[466px]",
  };

  return (
    <div
      className={`relative rounded-[28px]  lg:h-[466px] flex flex-col inset-shadow-purple z-50 ${variants[label]}`}
    >
      {label === "basic" ? (
        <>
          <div className="absolute rounded-full bg-blue-500 blur-[120px] w-[315px] h-[282px] -bottom-80 -left-40 transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute rounded-full bg-purple-300 blur-[120px] w-[315px] h-[282px] -top-10 -right-35 transform translate-x-1/2 -translate-y-1/2" />
        </>
      ) : null}

      {bestseller ? (
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[169px] px-[33px] py-[11px] text-[16px] font-bold text-white uppercase bg-gradient-bestseller rounded-full shadow-lg">
          Best seller
        </span>
      ) : null}
      <div className=" w-full flex gap-[11px] mb-[32px] items-center justify-between">
        <h3 className="text-[16px] uppercase font-semibold ">{title}</h3>

        {badge ? (
          <div
            className={`py-[11px] px-[33px] rounded-full ${
              label === `pro` ? `bg-black` : `bg-white`
            }`}
          >
            <p className="text-[16px] uppercase bg-gradient-primary bg-clip-text text-transparent font-bold">
              {badge}
            </p>
          </div>
        ) : null}
      </div>
      <div className="flex mb-[29px] items-end gap-[34px] ">
        <p className="text-[60px] sm:text-[74px] font-bold font-manrope">
          {price}
        </p>
        <p className="text-[20px] font-bold font-manrope relative inline-block">
          {oldPrice}
          <span className="absolute -left-1.5 top-1/2 w-[59px] h-[2px] rounded bg-current -translate-y-1/2"></span>
        </p>
      </div>
      <ul className="flex flex-col gap-[14px] justify-center">
        {tags.map((tag, idx) => (
          <li
            key={idx}
            className="text-[16px] uppercase font-semibold relative leading-[20px] pl-7 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-5 before:h-5 before:bg-current before:rounded-full"
          >
            {tag}
          </li>
        ))}
      </ul>
      <Button
        variant={
          label === "pro" ? "black" : label === "expert" ? "expert" : "white"
        }
        className="mt-auto"
      >
        Купить
      </Button>
    </div>
  );
};

export default PlanCard;
