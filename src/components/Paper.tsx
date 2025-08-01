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
  stackedPaperEffect?: boolean;
  padding?: "none" | "small" | "medium" | "big";
}) {
  const rotationMin =
    props.speed == "off"
      ? 0
      : props.speed == "slow"
        ? -2
        : props.speed == "fast"
          ? -8
          : props.speed == "insane"
            ? -180
            : -6; // medium
  const rotationMax =
    props.speed == "off"
      ? 0
      : props.speed == "slow"
        ? 2
        : props.speed == "fast"
          ? 8
          : props.speed == "insane"
            ? 180
            : 6; // medium
  const [rotation, setRotation] = useState(
    Math.random() * (rotationMax - rotationMin) + rotationMin,
  );

  const durationMin =
    props.speed == "off"
      ? 0
      : props.speed == "slow"
        ? 3000
        : props.speed == "fast"
          ? 1000
          : props.speed == "insane"
            ? 500
            : 2000; // medium
  const durationMax =
    props.speed == "off"
      ? 0
      : props.speed == "slow"
        ? 7000
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

  useEffect(() => {
    setRotation(Math.random() * (rotationMax - rotationMin) + rotationMin);
    setDuration(Math.random() * (durationMax - durationMin) + durationMin);
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
      className={`relative ${props.clickable ? "cursor-pointer perspective-[1000px]" : ""} ${props.className || ""}`}
    >
      <Pin pinColor={props.pinColor} />

      <div
        className={`${props.clickable ? "origin-top transform transition transform-3d hover:rotate-x-8 hover:rotate-y-0 hover:drop-shadow-lg active:rotate-x-0 active:rotate-y-0 active:drop-shadow-none" : ""} ${props.paperDivClassName || ""}`}
      >
        <div
          className={`origin-top rounded bg-stone-100/95 shadow-md transition ${props.padding == "none" ? "p-0" : props.padding == "small" ? "p-3 pt-4" : props.padding == "big" ? "p-10" : "p-6"} ${props.paperClassName || ""}`}
          style={{
            rotate:
              // set rotate to rotation
              rotation.toFixed(1) + "deg",
            transitionDuration: duration.toFixed() + "ms",
          }}
        >
          {props.children}
        </div>
      </div>

      {/* stacked paper effect */}
      {props.stackedPaperEffect ? (
        <>
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className={`absolute top-0 left-1/2 -z-10 origin-top -translate-x-1/2 rounded bg-stone-100/95 ${props.padding == "none" ? "p-0" : props.padding == "small" ? "p-3" : props.padding == "big" ? "p-10" : "p-6"} shadow-md transition ${props.paperClassName || ""}`}
              style={{
                rotate:
                  // set rotate to rotation
                  // do some psuedo-random stuff to the rotation and duration
                  (
                    rotation *
                    (i % 2 ? -1 : 1) *
                    (rotation < 1.5 ? i : i * 0.75)
                  ).toFixed(1) + "deg",
                transitionDuration:
                  (duration * (i % 2 ? i : i * 0.75)).toFixed() + "ms",
              }}
            >
              {props.children}
            </div>
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
