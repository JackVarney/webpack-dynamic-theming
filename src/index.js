import './index.css';

const getButton = buttonName => document.querySelector(`#${buttonName}`);
const attachButtonClickEventHandler = (button, buttonName) =>
  button.addEventListener('click', () => {
    import(`./themes/${buttonName}`);
  });

const buttons = ['red', 'blue', 'green', 'orange'];

buttons.forEach(buttonName => {
  const button = getButton(buttonName);
  attachButtonClickEventHandler(button, buttonName);
});
