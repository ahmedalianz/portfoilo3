import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

import { IconType } from 'react-icons';

type SocialMedia = {
  label: string;
  href: string;
  icon: IconType;
};

export const SocialMedias: SocialMedia[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ahmedalian/',
    icon: FaLinkedin,
  },

  {
    label: 'Github',
    href: 'https://github.com/ahmedalianz',
    icon: FaGithub,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/ahmed.tiger.300/',
    icon: FaFacebook,
  },
];
