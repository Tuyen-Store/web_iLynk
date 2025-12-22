import { Project4 } from "@/types/image";
import Image from "next/image";

export default function ServiceCardItem() {
  return (
    <div className="border border-border rounded-xl p-4 overflow-hidden">
      <a
        href="/dich-vu/website-doanh-nghiep"
        className="relative group overflow-hidden"
      >
        <Image
          src={Project4}
          alt="Service"
          width={350}
          height={350}
          className="w-full h-[350px] aspect-square object-cover rounded-xl"
        />

        <div className="bg-white rounded-full absolute -top-4 -left-4 z-2 text-5xl p-3">
          <div className="flex items-center justify-center p-6 bg-heading rounded-full text-primary relative group-hover:text-heading">
            <div className="absolute top-0 left-0 w-full h-full rounded-full bg-primary scale-0 origin-center transition-transform duration-500 ease-out group-hover:scale-100"></div>
            <i
              aria-hidden="true"
              className="flaticon-business-008-health-check z-1"
            />
          </div>
        </div>

        <div className="absolute overflow-hidden top-0 left-0 w-full h-full rounded-xl flex flex-col items-start justify-end px-10 py-8 gap-2 ">
          <div className="card-overlay"></div>
          <span className="text-white text-base font-medium z-1 group-hover:text-heading">
            02
          </span>
          <h3 className="text-white text-2xl font-bold line-clamp-2 z-1 group-hover:text-heading">
            Website doanh nghiệp
          </h3>
        </div>
      </a>
    </div>
  );
}
