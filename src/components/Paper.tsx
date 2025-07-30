import { useEffect, useState } from "react";

export default function Paper(props: {
  children: React.ReactNode;
  className?: string;
  paperClassName?: string;
  speed?: "slow" | "medium" | "fast" | "insane";
  pinColor?: number;
}) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const rotationMin =
    props.speed == "slow"
      ? -3
      : props.speed == "fast"
        ? -8
        : props.speed == "insane"
          ? -180
          : -6; // medium
  const rotationMax =
    props.speed == "slow"
      ? 3
      : props.speed == "fast"
        ? 8
        : props.speed == "insane"
          ? 180
          : 6; // medium
  const hoverRotationMin =
    props.speed == "slow"
      ? 5
      : props.speed == "fast"
        ? 8
        : props.speed == "insane"
          ? 91
          : 7; // medium
  const hoverRotationMax =
    props.speed == "slow"
      ? 8
      : props.speed == "fast"
        ? 14
        : props.speed == "insane"
          ? 180
          : 12; // medium
  const [rotation, setRotation] = useState(
    Math.random() * (rotationMax - rotationMin) + rotationMin,
  );
  const [hoverRotation, setHoverRotation] = useState(
    Math.random() * (hoverRotationMax - hoverRotationMin) + hoverRotationMin,
  );

  const durationMin =
    props.speed == "slow"
      ? 3500
      : props.speed == "fast"
        ? 1000
        : props.speed == "insane"
          ? 500
          : 2000; // medium
  const durationMax =
    props.speed == "slow"
      ? 7500
      : props.speed == "fast"
        ? 3000
        : props.speed == "insane"
          ? 1000
          : 5000; // medium
  const [duration, setDuration] = useState(
    Number(
      (Math.random() * (durationMax - durationMin) + durationMin).toFixed(),
    ),
  );

  const pinMin = 0;
  const pinMax = 8;
  const [randomPinColor, setRandomPinColor] = useState(0);

  useEffect(() => {
    setRotation(Math.random() * (rotationMax - rotationMin) + rotationMin);
    setHoverRotation(
      Math.random() * (hoverRotationMax - hoverRotationMin) + hoverRotationMin,
    );
    setDuration(Math.random() * (durationMax - durationMin) + durationMin);

    setRandomPinColor(
      props.pinColor ||
        Number((Math.random() * (pinMax - pinMin) + pinMin).toFixed()),
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(Math.random() * (rotationMax - rotationMin) + rotationMin);
      setDuration(
        Number(
          (Math.random() * (durationMax - durationMin) + durationMin).toFixed(),
        ),
      );
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative ${props.className || ""}`}

      /* onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)} */
    >
      <div>
        <div className="absolute top-[8px] left-1/2 z-60 h-[1.5px] w-[9px] -translate-x-[110%] -rotate-26 transform bg-stone-400" />
        <div
          className={`absolute top-[5px] left-1/2 z-70 h-2 w-2 -translate-x-[130%] transform rounded-full shadow-sm ${randomPinColor == 0 ? "bg-red-700" : randomPinColor == 1 ? "bg-orange-700" : randomPinColor == 2 ? "bg-yellow-700" : randomPinColor == 3 ? "bg-lime-700" : randomPinColor == 4 ? "bg-emerald-700" : randomPinColor == 5 ? "bg-sky-700" : randomPinColor == 6 ? "bg-blue-700" : randomPinColor == 7 ? "bg-purple-700" : randomPinColor == 8 ? "bg-pink-700" : "bg-stone-700"}`}
        />
        <div
          className={`absolute top-[4.5px] left-1/2 z-80 h-3 w-3 -translate-x-[130%] transform rounded-full shadow-sm ${randomPinColor == 0 ? "bg-red-500" : randomPinColor == 1 ? "bg-orange-500" : randomPinColor == 2 ? "bg-yellow-500" : randomPinColor == 3 ? "bg-lime-500" : randomPinColor == 4 ? "bg-emerald-500" : randomPinColor == 5 ? "bg-sky-500" : randomPinColor == 6 ? "bg-blue-500" : randomPinColor == 7 ? "bg-purple-500" : randomPinColor == 8 ? "bg-pink-500" : "bg-stone-500"}`}
        />
        <div className="absolute top-[7px] left-1/2 z-90 h-1 w-1 -translate-x-[325%] transform rounded-full bg-stone-100/20" />
      </div>

      <div
        className={`origin-top rounded bg-stone-100/95 p-6 shadow-md transition ${props.paperClassName || ""}`}
        style={{
          rotate:
            // set rotate to rotation
            // on hover, if rotation < 0, add hoverRotation to rotation, else if rotation >= 0, subtract hoverRotation from rotation
            Number(rotation.toFixed(1)) +
            (active
              ? Number((rotation * -1).toFixed(1))
              : hover && rotation < 0
                ? Number(hoverRotation.toFixed(1))
                : hover
                  ? Number((hoverRotation * -1).toFixed(1))
                  : 0) +
            "deg",
          transitionDuration: duration.toFixed() + "ms",
        }}
      >
        {props.children}
      </div>
    </div>
  );
}
