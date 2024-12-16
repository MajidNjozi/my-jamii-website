import type { Metadata } from 'next';

import './assets/scss/tailwind.scss';
import './assets/css/material.css';

export const metadata: Metadata = {
  title: 'My Jamii - Community Engagement, Connections, and Learning',
  description:
    ' We understand living abroad calls for establishing connections with the local and the community of your fellow countrymen. ',
  // openGraph: {
  //   type: 'website',
  //   url: 'https://myjamii.com',
  //   title: 'My Jamii - Community Engagement, Connections, and Learning',
  //   description:
  //     'We understand living abroad calls for establishing connections with the local and the community of your fellow countrymen.',
  //   images: [
  //     {
  //       url: 'https://drive.google.com/uc?id=1N5Kzd8zb7UoQcnTEG2cCiP8hxig-nyjJ',
  //       width: 1200,
  //       height: 630,
  //       alt: 'Rasello platform showcasing analytics, prediction, and communication tools',
  //     },
  //     {
  //       url: 'https://drive.google.com/uc?id=1N5Kzd8zb7UoQcnTEG2cCiP8hxig-nyjJ',
  //       width: 600,
  //       height: 315,
  //       alt: 'Rasello platform showcasing analytics, prediction, and communication tools',
  //     },
  //   ],
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   creator: '@myjamiiapp',
  //   title: 'My Jamii - Community Engagement, Connections, and Learning',
  //   description:
  //     'We understand living abroad calls for establishing connections with the local and the community of your fellow countrymen.',
  //   images: [
  //     'https://drive.google.com/uc?id=1N5Kzd8zb7UoQcnTEG2cCiP8hxig-nyjJ',
  //     'https://drive.google.com/uc?id=1N5Kzd8zb7UoQcnTEG2cCiP8hxig-nyjJ',
  //   ],
  // },
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
