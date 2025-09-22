import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const TestComponent = () => {
  const [show, setShow] = useState(false);

  return (
    <>
    <div></div>
      <div className="flex items-center justify-center h-screen bg-blue-500">
        <h1 className="text-4xl font-bold text-white">
          Hello Tailwind + CRA 🚀
        </h1>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6 bg-blue-500 text-white text-xl rounded-lg"
        >
          <button onClick={() => setShow(!show)}>
            Xin chào với hiệu ứng 🚀
          </button>
        </motion.div>

        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-purple-500 text-white rounded-lg mt-4"
            >
              Modal với hiệu ứng 🎉
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Fade In/Out
        </motion.div>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          exit={{ x: 100 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          Slide In từ trái
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Scale lên
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          🔄 Xoay vòng
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          Hover & Tap
        </motion.button>
      </div>
    </>
  );
};

export default TestComponent;
