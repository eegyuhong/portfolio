import { Anton, Inter, Noto_Sans_KR } from 'next/font/google';

export const InterFont = Inter({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
});

export const AntonFont = Anton({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
});

export const NotosansFont = Noto_Sans_KR({
  weight: ['100', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap'
});
