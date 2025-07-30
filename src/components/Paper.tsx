import { useEffect, useState } from "react";
import Pin from "@/components/Pin";

export default function Paper(props: {
  children: React.ReactNode;
  className?: string;
  paperDivClassName?: string;
  paperClassName?: string;
  speed?: "off" | "slow" | "medium" | "fast" | "insane";
  pinColor?: number;
  clickable?: boolean;
}) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const rotationMin =
    props.speed == "off"
      ? 0
      : props.speed == "slow"
        ? -3
        : props.speed == "fast"
          ? -8
          : props.speed == "insane"
            ? -180
            : -6; // medium
  const rotationMax =
    props.speed == "off"
      ? 0
      : props.speed == "slow"
        ? 3
        : props.speed == "fast"
          ? 8
          : props.speed == "insane"
            ? 180
            : 6; // medium
  const hoverRotationMin =
    props.speed == "off"
      ? 0
      : props.speed == "slow"
        ? 5
        : props.speed == "fast"
          ? 8
          : props.speed == "insane"
            ? 91
            : 7; // medium
  const hoverRotationMax =
    props.speed == "off"
      ? 0
      : props.speed == "slow"
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
    props.speed == "off"
      ? 0
      : props.speed == "slow"
        ? 3500
        : props.speed == "fast"
          ? 1000
          : props.speed == "insane"
            ? 500
            : 2000; // medium
  const durationMax =
    props.speed == "off"
      ? 0
      : props.speed == "slow"
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
      className={`relative ${props.clickable ? "perspective-[1000px]" : ""} ${props.className || ""}`}

      /* onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)} */
    >
      <Pin pinColor={props.pinColor} />

      <div
        className={`${props.clickable ? "origin-top transform transition transform-3d hover:rotate-x-8 hover:rotate-y-0 hover:drop-shadow-lg active:rotate-x-0 active:rotate-y-0 active:drop-shadow-none" : ""} ${props.paperDivClassName || ""}`}
      >
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
    </div>
  );
}
