import { cn } from "@/lib/utils";

export default function HeadingGroup({
  children,
  subTitle,
  align = "start",
  textColor = "dark",
}: {
  children: React.ReactNode;
  subTitle: string;
  align?: "start" | "center";
  textColor?: "light" | "dark";
}) {
  return (
    <div className={cn("flex flex-col gap-2", align === "center" ? "items-center justify-center" : "items-start justify-start")}>
      <div className="flex gap-2 items-center justify-start">
        <h3 className="text-primary text-base uppercase font-medium">
          {subTitle}
        </h3>
        <div className="w-12 h-0.5 bg-primary"></div>
      </div>
      <h2 className={cn("text-4xl md:text-[52px] leading-snug font-bold", textColor === "light" ? "text-white" : "text-heading")}>
        {children}
      </h2>
    </div>
  );
}
