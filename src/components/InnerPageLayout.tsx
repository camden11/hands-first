'use client';

import { ReactNode, useState } from 'react';
import PageHeader from './PageHeader';
import Footer from './Footer';
import Menu from './Menu';
import styles from './InnerPageLayout.module.css';

interface InnerPageLayoutProps {
  title: string;
  href: string;
  children: ReactNode;
}

export default function InnerPageLayout({
  title,
  href,
  children,
}: InnerPageLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.page}>
      <PageHeader 
        title={title} 
        href={href} 
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
      />
      <main className={styles.content}>{children}</main>
      <Footer />
      {isMenuOpen && <Menu onClose={() => setIsMenuOpen(false)} />}
    </div>
  );
}
