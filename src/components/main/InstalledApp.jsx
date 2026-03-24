import { FaStar } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

const InstalledApp = ({ app, handleInstallation }) => {
  const { image, title, downloads, size, ratingAvg, id } = app;

  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center bg-base-100 p-5 rounded-lg">
      <div className="flex gap-5 justify-start items-center">
        <div>
          <img
            className="rounded-lg "
            width={90}
            height={90}
            src={image}
            alt=""
          />
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-medium text-wrap">{title}</h4>
          <div className="flex gap-5">
            <p className="flex justify-center items-center gap-1 text-emerald-500 font-semibold">
              <MdOutlineFileDownload />
              {downloads / 1000000}M
            </p>
            <p className="flex justify-center items-center gap-1 text-amber-500 font-semibold">
              <FaStar /> {ratingAvg}
            </p>
            <p className="opacity-50 font-medium">{size} MB</p>
          </div>
        </div>
      </div>

      <button
        onClick={() => handleInstallation(id)}
        className="btn bg-emerald-400 text-white"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledApp;
