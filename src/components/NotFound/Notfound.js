import warnTree from 'assets/warn-tree.png';

function NotFound() {
  return (
    <div className="flex justify-center items-center bg-yellow-900 py-10 ">
      <img src={warnTree} alt="error" />
      <div className="px-3">
        Sorry, We couldnt find the trees
      </div>
    </div>
  );
}

export default NotFound;
