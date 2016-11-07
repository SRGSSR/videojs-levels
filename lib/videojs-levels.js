(function(window, videojs) {
  'use strict';

  videojs.plugin('levels', function(options) {
      videojs.Player.prototype.currentLevel = function () {
        this.techCall_('currentLevel', level);
      };

      videojs.Player.prototype.getLevels = function () {
        return this.techGet_('getLevels');
      };

      videojs.Player.prototype.setLevel = function (level) {
        this.techCall_('setLevel', level);
      };

      videojs.Flash.prototype.currentLevel = function () {
        return this.getEl().vjs_getProperty('currentLevel') || [];
      };

      videojs.Flash.prototype.getLevels = function () {
        return this.getEl().vjs_getProperty('getLevels') || [];
      };

      videojs.Flash.prototype.setLevel = function (level) {
        this.getEl().vjs_setProperty('setLevel', level);
      };

      videojs.Html5.prototype.currentLevel = function () {
        return undefined;
      };

      videojs.Html5.prototype.getLevels = function () {
        return [];
      };

      videojs.Html5.prototype.setLevel = function (level) {
        // Do nothing
      };
  });

})(window, window.videojs);