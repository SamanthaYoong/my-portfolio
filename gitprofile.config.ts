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
      header: 'Product & Marketing Analytics Case Studies',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Netflix – Pricing Tier LTV Optimisation',
          description:
            'Demonstrated how strategic price-feature bundling in a simulated Netflix A/B test increased user LTV by ~50% with strong upgrade behaviour and low churn risk.',
          imageUrl:
            'https://www.freepik.com/icon/netflix_5977590#fromView=search&page=1&position=1&uuid=4f5989f3-f337-4488-b910-ba3238c73dbe',
          link: 'https://github.com/SamanthaYoong/Netflix_Pricing_Tier_LTV_Experiment-Merged_Test_of_Feature_Price_Impact',
        },
        {
          title: 'A/B Test: E-commerce Livestreaming User Participation Optimisation',
          description:
            'Built an A/B Test case study to demonstrate product thinking and data analysis, revealing that UX tweaks alone were insufficient to overcome pricing perception barriers.',
          imageUrl:
            'https://www.freepik.com/icon/ecommerce_3445820#fromView=keyword&page=1&position=11&uuid=fdca9893-0d6b-4967-a1cb-edae75f82499',
          link: 'https://github.com/SamanthaYoong/AB_Test_Ecommerce_Livestreaming_User_Participation_Optimization',
        },
        {
          title: 'Meta Ads – UGC Performance Analysis',
          description:
            'Revealed that UGC video creatives outperform static formats on Meta Ads, with +55% conversion and highest ROAS uplift.',
          imageUrl:
            'https://www.freepik.com/icon/meta_6033716#fromView=search&page=1&position=2&uuid=241fef0e-dd1f-49f7-a77e-b9c735f589e0',
          link: 'https://github.com/SamanthaYoong/MetaAds_UGC_Performance_Analysis',
        },
        {
          title: 'Funnel & Retention of a SaaS Product',
          description:
            'Identified the biggest funnel drop-off between activation and conversion (~60%), revealing feature gaps and UX friction as key blockers to monetization',
          imageUrl:
            'https://www.freepik.com/icon/analysis_6604210#fromView=search&page=1&position=3&uuid=c19c4899-f3de-4756-bb3c-73b6a9491c93',
          link: 'https://www.freepik.com/icon/analysis_6604210#fromView=search&page=1&position=3&uuid=c19c4899-f3de-4756-bb3c-73b6a9491c93',
        },
        {
          title: 'Google-Ads-Budget-Optimization',
          description:
            'Uncovered YouTube as a high ROI acquisition channel through cost efficiency and revenue-per-impression analysis, leading  to a 22% budget reallocation toward high-spending customer.',
          imageUrl:
            'https://www.freepik.com/icon/google_5968863#fromView=keyword&page=1&position=3',
          link: 'https://github.com/SamanthaYoong/Google-Ads-Budget-Optimization',
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
    linkedin: 'samantha-yoong',
    website: 'https://samanthayoong.github.io/my-portfolio/',
    email: 'samanthayoong2000@gmail.com',
  },
  resume: {
    fileUrl:
      'file:///C:/Users/Samantha%20Yoong/Downloads/Samantha_Yoong_Optiwatt_Resume.docx%20(1).html', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'SQL',
    'Tableau',
    'Excel',
    'Google Looker',
    'GA4',
    'Meta Ads',
    'A/B Testing',
    'Segmentation',
    'Behavioral Frameworks',
    'Forecasting',
    'Competitive Analysis',
    'Customer Funnel Analysis',
    'EV & Clean Tech',
    'Strategic Roadmaps',
  ],
  experiences: [
    {
      company: 'Self-initiated Projects | Freelance',
      position: 'Product/Growth Analyst',
      from: 'June 2025',
      to: 'Present',
      companyLink: 'https://samanthayoong.github.io/',
    },
    {
      company: 'Shopee',
      position: 'Marketing Executive Intern',
      from: 'August 2023',
      to: 'December 2023',
      companyLink: 'https://shopee.com.my/',
    },
  ],
  certifications: [
    {
      name: 'Google Analytics Certification',
      body: 'Hands-on skills in tracking user behavior, analyzing website performance, and uncovering insights to drive data-informed marketing decisions',
      year: 'May 2025',
      link: 'https://skillshop.credential.net/5cd06aff-e613-43ce-8efa-df0abb2b31e3#acc.oWni6aPk',
    },
    {
      name: 'Google Ads Search Certification',
      body: 'A solid understanding of campaign structure, keyword targeting, and performance metrics.',
      year: 'May 2025',
      link: 'https://skillshop.credential.net/3c1a05fb-8479-4773-8b47-5e15d152684c',
    },
  ],
  educations: [
    {
      institution: 'Taylor University',
      degree: 'B.A. Mass Communication / Strategy Writing & Behavioral Research Focus',
      from: '2021',
      to: '2024',
    },
    {
      institution: 'Self-Learning Path',
      degree: 'SQL (Udacity), Meta Ads (Blueprint), Statistics & Economics (Khan Academy)',
      from: '2024',
      to: '2025',
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
