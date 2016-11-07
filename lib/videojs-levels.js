(function(window, vjs) {
  'use strict';

  vjs.plugin('levels', function(options) {
      var Player = this.constructor,
          Flash = vjs.getComponent('Flash'),
          Html5 = vjs.getComponent('Html5');

      Player.prototype.currentLevel = function () {
        return this.techGet_('currentLevel');
      };

      Player.prototype.getLevels = function () {
        return this.techGet_('getLevels');
      };

      Player.prototype.setLevel = function (level) {
        this.techCall_('setLevel', level);
      };

      Flash.prototype.currentLevel = function () {
        return this.getEl().vjs_getProperty('currentLevel') || [];
      };

      Flash.prototype.getLevels = function () {
        return this.getEl().vjs_getProperty('getLevels') || [];
      };

      Flash.prototype.setLevel = function (level) {
        this.getEl().vjs_setProperty('setLevel', level);
      };

      Html5.prototype.currentLevel = function () {
        return undefined;
      };

      Html5.prototype.getLevels = function () {
        return [];
      };

      Html5.prototype.setLevel = function (level) {
        // Do nothing
      };
  });

})(window, window.videojs);