import type { Metadata } from 'next';

import './assets/scss/tailwind.scss';
import './assets/css/material.css';

export const metadata: Metadata = {
  title: 'My Jamii - Simplifying Connections to People, Events, and Services.',
  description:
    'An online platform which will easily connect people from different countries by creating communities and offering services depending on people’s country and cities of origin and their new locations.',
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
