import State from "./State";

const States = () => {
  const states = [
    {
      id: 1,
      title: "Total Downloads",
      count: "29.6M",
      description: "21% More Than Last Month",
    },
    {
      id: 2,
      title: "Total Reviews",
      count: "906M",
      description: "46% More Than Last Month",
    },
    {
      id: 3,
      title: "Active Apps",
      count: "132+",
      description: "31 More Will Launch",
    },
  ];

  return (
    <div className=" bg-linear-to-br from-violet-800 to-violet-400 -translate-y-4">
      <div className="w-11/12 mx-auto text-white text-center py-10">
        <h2 className="text-3xl mb-8 font-bold">
          Trusted By Millions, Built For You
        </h2>
        <div className="flex flex-wrap justify-around items-center gap-6 md:gap-0">
          {states.map((state) => (
            <State key={state.id} state={state} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default States;
