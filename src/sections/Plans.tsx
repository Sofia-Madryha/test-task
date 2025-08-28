import { PlanCard } from "@/components";

import { plans } from "@/data";


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
