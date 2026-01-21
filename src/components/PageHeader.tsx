import Link from 'next/link';
import styles from './PageHeader.module.css';

interface PageHeaderProps {
  title: string;
  href: string;
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

export default function PageHeader({ title, href, isMenuOpen, onMenuToggle }: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link href="/">HANDS FIRST</Link>
        <span className={styles.separator}> / </span>
        <Link href={href}>{title}</Link>
      </h1>
      <button 
        className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpen : ''}`}
        onClick={onMenuToggle}
      >
        {isMenuOpen ? 'EXIT' : 'MENU'}
      </button>
    </header>
  );
}
