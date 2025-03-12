import { TextGenerateEffect } from "../components/ui/TextGenerateEffect";

const Home = () => {
  return (
    <div className="  ">
      <div
        className={`absolute inset-0 flex items-end justify-center mb-20 z-20 ${
          location.pathname.includes("projects") ? "!hidden" : ""
        }`}
      >
        <TextGenerateEffect
          words="The best way to predict the future is to design it"
          className="font-bold text-white text-3xl  pl-10  "
        />
      </div>
    </div>
  );
};

export default Home;
