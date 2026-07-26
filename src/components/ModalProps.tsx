import React, { useEffect } from "react";
import { X } from "lucide-react";

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
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-deep/85 p-0 sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative flex h-full max-h-full w-full max-w-6xl flex-col overflow-y-auto bg-background sm:h-auto sm:max-h-[92vh] lg:flex-row lg:overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="fixed right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-deep/70 text-white transition-opacity hover:opacity-70 sm:absolute sm:right-5 sm:top-5 sm:bg-transparent sm:mix-blend-difference"
          onClick={onClose}
          aria-label="Mbyll"
        >
          <X size={22} strokeWidth={1.4} />
        </button>

        <div className="flex-1 space-y-2 bg-paper lg:max-h-[92vh] lg:overflow-y-auto">
          {project.videos.map((video, index) => (
            <video
              key={`v-${index}`}
              className="w-full object-cover"
              controls
              playsInline
              preload="metadata"
            >
              <source src={video} type="video/mp4" />
            </video>
          ))}
          {project.images.map((image, index) => (
            <img
              key={`i-${index}`}
              className="w-full object-cover"
              src={image}
              alt={`${project.title} ${index + 1}`}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>

        <div className="flex-1 p-6 pb-16 sm:p-8 lg:max-h-[92vh] lg:overflow-y-auto lg:p-14">
          <p className="mb-5 text-[11px] tracking-[0.25em] text-stone sm:mb-6">
            PROJEKT
          </p>
          <h2
            id="project-modal-title"
            className="text-[19px] font-light leading-tight tracking-[0.06em] text-ink sm:text-[24px]"
          >
            {project.title}
          </h2>
          <p className="mt-6 text-[14px] leading-[1.85] text-ink/70 sm:mt-7 sm:text-justify">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
