import { useEffect, useState } from "react";
import Pin from "@/components/Pin";

export default function Keychain(props: {
  imageSrc: string;
  className?: string;
  imageClassName?: string;
  imageLink?: string;
  speed?: "slow" | "medium" | "fast" | "insane";
  pinColor?: number;
  chainLength?: "short" | "medium" | "long";
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
          : -6;
  const rotationMax =
    props.speed == "slow"
      ? 3
      : props.speed == "fast"
        ? 8
        : props.speed == "insane"
          ? 180
          : 6;
  const hoverRotationMin =
    props.speed == "slow"
      ? 5
      : props.speed == "fast"
        ? 8
        : props.speed == "insane"
          ? 91
          : 7;
  const hoverRotationMax =
    props.speed == "slow"
      ? 8
      : props.speed == "fast"
        ? 14
        : props.speed == "insane"
          ? 180
          : 12;
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
    <div className="relative z-99 w-24">
      <Pin pinColor={props.pinColor} />

      <div
        className={`origin-top transition ${props.className || ""}`}
        style={{
          rotate:
            // set rotate to rotation
            // on hover, if rotation < 0, add hoverRotation to rotation, else if rotation >= 0, subtract hoverRotation from rotation
            "-" +
            (Number(rotation.toFixed(1)) +
              (active
                ? Number((rotation * -1).toFixed(1))
                : hover && rotation < 0
                  ? Number(hoverRotation.toFixed(1))
                  : hover
                    ? Number((hoverRotation * -1).toFixed(1))
                    : 0) +
              "deg"),
          transitionDuration: duration.toFixed() + "ms",
        }}
        /* onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)} */
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
                    // on hover, if rotation < 0, add hoverRotation to rotation, else if rotation >= 0, subtract hoverRotation from rotation
                    (Number(rotation.toFixed(1)) -
                      (active
                        ? Number((rotation * -1).toFixed(1))
                        : hover && rotation < 0
                          ? Number(hoverRotation.toFixed(1))
                          : hover
                            ? Number((hoverRotation * -1).toFixed(1))
                            : 0)) *
                      0.5 +
                    "deg",
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
                  // on hover, if rotation < 0, add hoverRotation to rotation, else if rotation >= 0, subtract hoverRotation from rotation
                  (Number(rotation.toFixed(1)) -
                    (active
                      ? Number((rotation * -1).toFixed(1))
                      : hover && rotation < 0
                        ? Number(hoverRotation.toFixed(1))
                        : hover
                          ? Number((hoverRotation * -1).toFixed(1))
                          : 0)) *
                    0.5 +
                  "deg",
                transitionDuration: duration.toFixed() + "ms",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
