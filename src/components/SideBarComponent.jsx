import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SideBarComponent = ({ skills, certificates }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <aside className="col-span-3 md:col-span-1">
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <div className="w-full">
          <div className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1">
            Skills
          </div>
          <ul className="mt-4 space-y-3 text-sm text-gray-700">
            {skills.map((s) => (
              <li className="flex items-start space-x-2">
                <span key={s} className="text-indigo-500">
                  ✦
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 w-full">
          <div className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1">
            Languages
          </div>
          <ul className="mt-4 space-y-3 text-sm text-gray-700">
            <li className="flex items-start space-x-2">
              <span className="text-indigo-500">✦</span>
              <span>Vietnamese (Native)</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-indigo-500">✦</span>
              <span>English (TOEIC 835)</span>
            </li>
          </ul>

          {/* Chứng chỉ */}
          <div className="mt-6 text-lg font-bold text-gray-800 border-b border-gray-300 pb-1">
            Certificates
          </div>
          <div className="mt-4 space-y-4 text-sm text-gray-700">
            {certificates.map((c) => (
              <div
                key={c}
                className="border-2 border-transparent hover:border-x-blue-400 p-1 rounded-md"
                onClick={() => setSelectedImage(c.src)}
              >
                <div className="text-gray-500 text-xs font-medium">
                  {c.year}
                </div>
                <div className="font-semibold text-gray-800">
                  {c.issuingAuthority}
                </div>
                <div className="text-gray-600">{c.name}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-lg font-bold text-gray-800 border-b border-gray-300 pb-1"></div>
          {/* Slider hiển thị hình ảnh chứng chỉ */}
          <div className="mt-4">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              navigation
              className="w-full h-64"
            >
              {certificates.map((c, index) => (
                <SwiperSlide key={index}>
                  <div
                    onClick={() => setSelectedImage(c.src)}
                    className="relative bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    <img
                      src={c.src}
                      alt={`Certificate ${index + 1}`}
                      className="w-full h-56 object-contain bg-gray-100"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-white text-gray-600 text-center text-sm font-medium py-1">
                      {c.name}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl w-full p-4 flex justify-center">
            <img
              src={selectedImage}
              alt="Detail"
              className="w-auto max-h-[90vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
      <div className=" flex justify-center md:justify-start">
        <a
          href="/cv.pdf" // 👉 thay đường dẫn file CV thật của bạn
          download
          className="inline-block px-4 py-2 text-center w-full bg-indigo-600 text-white text-sm font-medium rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Download CV
        </a>
      </div>
    </aside>
  );
};

export default SideBarComponent;
