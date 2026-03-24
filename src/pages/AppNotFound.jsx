import { useNavigate } from "react-router";
import img from "../assets/App-Error.png";


const AppNotFound = () => {
  const navigate = useNavigate();

  const info = {
      title: "OOPS!! APP NOT FOUND",
      description:
        "The App you are requesting is not found on our system. Please try another apps.",
      image: img,
      };

  return (
    <div className="w-11/12 mx-auto flex flex-col justify-center items-center gap-3 text-center">
      <div>
        <img src={info.image} alt="" />
      </div>
      <h1 className="text-4xl font-bold">{info.title}</h1>
      <p className="opacity-70">{info.description}</p>
      <button
        onClick={() => navigate(-1)}
        className="btn bg-linear-to-br from-violet-800 to-violet-400 text-white"
      >
        Go Back!
      </button>
    </div>
  );
};

export default AppNotFound;
