// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'SamanthaYoong', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/my-portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Case Studies',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['SamanthaYoong/my-portfolio'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Tableau & Looker Studio Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Netflix – Pricing Tier LTV Optimisation',
          description:
            'Demonstrated how strategic price-feature bundling in a simulated Netflix A/B test increased user LTV by ~50% with strong upgrade behaviour and low churn risk.',
          imageUrl:
            'data:image/png;base64,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',
          link: 'https://github.com/SamanthaYoong/Netflix_Pricing_Tier_LTV_Experiment-Merged_Test_of_Feature_Price_Impact',
        },
        {
          title: 'Google Ads Project 1',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Google Analytic Project 1',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Google Ads Project 1',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'SamanthaYoong',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'ariful-alam',
    x: 'arif_szn',
    mastodon: 'arifszn@mastodon.social',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'arifszn',
    dev: 'arifszn',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.arifszn.com',
    phone: '',
    email: 'samanthayoong2000@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Shopee',
      position: 'Marketing Executive',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Google Ads',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Taylor University',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],

  // Display articles from your medium or dev account. (Optional)
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/SamanthaYoong/samanthayoong.github.io"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
