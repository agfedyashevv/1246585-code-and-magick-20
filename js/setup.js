'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var wizards = {};

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

var getWizardCoatColor = function () {
  var coatColor = wizardCoatColors[getRandomArrayIndex(wizardCoatColors)];
  return coatColor;
};

var getWizardEyesColor = function () {
  var eyesColor = wizardEyesColor[getRandomArrayIndex(wizardEyesColor)];
  return eyesColor;
};

var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = getWizardName();
  wizardElement.querySelector('.wizard-coat').style.fill = getWizardCoatColor();
  wizardElement.querySelector('.wizard-eyes').style.fill = getWizardEyesColor();

  return wizardElement;
};

var showRandomWizards = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < 4; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  return similarListElement.appendChild(fragment);
};

showRandomWizards();

userDialog.querySelector('.setup-similar').classList.remove('hidden');
