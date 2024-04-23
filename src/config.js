module.exports = {
  email: 'info@furkanulutas.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/d4rkn3m3s1s',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/furkan_ulutas',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/d4rkn3m3s1s',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ulutasfurkan',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/d4rkn3m3s1s',
    },
  ],

  navLinks: [
    {
      name: 'Hakkımda',
      url: '/#about',
    },
    {
      name: 'Deneyim',
      url: '/#jobs',
    },
    {
      name: 'Projeler',
      url: '/#projects',
    },
    {
      name: 'İletişim',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
