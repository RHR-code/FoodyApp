"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";

// import { IoArrowUpCircle } from "react-icons/io5";

const Banner = () => {
  return (
    <div>
      <Carousel autoPlay={true} infiniteLoop={true}>
        <div className="relative  h-[600px]">
          <div className="absolute w-full h-full bg-black/20 inset-0 text-blue-700 z-10"></div>
          <Image
            src="/jason-leung-poI7DelFiVA-unsplash.jpg"
            fill
            className="object-cover"
            alt="restaurant"
          />
          <h1 className="absolute top-30 left-22 font-bold text-5xl text-start text-white leading-tight z-20">
            Welcome <br /> To Our Website
          </h1>
          <p className="absolute md:top-64 md:left-23 text-left max-w-2xl text-white hidden z-20 md:flex">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
          <Link
            href="/allFoods"
            className="btn z-20 btn-primary rounded-full absolute md:top-82  md:left-23 left-5 text-white bottom-0 text-sm"
          >
            All Foods
          </Link>

          <Link
            href="/addFoods"
            className="btn z-20 btn-primary  rounded-full absolute md:top-82 bottom-0  md:left-50 left-54 text-white"
          >
            Add Foods
          </Link>
        </div>
        <div className="relative  h-[600px]">
          <Image
            src="/jay-wennington-N_Y88TWmGwA-unsplash.jpg"
            fill
            className="object-cover"
            alt="restaurant"
          />
        </div>
        <div className="relative  h-[600px]">
          <Image
            src="/louis-hansel-wVoP_Q2Bg_A-unsplash (1).jpg"
            fill
            className="object-cover"
            alt="restaurant"
          />
        </div>
        <div className="relative  h-[600px]">
          <Image
            src="/patrick-tomasso-GXXYkSwndP4-unsplash.jpg"
            fill
            className="object-cover"
            alt="restaurant"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
