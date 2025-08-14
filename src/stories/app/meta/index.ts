import type { Metadata } from 'next';

const metaTitle = 'GBC-SYS front boilerplate | Next';

const MetaData: Metadata = {
  title: {
    template: metaTitle + ' | %s',
    default: metaTitle,
  },
  description: 'GBC-SYS front boilerplate | Next',
  openGraph: {
    type: 'website',
    url: 'http://www.bstones.co.kr/',
    title: 'GBC-SYS',
    description: 'We make the Next Digital eXperience',
    siteName: 'GBC-SYS',
    images: [
      {
        url: 'http://www.GBC-SYS.co.kr/GBC-SYS-og.jpg',
      },
    ],
  },
  icons: {
    icon: [{ url: '/favicon.ico', rel: 'shortcut icon' }],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'naver-site-verification': '3d3e995da88e72e6',
  },
};

export default MetaData;
