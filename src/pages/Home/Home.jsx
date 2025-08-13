
import avater from "../../assets/avataaars.svg";
import "./Home.css"
export default function Home() {
  return (
    <section className="min-h-screen pt-28 bg-secondary text-white">
      <div className="container">
        <main className=" flex flex-col text-center justify-center items-center  p-10">
            <img className="mb-5 w-1/4 " src={avater} alt="" />
            <h2 className="mb-5 text-5xl">start Framework</h2>
            <span className="star-icon relative mb-5">
              <i class="fa-solid fa-star  "></i>
            </span>
            <p className="text-white text-xl">
              Graphic Artist - Web Designer - Illustrator
            </p>
        </main>
      </div>
    </section>
  );
}
