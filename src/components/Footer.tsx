import styles from './Footer.module.css';

const links = [
  { label: 'Email', url: 'mailto:handsfirstband@gmail.com' },
  { label: 'Instagram', url: 'https://www.instagram.com/handsfirstband/' },
  { label: 'Bandcamp', url: 'https://handsfirst.bandcamp.com/' },
  { label: 'Spotify', url: 'https://spotify.link/4FQoyLqAVDb' },
  { label: 'Apple Music', url: 'https://music.apple.com/us/artist/hands-first/1711949174' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        {links.map((link) => (
          <a key={link.label} href={link.url} className={styles.link} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
