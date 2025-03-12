import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    images: string[];
    videos: string[];
  };
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-40 bg-opacity-50 pointer-events-auto">
      <div className="bg-[linear-gradient(to_bottom,_#5c715e,_#5d6946,_#a7b188)] rounded-lg w-screen h-screen relative">
        <button
          className="absolute top-3 left-3 text-black font-bold text-xl z-50"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="flex flex-col sm:flex-row w-full h-screen  overflow-hidden">
          <div className="flex-1 space-y-4 ">
            {project.videos.length > 0 && (
              <div className="grid  border-white bg-white rounded-lg shadow-lg opacity-70 shadow-cyan-50/40 ml-50  mb-10 mt-10 overflow-hidden ">
                {project.videos.map((video, index) => (
                  <video
                    key={index}
                    className={`${
                      project.videos.length === 1
                        ? "w-screen max-h-full"
                        : "w-[48%] sm:w-[45%] md:w-[30%]"
                    } h-full rounded-lg pointer-events-none`}
                    controls
                    autoPlay
                    loop
                    muted
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ))}
              </div>
            )}

            {project.images.length > 0 && (
              <div className="flex flex-wrap gap-6 pt-20 p-15 border-2 border-white bg-white rounded-lg shadow-lg opacity-70 shadow-cyan-50/40 items-center mr-30 ml-[-100] mb-10 mt-10">
                {project.images.map((image, index) => (
                  <img
                    key={index}
                    className=" md:w-[80%] lg:w-[100%] h-auto rounded-lg"
                    src={image}
                    alt={`project image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="flex-1  overflow-auto p-10 pb-15 border-2 border-white bg-white rounded-lg shadow-lg opacity-70 shadow-cyan-50/40  items-center mr-30 ml-[-100] mb-7 mt-10 ">
            <h2 className="text-3xl font-semibold pb-10">{project.title}</h2>
            <p className="text-lg">{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
