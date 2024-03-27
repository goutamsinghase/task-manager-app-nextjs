const Card = ({ taskNo, bgColor, onClick }) => {
  return (
    <div
      className={`mt-1 block p-6 max-w-sm rounded-lg border border-gray-200 pointer-events-auto cursor-pointer ${bgColor}`}
      onClick={onClick}
      aria-hidden={true}
    >
      <p>Task {taskNo}</p>
    </div>
  );
};

export default Card;
