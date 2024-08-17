import Image from "next/image";

const Logo = () => (
  <div className="relative size-12">
    <Image
      src="/unnamed.png"
      fill
      alt="logo"
      style={{ objectFit: "contain" }}
    />
  </div>
);

export default Logo;
