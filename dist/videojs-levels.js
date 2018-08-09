/*! videojs-levels - v0.4.0 - 2018-08-09*/
(function(window, vjs) {
  'use strict';
  // Extend Default HTML5
  var Html5 = vjs.getComponent('Html5');

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

  vjs.registerPlugin('levels', function(options) {
      var constructor = this,
          Player = {
            loadTech_: constructor.loadTech_
          };

      this.handleTechLevelsloaded_ = function() {
        return this.trigger('levelsloaded');
      };

      this.handleTechLevelswitched_ = function() {
        return this.trigger('levelswitched');
      };

      this.loadTech_ = function() {
        Player.loadTech_.apply(this, arguments);
        this.on(this.tech_, 'levelsloaded', this.handleTechLevelsloaded_);
        this.on(this.tech_, 'levelswitched', this.handleTechLevelswitched_);
      };

      this.currentLevel = function () {
        return this.techGet_('currentLevel');
      };

      this.getLevels = function () {
        return this.techGet_('getLevels');
      };

      this.setLevel = function (level) {
        this.techCall_('setLevel', level);
      };

      this.isAutoLevel = function() {
        return this.techGet_('isAutoLevel');
      };
  });

})(window, window.videojs);