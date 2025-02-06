import VideoBg from "./VideoBg";
import "./index.css";

const App = () => {
  return (
    <div className="flex w-full h-screen">
      <div>
        <div className=" w-full h-full">
          <div className=" z-0">
            {" "}
            <VideoBg />
          </div>
          <div className="absolute inset-0 flex items-end justify-start z-10  ">
            <h1 className=" font-bold  absolute text-transparent-outline text-3xl bottom-20 pl-10">
              The best way to predict the future is to design it
            </h1>
          </div>
        </div>
      </div>

      <div className="content w-1/2 ">
        <h1 className=""> shshs</h1>
      </div>
    </div>
  );
};

export default App;
