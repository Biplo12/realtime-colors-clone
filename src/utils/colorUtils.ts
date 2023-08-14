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

export const hexToHsl = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  if (isNaN(h) || isNaN(s) || isNaN(l)) {
    return { h: 0, s: 0, l: 0 };
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
};

export const hexToRgb = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    return { r: 0, g: 0, b: 0 };
  }

  return { r, g, b };
};
