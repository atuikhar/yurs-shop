import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  disabledLink?: boolean;
}

export default function Logo({ disabledLink = false, sx }: Props) {
  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <svg
        width="118"
        height="32"
        viewBox="0 0 118 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M93.9469 23.733L94.6608 21.4533H93.8449C90.3413 30.6382 89.2495 30.9621 87.6177 31.0101V25.7608L67.6462 0H47.7227V0.581928C52.93 0.539933 53.02 4.52943 53.02 8.7949H53.6019L53.6018 8.51964C53.599 4.35941 53.5965 0.540838 59.3432 0.581928C59.4552 0.590589 59.5685 0.595526 59.6843 0.600575C60.7722 0.647988 62.0855 0.705226 64.6825 3.94751L86.1778 31.592H97.5644V31.0101C92.2491 31.1601 92.867 27.1466 93.9409 23.733H93.9469ZM87.0355 16.6118V11.0685C87.0355 6.893 87.0295 0.545791 81.1562 0.587786V0.00585938H93.9886V0.587786C87.6155 0.546248 87.6166 6.74988 87.6174 10.9255L87.6174 11.0625V16.6118H87.0355ZM67.1067 18.1777V21.6633C67.1127 25.6348 67.2447 31.0101 72.986 31.0101V31.5921H60.0156V31.0101C66.3688 31.0101 66.4768 25.6768 66.4768 21.6633V18.1777H67.1067ZM102.976 0C108.495 13.1924 114.063 27.3746 114.063 27.3746L114.057 27.3686C115.495 30.8498 116.419 30.9134 117.623 30.9964L117.734 31.0041V31.586H107.506V31.0041C109.923 31.0041 109.479 28.4484 108.399 25.9348L106.876 22.0292L106.648 21.4473H106.654L105.376 18.2077H98.5547V16.6179H104.752L100.42 5.6093L102.526 0H102.976ZM44.4354 29.9781C39.546 29.9781 36.2224 26.7925 36.2224 21.1832V4.53529C36.2224 0.989737 37.8842 0.587786 39.816 0.587786V0.00585938H17.4688V0.587786C19.4005 0.587786 21.0563 0.989737 21.0563 4.53529V13.1202V27.1525C21.0563 30.1581 19.8924 31.01 17.9127 31.01V31.5919H29.0893V31.01C27.1575 31.01 25.5017 30.608 25.5017 27.0625V18.4775V4.4453C25.5017 1.43968 26.6716 0.587786 28.6454 0.587786C30.6191 0.587786 31.789 1.43968 31.789 4.4453V20.8233C31.789 28.1363 36.4144 31.9999 42.1977 31.9999C47.669 31.9999 52.9663 29.1322 53.0983 21.3992H52.5164C52.3604 26.8945 48.9168 29.9841 44.4474 29.9841L44.4354 29.9781ZM8.033 4.44516V13.1201V16.6236H17.2298V18.2134H8.033V27.1523C8.033 30.1579 9.20285 31.0098 11.1766 31.0098V31.5918H0V31.0098C1.70979 31.0098 3.2096 30.6859 3.52756 28.1422C3.5474 27.5816 3.54673 26.8938 3.54591 26.0449C3.54574 25.8673 3.54556 25.6826 3.54556 25.4905V6.24494C3.54556 4.72113 3.53356 3.59927 3.40157 2.77137C2.91564 0.845611 1.54181 0.587643 0 0.587643V0.00571572H11.1766V0.587643C9.19685 0.587643 8.033 1.43954 8.033 4.44516Z"
          fill="#F5F5F5"
        />
      </svg>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}