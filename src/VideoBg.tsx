import { useLocation } from "react-router-dom";

const VideoBg = () => {
  const location = useLocation();
  const showVideoBg = location.pathname !== "/projects";

  return (
    showVideoBg && (
      <div className="absolute inset-0 -z-10 flex items-end">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/src/assets/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    )
  );
};

export default VideoBg;
