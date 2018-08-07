import styles from './index.css';

styles.use();
const themes = {};

const getButton = buttonName => document.querySelector(`#${buttonName}`);

const buttonEventListener = buttonName => () => {
  import(`./themes/${buttonName}`).then(themeModule => {
    const theme = themeModule.default;
    if (!themes[buttonName]) themes[buttonName] = theme;

    Object.keys(themes)
      .filter(key => key !== buttonName && themes[key])
      .forEach(key => {
        themes[key].unuse();
      });

    themes[buttonName].use();
  });
};

const attachButtonClickEventHandler = (button, buttonName) => {
  button.addEventListener('click', buttonEventListener(buttonName));
};

const buttons = ['red', 'blue', 'green', 'orange', 'pink'];

buttons.forEach(buttonName => {
  const button = getButton(buttonName);
  attachButtonClickEventHandler(button, buttonName);
});
