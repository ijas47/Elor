Drop the final hero clip here as `hero.mp4`.

Recommended export settings for a homepage background video:
- Trim to 8-15 seconds, looped seamlessly if possible
- 1920x1080 or 1280x720, H.264 MP4
- No audio track needed (muted autoplay)
- Target under 5MB (compress with HandBrake or ffmpeg, e.g.
  `ffmpeg -i source.mp4 -vf scale=1920:-2 -an -crf 28 -preset slow hero.mp4`)

Until this file exists, the hero falls back to `assets/hero-scene.svg`
as the poster image, so the page never looks broken.
