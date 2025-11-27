"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";

// import { IoArrowUpCircle } from "react-icons/io5";

const Banner = () => {
  return (
    <div>
      <Carousel autoPlay={false} showThumbs={false} infiniteLoop={true}>
        <div className="relative  md:h-[600px] h-[400px]">
          <div className="absolute lg:w-1/2 h-full bg-black/70 inset-0 text-blue-700 z-10"></div>
          <Image
            src="/jason-leung-poI7DelFiVA-unsplash.jpg"
            fill
            className="object-cover"
            alt="restaurant"
          />
          <h1 className="absolute md:top-30 left-[50%] w-full -translate-x-[50%] md:translate-x-[0] top-10 md:left-22 font-bold md:text-5xl text-4xl  md:text-start text-white leading-tight z-20">
            Welcome <br /> To Our Website
          </h1>
          <p className="absolute md:top-64 top-40 left-0 text-center md:left-23 md:text-left max-w-2xl  text-white z-20 md:flex px-5 md:px-0">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. <br className="hidden md:flex" /> From personal
            packages to business shipments — we deliver on time, every time.
          </p>
          <Link
            href="/allFoods"
            className="btn z-20 btn-primary rounded-full absolute md:top-82  md:left-23 left-20 text-white bottom-16 text-sm"
          >
            All Foods
          </Link>

          <Link
            href="/addFoods"
            className="btn z-20 btn-primary  rounded-full absolute md:top-82 bottom-16  md:left-50 left-50 text-white"
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
