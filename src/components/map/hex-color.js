import hexDurationMood from './hex-duration-mood';

const color = [
  '#ffffff',
  'hsl(244, 61%, 48%)',
  'rgb(158,155,255)',
  'rgb(255,169,163)',
  'rgb(255,65,51)'
];

export default function hexColor (mode, duration) {
  return color[hexDurationMood(mode, duration)];
}
