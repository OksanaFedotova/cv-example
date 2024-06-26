import { useEffect, useState } from 'react';
import { SCREEN_SM, SCREEN_MD, SCREEN_LG, SCREEN_XL, SCREEN_XXL } from '../constants/breakpoints';

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => window.addEventListener('resize', (e) => setWidth(e.target.innerWidth)), []);

  return {
    width,
    isScreenSm: width >= SCREEN_SM,
    isScreenMd: width >= SCREEN_MD,
    isScreenLg: width >= SCREEN_LG,
    isScreenXl: width >= SCREEN_XL,
    isScreenXxl: width >= SCREEN_XXL,
  };
};
