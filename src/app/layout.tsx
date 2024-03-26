import type { Metadata } from 'next';
import { NotosansFont } from '@/common/font';
import Favicon from '@/assets/images/avata.png';
import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: 'PORTFOLIO - DEVELOPER EE.GYUHONG',
  description: '개인용 포트폴리오입니다.',
  icons: [{ rel: 'icon', url: Favicon.src }]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={NotosansFont.className}>{children}</body>
    </html>
  );
}
