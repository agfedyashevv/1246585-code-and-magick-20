'use strict';

var numberСycles = 4;

var userDialog = document.querySelector('.setup');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var wizardNames = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var wizardSurnames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var wizardEyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var getRandomArrayIndex = function (array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return randomIndex;
};

var getWizardName = function () {
  var wizardName = wizardNames[getRandomArrayIndex(wizardNames)];
  var wizardSurname = wizardSurnames[getRandomArrayIndex(wizardSurnames)];
  var name = '';
  name = wizardName + ' ' + wizardSurname;
  return name;
};

var generateWizards = function () {
  var wizards = [];
  for (var i = 0; i < numberСycles; i++) {
    wizards.push({
      name: getWizardName(),
      coatColor: getWizardCoatColor(),
      eyesColor: getWizardEyesColor()
    });
  }
  return wizards;
};

var getWizardCoatColor = function () {
  var coatColor = wizardCoatColors[getRandomArrayIndex(wizardCoatColors)];
  return coatColor;
};

var getWizardEyesColor = function () {
  var eyesColor = wizardEyesColor[getRandomArrayIndex(wizardEyesColor)];
  return eyesColor;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var showRandomWizards = function () {
  var wizards = generateWizards();
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  return similarListElement.appendChild(fragment);
};

var init = function () {
  showRandomWizards();
  userDialog.classList.remove('hidden');
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
};

init();
