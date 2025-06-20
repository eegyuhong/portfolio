import type { Metadata } from 'next';
import { NotosansFont } from '@/common/font';
import Favicon from '@/assets/images/avata.png';
import '@/styles/globals.scss';
import Script from 'next/script';

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
      <head>
        <Script
          src="https://insightboard.vercel.app/track.js"
          data-project-id="Portfolio"
          strategy="afterInteractive"
        />
      </head>
      <body className={NotosansFont.className}>{children}</body>
    </html>
  );
}
