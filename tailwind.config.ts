import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        // => @media (max-width: 290px) { ... }
        exxsm: { max: '290px' },
        // => @media (max-width: 355px) { ... }
        exsm: { max: '355px' },
        // => @media (max-width: 480px) { ... }
        mxxsm: { max: '480px' },
        // => @media (max-width: 640px) { ... }
        mxsm: { max: '640px' },
        // => @media (max-width: 768px) { ... }
        mxmd: { max: '768px' },
        // => @media (max-width: 1024px) { ... }
        mxlg: { max: '1024px' },
        // => @media (max-width: 1280px) { ... }
        mxxl: { max: '1280px' },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
