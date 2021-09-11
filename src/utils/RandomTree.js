import tree01 from 'assets/tree01.png';
import tree02 from 'assets/tree02.png';
import tree03 from 'assets/tree03.png';
import tree04 from 'assets/tree04.png';
import tree05 from 'assets/tree05.png';
import tree06 from 'assets/tree06.png';
import tree07 from 'assets/tree07.png';
import tree08 from 'assets/tree08.png';

function getRndImgReplacmentTree() {
  const trees = [tree01, tree02, tree03, tree04, tree05, tree06, tree07, tree08];
  return trees[Math.floor(Math.random() * 8)];
}

export default getRndImgReplacmentTree;
