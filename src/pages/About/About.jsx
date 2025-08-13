

export default function About() {
  return (
    <section className="h-screen pt-28 bg-secondary text-white text-center flex justify-center items-center flex-col">
      <div className="container">
        <div className="header mb-3">
          <h2 className="mb-5 text-5xl">about component</h2>
          <span className="star-icon relative mb-5">
            <i class="fa-solid fa-star  "></i>
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-10 px-20 text-start text-lg">
          <div className="md:col-span-1">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </div>
          <div className="md:col-span-1">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </div>
        </div>
      </div>
    </section>
  );
}
