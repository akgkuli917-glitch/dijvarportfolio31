// Nav type
export type navLinkType = {
  label: string;
  url: string;
};

// Nav
const navLinks = [
  {
    label: 'Services',
    url: '#services',
  },
  {
    label: 'Projects',
    url: '#works',
  },
  {
    label: 'About',
    url: '#about-me-section',
  },
  {
    label: 'Team Endorsements',
    url: '#testimonials-section',
  },
  {
    label: 'Contact',
    url: '#contact-section',
  },
];
const navbarLinks = [
  {
    label: 'Home',
    url: '#app',
  },
  ...navLinks,
];

const socialLinks = [
  {
    label: 'GitHub',
    url: 'https://github.com/dijvar',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dijvar/',
  },
  {
    label: 'WhatsApp',
    url: 'https://wa.me/905516630421',
  },
];

const resourceLinks = [
  {
    label: 'OpenAI',
    url: 'https://openai.com',
  },
  {
    label: 'Hugging Face',
    url: 'https://huggingface.co',
  },
  {
    label: 'Papers With Code',
    url: 'https://paperswithcode.com',
  },
  {
    label: 'DeepLearning.AI',
    url: 'https://www.deeplearning.ai/',
  },
];

const heroText =
  'A freelance AI developer, making good shit since 2023, hiding bad shit since 2023.';

const locationPlace = `41°00'49.0"N 28°58'34.0"E`;
const locationCountry = 'Turkey, Istanbul';

// cal.com
const dataCalNamespace = '30min';
const dataCalLink = 'brhoom/30min';
const dataCalConfig =
  '{"layout":"month_view", "theme": "dark", "brand": "#8C8C73"}';

export {
  socialLinks,
  resourceLinks,
  heroText,
  locationPlace,
  locationCountry,
  navLinks,
  navbarLinks,
  dataCalNamespace,
  dataCalLink,
  dataCalConfig,
};
