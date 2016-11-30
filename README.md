# Videojs Levels Plugin

<img align="right" height="30" src="http://www.srgssr.ch/fileadmin/templates/images/SRGLogo.gif">

> A quality level plugin for video.js

This plugin enhance VideoJS Player functionality to allow setting and getting quality levels. It does not
include any physicial buttons.

- [Getting Started](#getting-started)
- [Documentation](#documentation)

## Getting Started

Download videojs-levels and include it in your page along with video.js:

```html
<video id=example-video width=600 height=300 class="video-js vjs-default-skin" controls>
  <source
     src="https://example.com/index.m3u8"
     type="application/x-mpegURL">
</video>
<script src="video.js"></script>
<script src="videojs-levels.js"></script>
<script>
var player = videojs('example-video', { plugins: { levels: {} } }, function() {
    // Print a list of available levels
    console.log(this.getLevels());
    // Set the quality by index
    this.setLevel(1);
});
</script>
```
