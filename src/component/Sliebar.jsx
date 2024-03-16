import { Carousel } from "@material-tailwind/react";
 
export function GalleryWithCarousel() {
  return (
    <Carousel loop={true} autoplay={true} className="">
      <img
        src="/logo/slie1.png"
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
      <img
        src="/logo/slie2.png"
        alt="image 2"
        className="h-full w-full object-cover object-center"
      />
      <img
      src="/logo/slie3.png"
        alt="image 3"
        className="h-full w-full object-cover object-center"
      />
    </Carousel>
  );}
