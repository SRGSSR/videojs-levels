/*! videojs-levels - v0.1.0 - 2016-11-16*/
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

      Player.prototype.handleTechLevelswitched_ = function() {
        return this.trigger('levelswitched');
      };


      Player.prototype.loadTech_ = function() {
        loadTech_.apply(this, arguments);
        this.on(this.tech_, 'levelsloaded', this.handleTechLevelsloaded_);
        this.on(this.tech_, 'levelswitched', this.handleTechLevelswitched_);
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

      Player.prototype.isAutoLevel = function() {
        return this.techGet_('isAutoLevel');
      };

      Flash.prototype.currentLevel = function () {
        return this.el_.vjs_getProperty('currentLevel');
      };

      Flash.prototype.getLevels = function () {
        return this.el_.vjs_getProperty('levels') || [];
      };

      Flash.prototype.isAutoLevel = function() {
        return false;
      };

      Flash.prototype.setLevel = function (level) {
        this.el_.vjs_setProperty('currentLevel', level);
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

      Html5.prototype.isAutoLevel = function() {
        return false;
      };
  });

})(window, window.videojs);