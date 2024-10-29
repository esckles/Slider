/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */

import { FC, useEffect, useState } from "react";
import pix from "../assets/Bigslider/assets/1fb34610061a95a007ac5e7b1dc53138.webp";
import pix1 from "../assets/Bigslider/assets/3986915be548424a5d36657f2b034ead.webp";
import pix2 from "../assets/Bigslider/assets/4f02d72fe701b15b2168a4954332427f.png";
import pix3 from "../assets/Bigslider/assets/9b22cd83bde1809976bec0722d1f8923.jpeg";
import pix4 from "../assets/Bigslider/assets/d85ae8c7db2421e9a01ecac942978d4b.png";
import data from "../Data.json";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";

const images = [pix, pix1, pix2, pix3, pix4];

const Bigslider = () => {
  const [ref, { width }] = useMeasure();
  let xMovement = useMotionValue(0);

  const SLOW: number = 80;
  const FAST: number = 30;

  const [duration, setDuration] = useState<number>(FAST);
  const [finished, setFinished] = useState<boolean>(false);
  const [render, setRender] = useState<boolean>(false);

  useEffect(() => {
    let control;
    let finalPosition = -width / 2 - 8;

    if (finished) {
      control = animate(xMovement, [xMovement.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xMovement.get() / finalPosition),
        onComplete: () => {
          setRender(!render);
          setFinished(false);
        },
      });
    } else {
      control = animate(xMovement, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatDelay: 0,
        repeatType: "loop",
        onRepeat: () => {
          xMovement.set(finalPosition);
        },
      });
    }

    return () => control?.stop();
  }, [xMovement, width, duration, render]);

  return (
    <div className="overflow-hidden mt-10">
      <motion.div
        onHoverStart={() => {
          setDuration(SLOW);
          setFinished(true);
        }}
        onHoverEnd={() => {
          setDuration(FAST);
          setFinished(true);
        }}
        ref={ref}
        style={{ x: xMovement }}
        className="flex w-max gap-8"
      >
        {Array.from({ length: 3 }, () => {
          return images.map((image, index) => (
            <Card key={index} el={image} content={data[index]} />
          ));
        })}
      </motion.div>
    </div>
  );
};

export default Bigslider;

interface iProps {
  el: string;
  content: {
    id: number;
    title: string;
    title2: string;
    border: string;
    border2: string;
  };
}

const Card: FC<iProps> = ({ el, content }) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className="border overflow-hidden rounded-[40px] w-[250px] h-[350px] cursor-default relative"
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundImage: `url(${el})`,
          backgroundSize: "cover",
        }}
        className="relative"
      >
        {/* Display content on hover */}

        <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end items-start text-white p-5 ">
          <h2 className="text-lg font-semibold">{content.title}</h2>
          <h3 className="text-md">{content.title2}</h3>
          <div>
            <p className="flex gap-4">
              <p className="text-[10px] border rounded-[20px] py-2 px-4 items-center justify-center flex mt-2 gap-3">
                {" "}
                {content.border}
              </p>
              <p className="text-[10px] border rounded-[20px] py-2 px-4 items-center justify-center flex mt-2 gap-3">
                {" "}
                {content.border2}
              </p>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
