import Link from "next/link";

interface IconProps {
  icon: string | { src: string };
  href?: string;
  iconSize?: number;
  width?: number;
  height?: number;
  bgColor?: string;
  onClick?: () => void;
  brightness?: boolean;
}

export default function Icon({ icon, href, iconSize = 24, width = 24, height = 24, bgColor = "primary", onClick, brightness = false }: IconProps) {
  const src = typeof icon === "string" ? icon : icon.src;
  const content = 
  <div className={`w-full h-full rounded-full flex items-center justify-center ${bgColor}`} style={{ width: width, height: height }}>
    <img src={src} style={{ width: iconSize, height: iconSize, filter: brightness ? "brightness(0) saturate(100%) invert(1)" : "none" }} />
  </div>;

  if (href) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </Link>
    )
  }

  if (onClick) {
    return (
      <button onClick={onClick}>
        {content}
      </button>
    )
  }

  return content
}

