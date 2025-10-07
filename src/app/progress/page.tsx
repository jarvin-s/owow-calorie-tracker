import Image from "next/image";

export default function FlipdotSettings() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image
        src={"/kcaltracker.gif"}
        alt="Progress"
        width={1000}
        height={1000}
      />
    </div>
  );
}
