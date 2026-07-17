"use client";

import Image from "next/image";
import {
  motion,
  PanInfo,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useState } from "react";

type ServiceItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const services: ServiceItem[] = [
  {
    id: 1,
    title: "TELEGRAM SERVICES",
    description: "Everything you need for Telegram in one place.",
    image: "/images/categories/telegram.jpg",
  },
  {
    id: 2,
    title: "PREMIUM STARS & GIFTS",
    description: "Upgrade your account, get Stars and exclusive gifts.",
    image: "/images/categories/premium.jpg",
  },
  {
    id: 3,
    title: "NFT",
    description: "Collect, trade and manage your digital assets.",
    image: "/images/categories/nft.jpg",
  },
  {
    id: 4,
    title: "AI & TOOLS",
    description: "Powerful AI tools for your everyday work.",
    image: "/images/categories/ai.jpg",
  },
  {
    id: 5,
    title: "FINANCE",
    description: "Wallets, payments and financial services in one place.",
    image: "/images/categories/finance.jpg",
  },
  {
    id: 6,
    title: "ADVERTISE",
    description: "Promote your products and services inside NASE.",
    image: "/images/categories/advertise.jpg",
  },
];

const DRAG_DISTANCE = 55;
const DRAG_VELOCITY = 500;

function getLoopedIndex(index: number) {
  const total = services.length;

  return ((index % total) + total) % total;
}

export default function NaseGivesYou() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const dragY = useMotionValue(0);

  const currentRotateX = useTransform(
    dragY,
    [-130, 0, 130],
    [32, 0, -32]
  );

  const currentScale = useTransform(
    dragY,
    [-130, 0, 130],
    [0.88, 1, 0.88]
  );

  const currentOpacity = useTransform(
    dragY,
    [-130, 0, 130],
    [0.35, 1, 0.35]
  );

  const currentBlur = useTransform(
    dragY,
    [-130, 0, 130],
    ["blur(3px)", "blur(0px)", "blur(3px)"]
  );

  const currentZ = useTransform(
    dragY,
    [-130, 0, 130],
    [-90, 85, -90]
  );

  const previousY = useTransform(
    dragY,
    [-130, 0, 130],
    [-34, -58, 0]
  );

  const previousRotateX = useTransform(
    dragY,
    [-130, 0, 130],
    [-74, -58, 0]
  );

  const previousScale = useTransform(
    dragY,
    [-130, 0, 130],
    [0.72, 0.82, 1]
  );

  const previousOpacity = useTransform(
    dragY,
    [-130, 0, 130],
    [0.08, 0.32, 1]
  );

  const previousBlur = useTransform(
    dragY,
    [-130, 0, 130],
    ["blur(7px)", "blur(3px)", "blur(0px)"]
  );

  const previousZ = useTransform(
    dragY,
    [-130, 0, 130],
    [-180, -120, 85]
  );

  const nextY = useTransform(
    dragY,
    [-130, 0, 130],
    [0, 58, 34]
  );

  const nextRotateX = useTransform(
    dragY,
    [-130, 0, 130],
    [0, 58, 74]
  );

  const nextScale = useTransform(
    dragY,
    [-130, 0, 130],
    [1, 0.82, 0.72]
  );

  const nextOpacity = useTransform(
    dragY,
    [-130, 0, 130],
    [1, 0.32, 0.08]
  );

  const nextBlur = useTransform(
    dragY,
    [-130, 0, 130],
    ["blur(0px)", "blur(3px)", "blur(7px)"]
  );

  const nextZ = useTransform(
    dragY,
    [-130, 0, 130],
    [85, -120, -180]
  );

  const previousIndex = getLoopedIndex(currentIndex - 1);
  const nextIndex = getLoopedIndex(currentIndex + 1);

  const previousItem = services[previousIndex];
  const currentItem = services[currentIndex];
  const nextItem = services[nextIndex];

  function goToNext() {
    if (isChanging) return;

    setIsChanging(true);

    dragY.set(-130);

    window.setTimeout(() => {
      setCurrentIndex((previous) =>
        getLoopedIndex(previous + 1)
      );

      dragY.set(0);
      setIsChanging(false);
    }, 260);
  }

  function goToPrevious() {
    if (isChanging) return;

    setIsChanging(true);

    dragY.set(130);

    window.setTimeout(() => {
      setCurrentIndex((previous) =>
        getLoopedIndex(previous - 1)
      );

      dragY.set(0);
      setIsChanging(false);
    }, 260);
  }

  function handleDragEnd(
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) {
    if (isChanging) return;

    const draggedUp =
      info.offset.y < -DRAG_DISTANCE ||
      info.velocity.y < -DRAG_VELOCITY;

    const draggedDown =
      info.offset.y > DRAG_DISTANCE ||
      info.velocity.y > DRAG_VELOCITY;

    if (draggedUp) {
      goToNext();
      return;
    }

    if (draggedDown) {
      goToPrevious();
      return;
    }

    dragY.set(0);
  }

  return (
    <section className="mt-3 w-full overflow-hidden">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-[21px] font-black tracking-[-0.04em] text-white">
          NASE GIVES YOU
        </h2>
      </div>

      <div
        className="relative h-[270px] w-full"
        style={{
          perspective: "1500px",
          perspectiveOrigin: "center",
        }}
      >
        <div
          className="relative h-full w-full"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
                    {/* Previous Card */}

          <motion.div
            className="absolute left-0 top-0 w-full"
            style={{
              y: previousY,
              rotateX: previousRotateX,
              scale: previousScale,
              opacity: previousOpacity,
              filter: previousBlur,
              z: previousZ,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="relative mx-auto h-[54px] w-[92%] overflow-hidden rounded-[26px]">
              <Image
                src={previousItem.image}
                alt={previousItem.title}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/45" />
            </div>
          </motion.div>

          {/* Current Card */}

          <motion.div
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.18}
            onDrag={(e, info) => {
              dragY.set(info.offset.y);
            }}
            onDragEnd={handleDragEnd}
            className="absolute left-0 top-1/2 z-30 w-full -translate-y-1/2 cursor-grab active:cursor-grabbing"
            style={{
              rotateX: currentRotateX,
              scale: currentScale,
              opacity: currentOpacity,
              filter: currentBlur,
              z: currentZ,
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="relative mx-auto h-[150px] w-[96%] overflow-hidden rounded-[30px]"
              style={{
                boxShadow:
                  "0 35px 90px rgba(0,0,0,.55)",
              }}
            >
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">

                <h3
                  className="
                    text-[24px]
                    font-black
                    uppercase
                    leading-[1]
                    tracking-[-0.04em]
                    text-white
                  "
                >
                  {currentItem.title}
                </h3>

                <p
                  className="
                    mt-2
                    max-w-[78%]
                    text-[13px]
                    leading-5
                    text-zinc-300
                  "
                >
                  {currentItem.description}
                </p>

              </div>

            </div>
          </motion.div>

          {/* Next Card */}

          <motion.div
            className="absolute bottom-0 left-0 w-full"
            style={{
              y: nextY,
              rotateX: nextRotateX,
              scale: nextScale,
              opacity: nextOpacity,
              filter: nextBlur,
              z: nextZ,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="relative mx-auto h-[54px] w-[92%] overflow-hidden rounded-[26px]">
              <Image
                src={nextItem.image}
                alt={nextItem.title}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/45" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}