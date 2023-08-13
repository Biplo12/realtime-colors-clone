// utils/colorUtils.js
export const hslToHex = (h: number, s: number, l: number) => {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

export const randomColor = (isDarkMode: boolean) => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 30) + 50;
  let lightness = Math.floor(Math.random() * 20) + 40;

  if (isDarkMode) {
    lightness = Math.floor(Math.random() * 20) + 40 - 25;
  } else {
    lightness = Math.floor(Math.random() * 20) + 40 + 25;
  }

  return {
    backgroundColor: hslToHex(
      (hue + 180) % 360,
      saturation,
      isDarkMode ? 10 : 90
    ),
    textColor: isDarkMode ? '#fff' : '#000',
    primaryColor: hslToHex(hue, saturation, lightness),
    secondaryColor: hslToHex((hue + 180) % 360, saturation, lightness),
    accentColor: hslToHex((hue + 60) % 360, saturation, lightness),
  };
};
