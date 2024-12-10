import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Next, Prev } from "../Redux/nextSlice";
import "./Project.scss";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import {My_Project} from '../constants'

const Project = () => {
  const index = useSelector((state) => state.next.slideIndex);
  const dispatch = useDispatch();

  // const My_Project = [
  //   {
  //     title: "Machu Picchu",
  //     description: "Adventure is never far away",
  //     image:
  //       "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80",
  //   },
  //   {
  //     title: "Chamonix",
  //     description: "Let your dreams come true",
  //     image:
  //       "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80",
  //   },
  //   {
  //     title: "Machu Picchu",
  //     description: "Adventure is never far away",
  //     image:
  //       "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80",
  //   },
  //   {
  //     title: "Chamonix",
  //     description: "Let your dreams come true",
  //     image:
  //       "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80",
  //   },
  //   {
  //     title: "Machu Picchu",
  //     description: "Adventure is never far away",
  //     image:
  //       "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80",
  //   },
  //   {
  //     title: "Chamonix",
  //     description: "Let your dreams come true",
  //     image:
  //       "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80",
  //   },
  //   {
  //     title: "Santorini",
  //     description: "Experience the beauty of Greece",
  //     image:
  //       "https://images.unsplash.com/photo-1565517221624-325c36f2bb9b?ixlib=rb-1.2.1&q=80",
  //   },

  // ];



  const visibleSlides = 3;

  const handleNext = () => {
    dispatch(Next(My_Project.length));
  };

  const handlePrev = () => {
    dispatch(Prev(My_Project.length));
  };

  return (

    <div >




<div className="ps-12">
        <h2 className={`${styles.sectionHeadText} sectionSubText`}>
          My Projects
      </h2>
      </div>
<div className="slides ">
<button onClick={handlePrev} className="arrow-btn">
        <BsArrowLeftShort className="text-6xl text-gray-500" />
</button>
  {
  [...Array(3)].map((_ ,offset)=>{
    const index1 = (index + offset ) % My_Project.length;
    const item = My_Project[index1];

    return (
      <div key={index1}  className={`card orange-text-gradient `}>
        <img src={item.image} alt={item.title} />
            <div className="text-center mt-2 pb-9">
              <h1 className="text-xl font-bold">{item.title}</h1>
              <p className="text-white w-[30vw]  mt-5">{item.description}</p>
        </div>
      </div>
    )

  })
}
<button onClick={handleNext} className="arrow-btn">
        <BsArrowRightShort className="text-6xl text-gray-500" />
</button>
</div>






      {/* <div
        className="carousel-wrapper flex transition ease-out duration-700 h-96"
        style={{
          transform: `translateX(-${index * (100 / visibleSlides)}%)`,
          width: `${(My_Project.length / visibleSlides) * 100}%`,
        }}
      > */}
        {/* {My_Project.map((item, idx) => (
          <div
          className={`card flex-shrink-0 w-1/3 px-2 h-80 ${
            idx-1 === index ? "active" : "inactive"
          }`}
            key={idx}
          >
            <img src={item.image} alt={item.title} className="h-52 w-full rounded-lg" />
            <div className="text-center mt-2">
              <h1 className="text-xl font-bold">{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>

  );
};

export default Project;
