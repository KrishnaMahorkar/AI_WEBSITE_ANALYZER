import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="Company Logo"
      width={120}   // adjust if needed
      height={32}   // adjust if needed
      priority
    />
  );
}
