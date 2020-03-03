import textData from '../helpers/data/textData';
import utilities from '../helpers/utilities';

const displayText = () => {
  let domString = '';
  const myText = textData.getText();
  domString += `<p>${myText}</p>`;
  utilities.printToDom('show-container', domString);
};

export default { displayText };
