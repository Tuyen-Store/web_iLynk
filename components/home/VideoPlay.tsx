import Image from 'next/image';
import { Container } from '@/components/craft';
import { VideoPlayHome1 } from '@/types/image';
import Icon from '@/components/ui/Icon';
import { IconPlayArrow } from '@/types/icon';
import PlayButton from '@/components/ui/PlayButton';

export default function VideoPlay() {
  return (
    <section className="px-4 md:px-12">
      <Container>
        <div className="relative h-full w-full overflow-hidden rounded-4xl bg-[#f7e7e7] p-2.5">
          <Image
            src={VideoPlayHome1}
            alt="Video Play"
            className="h-80 w-full rounded-3xl object-cover md:h-[700px]"
          />

          <PlayButton
            videoId="1234567890"
            className="absolute inset-0 top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-black/20"
          >
            <div className="flex h-full items-center justify-center gap-4">
              <Icon
                icon={IconPlayArrow}
                iconSize="w-10 h-10"
                iconBoxSize="w-16 h-16"
                bgColor="bg-primary"
              />
              <h3 className="text-2xl font-bold text-white">Play Video</h3>
            </div>
          </PlayButton>
        </div>
      </Container>
    </section>
  );
}
