import { Button } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

type Props = {
  icon: string | { src: string };
  onClick: () => void;
  label: string;
};

export default function ButtonIcon({ icon, onClick = () => {}, label = "" }: Props) {
  return (
    <Button
    variant="primary"
    size="lg"
    className="max-w-48 gap-2 relative pr-12 group hover:pl-12 hover:pr-2 transition-all duration-600 w-full"
    font="bold"
    uppercase={true}
    onClick={() => {
      onClick();
    }}
  >
    <div className="absolute left-2 top-1/2 -translate-y-1/2 group-hover:scale-100 scale-0 transition-all duration-500">
      <Icon
        icon={icon}
        iconSize={20}
        width={44}
        height={44}
        bgColor="bg-heading"
        brightness={true}
      />
    </div>
    {label}
    <div className="absolute right-2 top-1/2 -translate-y-1/2 group-hover:scale-0 transition-all duration-500">
      <Icon
        icon={icon}
        iconSize={20}
        width={44}
        height={44}
        bgColor="bg-heading"
        brightness={true}
      />
    </div>
  </Button>
  );
}