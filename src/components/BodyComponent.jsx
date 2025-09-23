import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {} from "react-icons/fa";
import { FiX } from "react-icons/fi";

const BodyComponent = ({ educations, projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="col-span-3 md:col-span-2">
      <section>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Professional Summary</h2>
            <p className="mt-2 text-sm text-gray-600 text-justify">
              I am Nguyễn Đức Vĩnh, a dedicated and detail-oriented software
              developer with a solid background in Java programming. I graduated
              with an Associate’s Degree in Software Applications from FPT
              Polytechnic College, specializing in Java-based development. I
              further strengthened my practical expertise by completing an
              intensive training program at CodeGym Center. I am passionate
              about creating efficient and scalable web applications and eager
              to contribute my technical skills and problem-solving abilities to
              real-world projects as a full-stack developer.
            </p>
          </div>
          {/* <div className="hidden md:block">
                  <a
                    className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700"
                    href="#"
                  >
                    Download CV
                  </a>
                </div> */}
        </div>
      </section>

      <section className="mt-6">
        <h3 className="text-md font-semibold">Education</h3>
        {educations.map((e) => (
          <div className="mt-3 p-4 border rounded-lg bg-gray-50" key={e}>
            <div className="flex justify-between items-start">
              <div>
                <div className="font-semibold">{e.major}</div>
                <div className="text-xs text-gray-500">{e.school}</div>
              </div>
              <div className="text-xs text-gray-400">{e.year}</div>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-6">
        <h3 className="text-md font-semibold">Projects</h3>
        {/* <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4"> */}
        <div className="mt-3 gap-4">
          {projects.map((p) => (
            <div
              key={p.title}
              className="p-4 rounded-lg border bg-white shadow-sm mt-3 hover:border-blue-400"
              onClick={() => setSelectedProject(p)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-xs text-gray-500">{p.desc}</div>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 border rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-11/12 md:w-3/4 lg:w-2/3 relative max-h-[90vh] overflow-y-auto shadow-xl">
            {/* HEADER */}
            <div className="flex justify-between items-center border-b px-6 py-4">
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              <button
                className="text-gray-600 hover:text-black"
                onClick={() => setSelectedProject(null)}
              >
                <FiX className="text-red-500 h-6 w-6"/>
              </button>
            </div>

            {/* BODY */}
            <div className="grid grid-cols-10 gap-6 px-6 py-4">
              {/* Left side: Info + Tasks */}
              <div className="col-span-10 md:col-span-4">
                <p className="text-sm text-justify text-gray-600">
                  {selectedProject.desc}
                </p>

                <div className="mt-3 text-sm space-y-1">
                  <p>
                    <span className="font-semibold">Duration:</span>{" "}
                    {selectedProject.date}
                  </p>
                  <p>
                    <span className="font-semibold">Role:</span>{" "}
                    {selectedProject.role}
                  </p>
                  {selectedProject.link && (
                    <p>
                      <span className="font-semibold">Link:</span>{" "}
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline block max-w[w-full] truncate whitespace-nowrap overflow-hidden text-ellipsi"
                      >
                        {selectedProject.link}
                      </a>
                    </p>
                  )}
                </div>

                {/* Tasks */}
                <div className="mt-4">
                  <h3 className="font-semibold text-sm mb-2">Tasks</h3>
                  <div className="space-y-2">
                    {selectedProject.tasks.map((task, idx) => (
                      <div className="flex items-center space-x-2" key={idx}>
                        <span className="text-indigo-500">✦</span>
                        <p className="text-xs text-gray-700 text-justify leading-relaxed">
                          {task}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right side: Swiper */}
              <div className="col-span-10 md:col-span-6">
                <div className="flex flex-col items-center">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true} 
                    className="w-full"
                  >
                    {selectedProject.images?.map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="flex justify-center"
                        onClick={() => setSelectedImage(img)}>
                          <img
                            src={img}
                            alt=""
                            className="w-full h-72 object-contain rounded-lg border"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {selectedImage && (
                    <div
                      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                      onClick={() => setSelectedImage(null)}
                    >
                      <div
                        className="relative max-w-7xl w-full p-4 flex justify-center"
                      >
                        <img
                          src={selectedImage}
                          alt="Detail"
                          className="w-auto max-h-[90vh] object-contain rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  )}
                </div>
                {/* FOOTER */}
                <div className="border-t px-6 py-4">
                  <h3 className="font-semibold text-sm mb-2">Technologies:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 border rounded bg-gray-100"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <footer className="mt-8 text-sm text-gray-500">
              <div>
                Available for remote or on-site positions. References available
                upon request.
              </div>
            </footer> */}
    </main>
  );
};

export default BodyComponent;
