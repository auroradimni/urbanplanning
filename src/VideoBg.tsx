const VideoBg = () => {
  return (
    <div className="">
      <video
        className="w-full h-full shadow-[200px_2px_150px_rgba(106,122,90,1)]"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/src/assets/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBg;
