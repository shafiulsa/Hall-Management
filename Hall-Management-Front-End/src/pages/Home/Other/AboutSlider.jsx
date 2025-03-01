import { useState } from "react";

const images = [
  "/public/slid1.jpeg",
  "/public/slid2.jpg",
  "/public/slid 3.jpeg",
  "/public/slid 4.jpeg",
];

const AboutSlider = () => {


  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    // <div className="max-w-7xl mx-auto">
    //   <div className="flex justify-center items-center p-10 ">
    //     <h1 className="text-5xl">Photo Gallery</h1>
    //   </div>
    //   <div className="carousel w-fit h-[500px]">
    //     <div id="slide1" className="carousel-item relative w-full">
    //       <img
    //         src="../../../../public/slid1.jpeg"
    //         className="w-full" />
    //       <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
    //         <a href="#slide4" className="btn btn-circle">❮</a>
    //         <a href="#slide2" className="btn btn-circle">❯</a>
    //       </div>
    //     </div>
    //     <div id="slide2" className="carousel-item relative w-full">
    //       <img
    //         src="../../../../public/slid2.jpg"
    //         className="w-full" />
    //       <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
    //         <a href="#slide1" className="btn btn-circle">❮</a>
    //         <a href="#slide3" className="btn btn-circle">❯</a>
    //       </div>
    //     </div>
    //     <div id="slide3" className="carousel-item relative w-full">
    //       <img
    //         src="../../../../public/slid 3.jpeg"
    //         className="w-full" />
    //       <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
    //         <a href="#slide2" className="btn btn-circle">❮</a>
    //         <a href="#slide4" className="btn btn-circle">❯</a>
    //       </div>
    //     </div>
    //     <div id="slide4" className="carousel-item relative w-full">
    //       <img
    //         src="../../../../public/slid 4.jpeg"
    //         className="w-full" />
    //       <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
    //         <a href="#slide3" className="btn btn-circle">❮</a>
    //         <a href="#slide1" className="btn btn-circle">❯</a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-center items-center p-10">
        <h1 className="text-5xl">Photo Gallery</h1>
      </div>
      <div className="relative w-full h-[600px] overflow-hidden">
        {/* Image */}
        <img src={images[currentIndex]} className="w-full h-full object-cover transition-opacity duration-500" />

        {/* Navigation Buttons */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button onClick={prevSlide} className="btn btn-circle">❮</button>
          <button onClick={nextSlide} className="btn btn-circle">❯</button>
        </div>
      </div>
    </div>

  );
};

export default AboutSlider;