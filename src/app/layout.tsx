import type { Metadata } from 'next';

import './assets/scss/tailwind.scss';
import './assets/css/material.css';

export const metadata: Metadata = {
  title: 'My Jamii - Community Engagement, Connections, and Learning',
  description:
    ' We understand living abroad calls for establishing connections with the local and the community of your fellow countrymen. ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light scroll-smooth" dir="ltr">
      <head></head>
      <body
        className={`font-Poppins text-base text-slate-900 dark:text-white dark:bg-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
