import { CountUp } from "@/components/animation/CountUp";

export default function FunFactItem({
  value,
  unit,
  title,
}: {
  value: number;
  unit: string;
  title: string;
}) {
  return (
    <div className="flex flex-col md:flex-row items-center md:text-left text-center justify-center text-white gap-5 pt-12 border-t border-white/10">
      <h3 className="md:text-8xl text-6xl font-bold">
        <CountUp value={value} />
        {unit}
      </h3>
      <p className="md:text-xl text-base font-medium md:max-w-40">{title}</p>
    </div>
  );
}
