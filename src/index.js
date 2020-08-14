import myName from './myName';
// other method for importing:
// import {myname} from './myName'

function component() {
  var element = document.createElement('div');

  // use your function!
  element.innerHTML = myName('Cody');
  return element;
}

document.body.appendChild(component());








/* ES6 Modules -- Import and Export example  */

// ----------- To Export ----------------//
// const functionOne = () => 'ONE'
// const functionTwo = () => 'TWO'

// export {
//   functionOne,
//   functionTwo
// }

// ------------To import ----------------//
// import {functionOne, functionTwo} from './myModule'