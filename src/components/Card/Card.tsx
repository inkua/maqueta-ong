const Card = ({ titulo, texto }) => {
  return (
    <div className="card bg-secondary border border-0 text-white">
      <div className="card-body" id='card-body'>
        <h2 className="card-title text-center py-3">{titulo}</h2>
        <p className="card-text py-4 text-start p-5">{texto}</p>
      </div>
    </div>
  );
};

export default Card;
