import PropTypes from "prop-types";

export default function Card({ value }) {
  const { name, image, description } = value;
  return (
    <div>
      <div className="card bg-white w-64 h-5/6 border-2 border-solid border-black rounded-md  ">
        <div className="image p-2">
          <img src={image} alt="" className="w-full h-40" />

          <h2 className="font-bold py-2 text-xl">{name}</h2>
          <p className="text-justify">{description}</p>
          <button className=" border-2 border-solid border-black rounded-md p-1 my-4">
            Click Here ➡️
          </button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  value: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
