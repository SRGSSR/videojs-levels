/*! videojs-levels - v0.2.0 - 2016-12-13*/
(function(window, vjs) {
  'use strict';
  // Extend Default HTML5 and Flash tech
  var Flash = vjs.getComponent('Flash'),
      Html5 = vjs.getComponent('Html5');

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

  vjs.plugin('levels', function(options) {
      var Player = this.constructor,
          loadTech_ = Player.prototype.loadTech_;

      this.handleTechLevelsloaded_ = function() {
        return this.trigger('levelsloaded');
      };

      this.handleTechLevelswitched_ = function() {
        return this.trigger('levelswitched');
      };


      this.loadTech_ = function() {
        loadTech_.apply(this, arguments);
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