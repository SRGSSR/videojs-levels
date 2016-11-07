/*! videojs-levels - v0.0.1 - 2016-11-07*/
(function(window, videojs) {
  'use strict';

  videojs.plugin('levels', function(options) {
      videojs.Player.prototype.getLevels = function () {
        return this.techGet_('getLevels');
      };

      videojs.Player.prototype.setLevel = function (level) {
        this.techCall_('setLevel', level);
      };

      videojs.Flash.prototype.getLevels = function () {
        return this.getEl().vjs_getProperty('levels') || [];
      };

      videojs.Flash.prototype.setLevel = function (level) {
        this.getEl().vjs_setProperty('level', level);
      };

      videojs.Html5.prototype.getLevels = function () {
        return [];
      };

      videojs.Html5.prototype.setLevel = function (level) {
        // Do nothing
      };
  });

})(window, window.videojs);