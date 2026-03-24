

const State = ({ state }) => {
  const { title, count, description } = state;
  return (
    <div>
      <p className="opacity-70">
        <small>{title}</small>
      </p>
      <h2 className="text-4xl font-bold my-1">{count}</h2>
      <p className="opacity-70">
        <small>{description}</small>
      </p>
    </div>
  );
};

export default State;
