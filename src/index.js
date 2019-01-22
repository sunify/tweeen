var runWithFps = require('run-with-fps');

function linear(a) {
  return a;
}

function tween(from, to, cb, params) {
  params = params || {};
  var duration = params.duration || 300;
  var easing = params.easing || linear;
  var fps = params.fps || 60;

  var stopped = false;
  var start = Date.now();

  var stop = runWithFps(function() {
    var spent = Math.min(Date.now() - start, duration);
    cb(from + (to - from) * easing(spent / duration));
    if (spent === duration || stopped) {
      stop();
    }
  }, fps);

  return function() {
    stopped = true;
  };
}

module.exports = tween;
