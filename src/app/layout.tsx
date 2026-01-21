import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hands First',
  description: 'Hands First - Official Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/nov7yoe.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
