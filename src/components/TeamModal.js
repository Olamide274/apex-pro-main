import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function TeamModal({ member, isOpen, onClose }) {
  // Close with ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);

    // Prevent background scroll
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.4 }}
          >
            <div
              className="bg-white max-w-3xl w-full rounded-2xl shadow-2xl p-8 relative overflow-y-auto max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                <FaTimes size={20} />
              </button>

              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 object-cover object-top rounded-full mx-auto mb-6 shadow-md"
              />

              {/* Content */}
              <h2 className="text-2xl font-bold text-primary text-center">
                {member.name}
              </h2>
              <p className="text-blue-600 text-center mb-6">{member.role}</p>

              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {member.fullBio}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
