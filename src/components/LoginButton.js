import { ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Theme from "./Theme";
import SvgIcon from '@mui/material/SvgIcon';

import DiscordIco from '../DiscordIcon.svg';
import { fontSize } from '@mui/system';

function LoginIcon(props) {
  return (
    <SvgIcon {...props} >
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M61.7958 16.494C57.0736 14.2846 52.0244 12.6789 46.7456 11.7646C46.0973 12.9367 45.3399 14.5132 44.8177 15.7673C39.2062 14.9234 33.6463 14.9234 28.138 15.7673C27.6159 14.5132 26.8413 12.9367 26.1872 11.7646C20.9027 12.6789 15.8477 14.2905 11.1255 16.5057C1.60078 30.8988 -0.981215 44.9344 0.309785 58.7707C6.62708 63.4883 12.7493 66.3541 18.7682 68.2294C20.2543 66.1841 21.5797 64.0099 22.7215 61.7185C20.5469 60.8922 18.4641 59.8725 16.4961 58.6887C17.0182 58.3019 17.5289 57.8975 18.0223 57.4814C30.0257 63.0957 43.0677 63.0957 54.9277 57.4814C55.4269 57.8975 55.9375 58.3019 56.4539 58.6887C54.4801 59.8783 52.3916 60.898 50.217 61.7244C51.3588 64.0099 52.6785 66.19 54.1703 68.2352C60.195 66.3599 66.3229 63.4942 72.6402 58.7707C74.155 42.7309 70.0525 28.8242 61.7958 16.494ZM24.3568 50.2615C20.7535 50.2615 17.7985 46.8976 17.7985 42.8012C17.7985 38.7048 20.6904 35.3351 24.3568 35.3351C28.0233 35.3351 30.9782 38.6989 30.9151 42.8012C30.9208 46.8976 28.0233 50.2615 24.3568 50.2615ZM48.5932 50.2615C44.9899 50.2615 42.0349 46.8976 42.0349 42.8012C42.0349 38.7048 44.9267 35.3351 48.5932 35.3351C52.2596 35.3351 55.2146 38.6989 55.1515 42.8012C55.1515 46.8976 52.2596 50.2615 48.5932 50.2615Z"
            fill="#ffffff"
          />
        </g>
      </svg>
    </SvgIcon>
  );
}

function LoginButton(props) {
  return (
    <Stack spacing={2} direction="row">
      <ThemeProvider theme={Theme}>
        <Button className={props.className} startIcon={
          <LoginIcon 
          fontSize="inherit"
          style={
            {
              top: '50%',
              transform:'scale(1.5)'
            }
          }
          />
        }

        style={
          {minWidth: '10vw', minHeight: '4vw'}
        }
          variant="contained"
          size="large"
          onClick={(event) => {
            event.stopPropagation();
            window.open(props.authURL, "_self");
          }}>
          디스코드 로그인
        </Button>
      </ThemeProvider>
    </Stack>
  );
}

export default LoginButton;