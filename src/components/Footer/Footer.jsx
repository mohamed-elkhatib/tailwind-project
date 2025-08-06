

export default function Footer() {
  return (
    <>
      <footer className="bg-primary py-16 text-white ">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <div className="col-span-1 text-center p-4  ">
              <h2 className="mb-3">location</h2>
              <p className="mb-3">2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-span-1 text-center p-4 ">
              <h2 className="mb-3">AROUND THE WEB</h2>
              <div className="icon">
                <ul className="flex justify-center gap-3">
                  <li>
                    <a
                      href=""
                      className="flex justify-center items-center border rounded-full w-12 h-12"
                    >
                      <i class="fa-brands fa-facebook text-xl"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="flex justify-center items-center border rounded-full w-12 h-12"
                    >
                      <i class="fa-brands fa-twitter text-xl"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="flex justify-center items-center border rounded-full w-12 h-12"
                    >
                      <i class="fa-brands fa-linkedin text-xl"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="flex justify-center items-center border rounded-full w-12 h-12"
                    >
                      <i class="fa-solid fa-globe text-xl"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-1 text-center p-4 ">
              <h2 className="mb-3">ABOUT FREELANCER</h2>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright py-4 flex justify-center items-center bg-footerColor text-white">
        <p className=" ">Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
