import Link from "next/link";

interface IconProps {
  icon: string | { src: string };
  href?: string;
  iconSize?: string;
  iconBoxSize?: string;
  bgColor?: string;
  onClick?: () => void;
  brightness?: boolean;
}

export default function Icon({
  icon,
  href, 
  iconSize = "w-6 h-6",
  iconBoxSize = "",
  bgColor = "primary",
  onClick,
  brightness = false,
}: IconProps) {
  const src = typeof icon === "string" ? icon : icon.src;
  const content = (
    <div
      className={`${iconBoxSize} rounded-full flex items-center justify-center ${bgColor}`}
    >
      <img
        src={src}
        className={`${iconSize}`}
        style={{
          filter: brightness
            ? "brightness(0) saturate(100%) invert(1)"
            : "none",
        }}
      />
    </div>
  );

  if (href) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </Link>
    );
  }

  if (onClick) {
    return <button onClick={onClick}>{content}</button>;
  }

  return content;
}
