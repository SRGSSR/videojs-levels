(function(window, vjs) {
  'use strict';

  vjs.plugin('levels', function(options) {
      var Player = this.constructor,
          Flash = vjs.getComponent('Flash'),
          Html5 = vjs.getComponent('Html5'),
          loadTech_ = Player.prototype.loadTech_;

      Player.prototype.handleTechLevelsloaded_ = function() {
        return this.trigger('levelsloaded');
      };

      Player.prototype.handleTechLevelsswitched_ = function() {
        return this.trigger('levelswitched');
      };


      Player.prototype.loadTech_ = function() {
        loadTech_.apply(this, arguments);
        this.on(this.tech_, 'levelsloaded', this.handleTechLevelsloaded_);
        this.on(this.tech_, 'levelswitched', this.handleTechLevelsswitched_);
      };

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
        return this.getEl().vjs_getProperty('levels') || [];
      };

      Flash.prototype.setLevel = function (level) {
        this.getEl().vjs_setProperty('currentLevel', level);
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