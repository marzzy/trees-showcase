import PropTypes from 'prop-types';
import './Error.css';

function Error(props) {
  const { msg } = props;

  return (
    <div className="flex justify-center align-center bg-red-900 py-10">
      <i className="warning-icon" />
      <div className="px-3">
        Oops!
        <br />
        {msg}
      </div>
    </div>
  );
}

Error.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Error;
