import { FaFacebook, FaGithub, FaPhoneSquareAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
const HeaderComponent = () => {
  return (
    <div className="bg-gray-500 text-white p-8 rounded-t-2xl">
      {/* Grid responsive */}
      <div className="flex flex-col md:grid md:grid-cols-12 md:items-center gap-6">
        {/* Avatar + info */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 col-span-8 text-center sm:text-left">
          <img
            src="/anh_the/anh_the_3x4.g"
            alt="Avatar"
            className="w-40 h-40 rounded-full border-4 border-white shadow-md object-cover object-top mb-4 sm:mb-0"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Nguyễn Đức Vĩnh</h1>
            <p className="text-base md:text-lg opacity-90 mt-2">
              JAVA WEB FULLSTACK DEVELOPER
            </p>
            <hr className="my-2" />
            <p className="text-sm opacity-80">Male</p>
            <p className="text-sm opacity-80">12-05-2003</p>
            <p className="text-sm opacity-80">Đồng Hới - Quảng Bình</p>
          </div>
        </div>

        {/* Contact info */}
        <div className="col-span-4 flex justify-center md:justify-start">
          <div className="flex flex-col text-center md:text-left items-center md:items-start">
            <div className=" space-y-3">
              <a
                href="https://github.com/vinhnd03"
                target="_blank"
                className="flex items-center space-x-3 hover:text-yellow-300"
              >
                <FaGithub className="h-6 w-6" />
                <span>vinhnd03</span>
              </a>

              <a
                href="https://facebook.com/ducvinhmycanh"
                target="_blank"
                className="flex items-center space-x-3 hover:text-yellow-300"
              >
                <FaFacebook className="h-6 w-6" />
                <span>Nguyễn Đức Vĩnh</span>
              </a>

              <div className="flex items-center space-x-3">
                <FaPhoneSquareAlt className="h-6 w-6" />
                <span>039 681 5964</span>
              </div>

              <div className="flex items-center space-x-3">
                <IoMail className="h-6 w-6" />
                <span>Ducvinhmycanh@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
