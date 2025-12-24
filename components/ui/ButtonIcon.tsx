import { Button } from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

type Props = {
  icon: string | { src: string };
  onClick: () => void;
  label: string;
  maxWidth?: string;
};

export default function ButtonIcon({
  icon,
  onClick = () => {},
  label = '',
  maxWidth = 'max-w-48',
}: Props) {
  return (
    <Button
      variant="primary"
      size="lg"
      className={`${maxWidth} group relative w-full gap-2 pr-12 transition-all duration-600 hover:pr-2 hover:pl-12`}
      font="bold"
      uppercase={true}
      onClick={() => {
        onClick();
      }}
    >
      <div className="absolute top-1/2 left-2 -translate-y-1/2 scale-0 transition-all duration-500 group-hover:scale-100">
        <Icon
          icon={icon}
          iconSize="w-5 h-5"
          bgColor="bg-heading"
          brightness={true}
          iconBoxSize="lg:w-11 lg:h-11 w-10 h-10"
        />
      </div>
      <div className="mt-0.5">{label} </div>
      <div className="absolute top-1/2 right-2 -translate-y-1/2 transition-all duration-500 group-hover:scale-0">
        <Icon
          icon={icon}
          iconSize="w-5 h-5"
          bgColor="bg-heading"
          brightness={true}
          iconBoxSize="lg:w-11 lg:h-11 w-10 h-10"
        />
      </div>
    </Button>
  );
}
