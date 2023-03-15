import { pxToRem, responsiveFontSizes } from '../utils/getFontValue';

// ----------------------------------------------------------------------

const FONT_PRIMARY = 'Museo Sans Cyrl,  sans-serif'; // Local Font

const typography = {
  fontFamily: FONT_PRIMARY,
  h1: {
    fontWeight: 600,
    fontSize: pxToRem(28),
    fontFamily: FONT_PRIMARY,
    ...responsiveFontSizes({ xs: 28, sm: 28, md: 28, lg: 28 }),
  },
  h2: {
    fontWeight: 400,
    fontSize: pxToRem(28),
    fontFamily: FONT_PRIMARY,
    ...responsiveFontSizes({ xs: 28, sm: 28, md: 28, lg: 28 }),
  },
  h3: {
    fontWeight: 600,
    fontSize: pxToRem(20),
    fontFamily: FONT_PRIMARY,
    ...responsiveFontSizes({ xs: 20, sm: 20, md: 20, lg: 20 }),
  },
  h4: {
    fontWeight: 600,
    fontSize: pxToRem(18),
    fontFamily: FONT_PRIMARY,
    ...responsiveFontSizes({ xs: 18, sm: 18, md: 18, lg: 18 }),
  },
  h5: {
    fontWeight: 600,
    fontSize: pxToRem(16),
    fontFamily: FONT_PRIMARY,
    ...responsiveFontSizes({ xs: 16, sm: 16, md: 16, lg: 16 }),
  },
  h6: {
    fontWeight: 400,
    fontSize: pxToRem(16),
    fontFamily: FONT_PRIMARY,
    ...responsiveFontSizes({ xs: 16, sm: 16, md: 16, lg: 16 }),
  },
  subtitle1: {
    fontWeight: 400,
    fontSize: pxToRem(16),
    fontFamily: FONT_PRIMARY,
    ...responsiveFontSizes({ xs: 16, sm: 16, md: 16, lg: 16 }),
  },
  subtitle2: {
    fontWeight: 300,
    fontSize: pxToRem(16),
    fontFamily: FONT_PRIMARY,
    ...responsiveFontSizes({ xs: 16, sm: 16, md: 16, lg: 16 }),
  },
  body1: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 400,
    fontSize: pxToRem(14),
    ...responsiveFontSizes({ xs: 14, sm: 14, md: 14, lg: 14 }),
  },
  body2: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 300,
    fontSize: pxToRem(14),
  },
  caption: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 400,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ xs: 18, sm: 18, md: 20, lg: 20 }),
  },
  overline: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 400,
    fontSize: pxToRem(12),
    textTransform: 'none',
  },
  button: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 400,
    textTransform: 'none',
    fontSize: pxToRem(12),
  },
} as const;

export default typography;
