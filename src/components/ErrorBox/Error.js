import PropTypes from 'prop-types';
import errorTree from 'assets/error-tree.png';

function Error(props) {
  const { msg } = props;

  return (
    <div className="flex justify-center items-center bg-red-900 py-10">
      <img src={errorTree} alt="error" />
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
