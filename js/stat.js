"use strict"

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 110;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var NAME_GAP_X = 50;
var NAME_Y = 245;
var TEXT_HEIGHT = 20;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - GAP - TEXT_HEIGHT*4;
var MAX_GIST_HEIGHT = 150;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
}

var getRandomNumber = function(min, max) {
  return Math.floor(Math.random() * (max-min) + min);
}

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, "rgba(0, 0, 0, 0.7)");
  renderCloud(ctx, CLOUD_X, CLOUD_Y, "#fff");

  ctx.fillStyle = "#000";
  ctx.font = "16px PT Mono";
  ctx.textBaseline = "hanging";

  var maxTime = getMaxElement(times);

  ctx.fillText("Ура вы победили!", CLOUD_X + NAME_GAP_X, TEXT_HEIGHT);
  ctx.fillText("Список результатов:", CLOUD_X + NAME_GAP_X, TEXT_HEIGHT*2);

  for (var i = 0; i < players.length; i++) {
    if (players[i] === "Вы") {
      ctx.fillStyle = "#000";
      ctx.fillText(Math.floor(times[i]), CLOUD_X + NAME_GAP_X + (BAR_WIDTH + NAME_GAP_X) * i, MAX_GIST_HEIGHT*1.5 - barHeight*times[i] / maxTime + TEXT_HEIGHT);
      ctx.fillText(players[i], CLOUD_X + NAME_GAP_X + (BAR_WIDTH + NAME_GAP_X) * i, CLOUD_Y + NAME_Y);
      ctx.fillStyle = "rgba(255, 0, 0, 1)";
      ctx.fillRect(CLOUD_X + NAME_GAP_X + (BAR_WIDTH + NAME_GAP_X) * i, NAME_Y, BAR_WIDTH, (MAX_GIST_HEIGHT - barHeight*times[i]) / maxTime + TEXT_HEIGHT);
    } else {
      ctx.fillStyle = "#000";
      ctx.fillText(Math.floor(times[i]), CLOUD_X + NAME_GAP_X + (BAR_WIDTH + NAME_GAP_X) * i, MAX_GIST_HEIGHT*1.5 - barHeight*times[i] / maxTime + TEXT_HEIGHT);
      ctx.fillText(players[i], CLOUD_X + NAME_GAP_X + (BAR_WIDTH + NAME_GAP_X) * i, CLOUD_Y + NAME_Y);
      ctx.fillStyle = "hsl(240," + getRandomNumber(0, 100) + "%, 50%)";
      ctx.fillRect(CLOUD_X + NAME_GAP_X + (BAR_WIDTH + NAME_GAP_X) * i, NAME_Y, BAR_WIDTH, (MAX_GIST_HEIGHT - barHeight*times[i]) / maxTime + TEXT_HEIGHT);
    }
  }
}
