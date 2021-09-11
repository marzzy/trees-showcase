import PropTypes from 'prop-types';
import { useState } from 'react';
import './Card.css';

function Card(props) {
  const { name, speciesName, imageSrc } = props;
  const [showImg, setShowImage] = useState(false);

  function toggleShowImage() {
    setShowImage(!showImg);
  }

  return (
    <div className="p-4 flex flex-col items-center border-solid border-4 border-green-200 m-4 lg:w-1/4">
      <h2 className="text-3xl font-bold">
        {name}
      </h2>
      <p>{speciesName}</p>
      {showImg ? (
        <img
          className="w-60 h-60 rounded-full my-4 bg-gray-600 img-animation"
          data-testid="card-image"
          loading="lazy"
          src={imageSrc}
          alt={name}
        />
      ) : (
        <div
          className="w-60 h-60 rounded-full my-4 text-8xl flex items-center justify-center bg-gray-600 img-animation"
          data-testid="card-image-replacement"
        >
          ?
        </div>
      )}
      <button
        type="button"
        className="bg-green-200 p-4 text-gray-600 hover:bg-gray-600 hover:text-green-200"
        onClick={toggleShowImage}
      >
        {showImg ? 'Hide' : 'Show'}
        {' '}
        Image
      </button>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  speciesName: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default Card;
