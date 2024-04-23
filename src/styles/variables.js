import { css } from 'styled-components';

const variables = css`
  :root {
    --dark-navy: #babfc9;
    --navy: #babfc9;
    --light-navy: #515867;
    --lightest-navy: #000000;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --dark-slate: #babfc9;
    --slate: #515867;
    --light-slate: rgba(2, 12, 27, 0.7);
    --lightest-slate: #000000;
    --white: #000000;
    --green: #000000;
    --green-tint: #3f4550;
    --pink: #babfc9;
    --blue: #babfc9;
    --lavender-gray: #babfc9;
    --lavender-gray-bg: #afb5c0;
    --lavender-gray-shadow: #3f4550;
    --black-coral: #515867;
    --smoky-black: #161316;
    --smoky-black-tint: rgba(63, 69, 80, 0.2);
    --light-grey: #d6d6d6;

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
