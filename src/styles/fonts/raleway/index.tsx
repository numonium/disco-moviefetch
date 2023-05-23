import { createGlobalStyle } from 'styled-components';

export const FontFamily = 'Raleway';

export const FontStyle = createGlobalStyle`
  @font-face {
    font-family: ${FontFamily};
    src: url('/fonts/raleway/Raleway-Thin.eot');
    src: url('/fonts/raleway/Raleway-Thin.eot?#iefix') format('embedded-opentype'),
        url('/fonts/raleway/Raleway-Thin.woff2') format('woff2'),
        url('/fonts/raleway/Raleway-Thin.woff') format('woff'),
        url('/fonts/raleway/Raleway-Thin.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: ${FontFamily};
    src: url('/fonts/raleway/Raleway-ThinItalic.eot');
    src: url('/fonts/raleway/Raleway-ThinItalic.eot?#iefix') format('embedded-opentype'),
        url('/fonts/raleway/Raleway-ThinItalic.woff2') format('woff2'),
        url('/fonts/raleway/Raleway-ThinItalic.woff') format('woff'),
        url('/fonts/raleway/Raleway-ThinItalic.ttf') format('truetype');
    font-weight: 100;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: ${FontFamily};
    src: url('/fonts/raleway/Raleway-ExtraLight.eot');
    src: url('/fonts/raleway/Raleway-ExtraLight.eot?#iefix') format('embedded-opentype'),
        url('/fonts/raleway/Raleway-ExtraLight.woff2') format('woff2'),
        url('/fonts/raleway/Raleway-ExtraLight.woff') format('woff'),
        url('/fonts/raleway/Raleway-ExtraLight.ttf') format('truetype');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: ${FontFamily};
    src: url('/fonts/raleway/Raleway-ExtraLightItalic.eot');
    src: url('/fonts/raleway/Raleway-ExtraLightItalic.eot?#iefix') format('embedded-opentype'),
        url('/fonts/raleway/Raleway-ExtraLightItalic.woff2') format('woff2'),
        url('/fonts/raleway/Raleway-ExtraLightItalic.woff') format('woff'),
        url('/fonts/raleway/Raleway-ExtraLightItalic.ttf') format('truetype');
    font-weight: 200;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: ${FontFamily};
    src: url('/fonts/raleway/Raleway-Light.eot');
    src: url('/fonts/raleway/Raleway-Light.eot?#iefix') format('embedded-opentype'),
        url('/fonts/raleway/Raleway-Light.woff2') format('woff2'),
        url('/fonts/raleway/Raleway-Light.woff') format('woff'),
        url('/fonts/raleway/Raleway-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: ${FontFamily};
    src: url('/fonts/raleway/Raleway-LightItalic.eot');
    src: url('/fonts/raleway/Raleway-LightItalic.eot?#iefix') format('embedded-opentype'),
        url('/fonts/raleway/Raleway-LightItalic.woff2') format('woff2'),
        url('/fonts/raleway/Raleway-LightItalic.woff') format('woff'),
        url('/fonts/raleway/Raleway-LightItalic.ttf') format('truetype');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: ${FontFamily};
    src: url('/fonts/raleway/Raleway-Regular.eot');
    src: url('/fonts/raleway/Raleway-Regular.eot?#iefix') format('embedded-opentype'),
        url('/fonts/raleway/Raleway-Regular.woff2') format('woff2'),
        url('/fonts/raleway/Raleway-Regular.woff') format('woff'),
        url('/fonts/raleway/Raleway-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: ${FontFamily};
    src: url('/fonts/raleway/Raleway-Italic.eot');
    src: url('/fonts/raleway/Raleway-Italic.eot?#iefix') format('embedded-opentype'),
        url('/fonts/raleway/Raleway-Italic.woff2') format('woff2'),
        url('/fonts/raleway/Raleway-Italic.woff') format('woff'),
        url('/fonts/raleway/Raleway-Italic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: ${FontFamily};
    src: url('/fonts/raleway/Raleway-Medium.eot');
    src: url('/fonts/raleway/Raleway-Medium.eot?#iefix') format('embedded-opentype'),
        url('/fonts/raleway/Raleway-Medium.woff2') format('woff2'),
        url('/fonts/raleway/Raleway-Medium.woff') format('woff'),
        url('/fonts/raleway/Raleway-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: ${FontFamily};
    src: url('/fonts/raleway/Raleway-MediumItalic.eot');
    src: url('/fonts/raleway/Raleway-MediumItalic.eot?#iefix') format('embedded-opentype'),
        url('/fonts/raleway/Raleway-MediumItalic.woff2') format('woff2'),
        url('/fonts/raleway/Raleway-MediumItalic.woff') format('woff'),
        url('/fonts/raleway/Raleway-MediumItalic.ttf') format('truetype');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: ${FontFamily};
    src: url('/fonts/raleway/Raleway-SemiBold.eot');
    src: url('/fonts/raleway/Raleway-SemiBold.eot?#iefix') format('embedded-opentype'),
        url('/fonts/raleway/Raleway-SemiBold.woff2') format('woff2'),
        url('/fonts/raleway/Raleway-SemiBold.woff') format('woff'),
        url('/fonts/raleway/Raleway-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: ${FontFamily};
    src: url('/fonts/raleway/Raleway-SemiBoldItalic.eot');
    src: url('/fonts/raleway/Raleway-SemiBoldItalic.eot?#iefix') format('embedded-opentype'),
        url('/fonts/raleway/Raleway-SemiBoldItalic.woff2') format('woff2'),
        url('/fonts/raleway/Raleway-SemiBoldItalic.woff') format('woff'),
        url('/fonts/raleway/Raleway-SemiBoldItalic.ttf') format('truetype');
    font-weight: 600;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: ${FontFamily};
    src: url('/fonts/raleway/Raleway-Bold.eot');
    src: url('/fonts/raleway/Raleway-Bold.eot?#iefix') format('embedded-opentype'),
        url('/fonts/raleway/Raleway-Bold.woff2') format('woff2'),
        url('/fonts/raleway/Raleway-Bold.woff') format('woff'),
        url('/fonts/raleway/Raleway-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: ${FontFamily};
    src: url('/fonts/raleway/Raleway-BoldItalic.eot');
    src: url('/fonts/raleway/Raleway-BoldItalic.eot?#iefix') format('embedded-opentype'),
        url('/fonts/raleway/Raleway-BoldItalic.woff2') format('woff2'),
        url('/fonts/raleway/Raleway-BoldItalic.woff') format('woff'),
        url('/fonts/raleway/Raleway-BoldItalic.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: ${FontFamily};
    src: url('/fonts/raleway/Raleway-ExtraBold.eot');
    src: url('/fonts/raleway/Raleway-ExtraBold.eot?#iefix') format('embedded-opentype'),
        url('/fonts/raleway/Raleway-ExtraBold.woff2') format('woff2'),
        url('/fonts/raleway/Raleway-ExtraBold.woff') format('woff'),
        url('/fonts/raleway/Raleway-ExtraBold.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: ${FontFamily};
    src: url('/fonts/raleway/Raleway-ExtraBoldItalic.eot');
    src: url('/fonts/raleway/Raleway-ExtraBoldItalic.eot?#iefix') format('embedded-opentype'),
        url('/fonts/raleway/Raleway-ExtraBoldItalic.woff2') format('woff2'),
        url('/fonts/raleway/Raleway-ExtraBoldItalic.woff') format('woff'),
        url('/fonts/raleway/Raleway-ExtraBoldItalic.ttf') format('truetype');
    font-weight: 800;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: ${FontFamily};
    src: url('/fonts/raleway/Raleway-Black.eot');
    src: url('/fonts/raleway/Raleway-Black.eot?#iefix') format('embedded-opentype'),
        url('/fonts/raleway/Raleway-Black.woff2') format('woff2'),
        url('/fonts/raleway/Raleway-Black.woff') format('woff'),
        url('/fonts/raleway/Raleway-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: ${FontFamily};
    src: url('/fonts/raleway/Raleway-BlackItalic.eot');
    src: url('/fonts/raleway/Raleway-BlackItalic.eot?#iefix') format('embedded-opentype'),
        url('/fonts/raleway/Raleway-BlackItalic.woff2') format('woff2'),
        url('/fonts/raleway/Raleway-BlackItalic.woff') format('woff'),
        url('/fonts/raleway/Raleway-BlackItalic.ttf') format('truetype');
    font-weight: 900;
    font-style: italic;
    font-display: swap;
  }
`;

export const Font = () => <FontStyle />;

export default Font;
