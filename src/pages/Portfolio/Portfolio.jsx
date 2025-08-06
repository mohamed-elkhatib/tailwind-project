import React, { useState } from "react";
import styles from "./Portfolio.module.css";
const images = Object.values(
  import.meta.glob("../../assets/portfolioImages/*", {
    eager: true,
    import: "default",
  })
);

export default function Portfolio() {
  const [openModal, setOpenModal] = useState(false);
  const [modelImage, setModelImage] = useState(null);

  function handleClick(e) {
    setOpenModal(true);
    setModelImage(e.target.getAttribute("src"));
  }
  return (
    <>
      <section className="min-h-screen pt-28 ">
        <div className="container">
          <div className="header text-center text-primary mb-10">
            <h2 className="mb-5 text-5xl">portfolio component</h2>
            <span className={`${styles.starIcon} relative mb-5`}>
              <i class="fa-solid fa-star  "></i>
            </span>
          </div>
          <div className="items">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
              {images.map((image, index) => (
                <div className="col-span-1 relative group" key={index}>
                  <div className="card rounded-xl">
                    <img
                      onClick={(e) => {
                        handleClick(e);
                      }}
                      className=" rounded-xl cursor-pointer"
                      src={image}
                      alt=""
                    />
                  </div>
                  <div className="layer absolute top-0 bottom-0 start-0 end-0 bg-secondary pointer-events-none rounded-xl opacity-0   group-hover:opacity-75 transition-all duration-400 ease-in flex justify-center items-center ">
                    <i class="text-white fa-solid fa-plus  text-8xl"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {openModal && (
          <>
            <div  className="fixed inset-0 bg-sky-500 opacity-75 z-30"></div>
            <div onClick={()=>setOpenModal(false)} className="fixed inset-0 z-40 flex justify-center items-center ">
              <img className="w-1/2 " src={modelImage} alt="" />
            </div>
          </>
        )}
      </section>
    </>
  );
}
