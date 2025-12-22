import Image from "next/image";
import { Container } from "@/components/craft";
import { VideoPlayHome1 } from "@/types/image";
import Icon from "@/components/ui/Icon";
import { IconPlayArrow } from "@/types/icon";
import PlayButton from "@/components/ui/PlayButton";

export default function VideoPlay() {
  return (
    <section className="px-4 md:px-12">
      <Container>
        <div className="w-full h-full rounded-4xl p-2.5 bg-[#f7e7e7] relative overflow-hidden">
          <Image
            src={VideoPlayHome1}
            alt="Video Play"
            className="object-cover w-full md:h-[700px] h-80 rounded-3xl"
          />

          <PlayButton videoId="1234567890" className="absolute inset-0 bg-black/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="flex items-center justify-center h-full gap-4">
              <Icon
                icon={IconPlayArrow}
                iconSize="w-10 h-10"
                iconBoxSize="w-16 h-16"
                bgColor="bg-primary"
              />
              <h3 className="text-white text-2xl font-bold">Play Video</h3>
            </div>
          </PlayButton>
        </div>
      </Container>
    </section>
  );
}
