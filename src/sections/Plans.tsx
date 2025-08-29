import { PlanCard } from "@/components";

import { plans } from "@/data";

const Plans = () => (
  <section className="relative mt-[502px] sm:mt-[400px] lg:mt-[200px] layout-container">
    <div className="lg:hidden absolute rounded-full bg-blue-500 blur-[120px] w-[184px] h-[173px] -right-30 -top-10 z-0" />
    <div className="hidden lg:block absolute rounded-full bg-purple-300 blur-[200px] w-[294px] h-[293px] right-10 -top-15 z-0" />

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
