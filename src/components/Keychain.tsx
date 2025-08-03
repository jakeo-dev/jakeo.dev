import { useEffect, useState } from "react";
import Pin from "@/components/Pin";

export default function Keychain(props: {
  imageSrc: string;
  className?: string;
  imageClassName?: string;
  imageLink?: string;
  speed?: "off" | "slow" | "medium" | "fast" | "insane";
  pinColor?: number;
  chainLength?: "short" | "medium" | "long";
}) {
  const [motionChecked, setMotionChecked] = useState<boolean>(true);

  useEffect(() => {
    if (
      localStorage.getItem("motionChecked") &&
      Boolean(Number(localStorage.getItem("motionChecked"))) !== undefined
    )
      setMotionChecked(Boolean(Number(localStorage.getItem("motionChecked"))));
    else setMotionChecked(true);
  }, []);

  const rotationMin =
    props.speed == "off"
      ? 0
      : props.speed == "slow"
        ? -3
        : props.speed == "fast"
          ? -10
          : props.speed == "insane"
            ? -180
            : -6;
  const rotationMax =
    props.speed == "off"
      ? 0
      : props.speed == "slow"
        ? 3
        : props.speed == "fast"
          ? 10
          : props.speed == "insane"
            ? 180
            : 6;
  const [rotation, setRotation] = useState(
    motionChecked
      ? Math.random() * (rotationMax - rotationMin) + rotationMin
      : 0,
  );

  const durationMin =
    props.speed == "slow"
      ? 3000
      : props.speed == "fast"
        ? 1000
        : props.speed == "insane"
          ? 500
          : 2000; // medium
  const durationMax =
    props.speed == "slow"
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
    setRotation(
      motionChecked
        ? Math.random() * (rotationMax - rotationMin) + rotationMin
        : 0,
    );
    setDuration(Math.random() * (durationMax - durationMin) + durationMin);

    const interval = setInterval(() => {
      setRotation(
        motionChecked
          ? Math.random() * (rotationMax - rotationMin) + rotationMin
          : 0,
      );
      setDuration(
        Number(
          (Math.random() * (durationMax - durationMin) + durationMin).toFixed(),
        ),
      );
    }, duration);

    return () => clearInterval(interval);
  }, [motionChecked]);

  return (
    <div className="relative z-99 w-24">
      <Pin pinColor={props.pinColor} />

      <div
        className={`origin-top transition ${props.className || ""}`}
        style={{
          rotate:
            // set rotate to rotation
            "-" + rotation.toFixed(1) + "deg",
          transitionDuration: duration.toFixed() + "ms",
        }}
      >
        <div className="absolute top-[3.5px] left-1/2 h-6 w-6 -translate-x-[60%] transform rounded-full border-3 border-stone-200 bg-transparent shadow-sm" />
        <div
          className={`absolute top-6.5 left-1/2 ${props.chainLength == "short" ? "h-6" : props.chainLength == "long" ? "h-13" : "h-10"} w-0.5 -translate-x-[200%] transform bg-gradient-to-b from-stone-200 to-stone-300 shadow-sm`}
        />
        <div className="absolute top-12 left-1/2 -translate-x-[60%]">
          {props.imageLink ? (
            <a
              href={props.imageLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img
                src={props.imageSrc}
                className={`w-12 drop-shadow-md ${props.imageClassName || ""}`}
                style={{
                  rotate:
                    // set rotate to rotation
                    rotation.toFixed(1) + "deg",
                  transitionDuration: duration.toFixed() + "ms",
                }}
              />
            </a>
          ) : (
            <img
              src={props.imageSrc}
              className={`w-12 drop-shadow-md ${props.imageClassName}`}
              style={{
                rotate:
                  // set rotate to rotation
                  rotation.toFixed(1) + "deg",
                transitionDuration: duration.toFixed() + "ms",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
