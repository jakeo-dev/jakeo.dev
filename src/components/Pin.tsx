import { useEffect, useState } from "react";

export default function Pin(props: { pinColor?: number }) {
  const pinMin = 0;
  const pinMax = 8;
  const [randomPinColor, setRandomPinColor] = useState(0);

  useEffect(() => {
    setRandomPinColor(
      props.pinColor ||
        Number((Math.random() * (pinMax - pinMin) + pinMin).toFixed()),
    );
  }, []);

  return (
    <div>
      <div className="absolute top-[8px] left-1/2 z-60 h-[1.5px] w-[11px] -translate-x-[105%] -rotate-26 transform bg-stone-400" />
      <div
        className={`absolute top-[5px] left-1/2 z-70 h-2 w-2 -translate-x-[130%] transform rounded-full shadow-sm ${randomPinColor == 0 ? "bg-red-700" : randomPinColor == 1 ? "bg-orange-700" : randomPinColor == 2 ? "bg-yellow-700" : randomPinColor == 3 ? "bg-lime-700" : randomPinColor == 4 ? "bg-emerald-700" : randomPinColor == 5 ? "bg-sky-700" : randomPinColor == 6 ? "bg-blue-700" : randomPinColor == 7 ? "bg-purple-700" : randomPinColor == 8 ? "bg-pink-700" : "bg-stone-700"}`}
      />
      <div
        className={`absolute top-[4.5px] left-1/2 z-80 h-3 w-3 -translate-x-[130%] transform rounded-full shadow-sm ${randomPinColor == 0 ? "bg-red-500" : randomPinColor == 1 ? "bg-orange-500" : randomPinColor == 2 ? "bg-yellow-500" : randomPinColor == 3 ? "bg-lime-500" : randomPinColor == 4 ? "bg-emerald-500" : randomPinColor == 5 ? "bg-sky-500" : randomPinColor == 6 ? "bg-blue-500" : randomPinColor == 7 ? "bg-purple-500" : randomPinColor == 8 ? "bg-pink-500" : "bg-stone-500"}`}
      />
      <div className="absolute top-[7px] left-1/2 z-90 h-1 w-1 -translate-x-[325%] transform rounded-full bg-stone-100/20" />
    </div>
  );
}
