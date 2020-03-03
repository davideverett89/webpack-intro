import utilities from '../helpers/utilities';
import textData from '../helpers/data/textData';
import display from './display';

const submitForm = (e) => {
  e.preventDefault();
  const myText = $('#form-text').val();
  textData.setText(myText);
  display.displayText();
};

const displayForm = () => {
  console.error('wat 1');
  let domString = '';
  domString += '<form>';
  domString += '<div class="form-group">';
  domString += '<label for="form-text">Password</label>';
  domString += '<input type="text" class="form-control" id="form-text" placeholder="whatever">';
  domString += '</div>';
  domString += '</form>';
  domString += '<button id="submit-button" type="submit" class="btn btn-primary">Submit</button>';
  utilities.printToDom('form-container', domString);
  $('#submit-button').click(submitForm);
};

export default { displayForm };
