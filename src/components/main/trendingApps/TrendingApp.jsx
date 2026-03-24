import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";


const TrendingApp = ({ app }) => {
  const { image, title, downloads, ratingAvg } = app;
  

  return (
    <Link to={`/app-details/${app.id}`}>
      <div className="p-5 bg-base-100 rounded-lg shadow-sm hover:shadow-2xl flex flex-col justify-between h-full">
        {/* <div className="rounded-lg h-40 "> */}
        <img
          className="rounded-lg h-52 w-full  object-cover"
          src={image}
          alt=""
        />
        {/* </div> */}
        <h4 className="text-wrap font-medium my-3 grow">{title}</h4>
        <span className="flex justify-between items-center">
          <small className="flex justify-center items-center gap-2 text-emerald-500 bg-emerald-50 py-1 px-2 rounded-lg font-semibold">
            <MdOutlineFileDownload />
            {downloads / 1000000}M
          </small>

          <small className="flex justify-center items-center gap-2 text-amber-500 bg-amber-50 py-1 px-2 rounded-lg font-semibold">
            <FaStar />
            {ratingAvg}
          </small>
        </span>
      </div>
    </Link>
  );
};

export default TrendingApp;
