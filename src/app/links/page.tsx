import InnerPageLayout from '@/components/InnerPageLayout';
import styles from './links.module.css';

const links = [
  { 
    label: 'Tickets for 2/7 Single Release Singles Pageant', 
    url: 'https://www.eventbrite.com/e/singles-release-singles-paegant-tickets-1980113244016?aff=oddtdtcreator' 
  },
  { 
    label: 'Presave Mask', 
    url: 'https://distrokid.com/hyperfollow/handsfirst/mask' 
  },
  { 
    label: 'Email Us', 
    url: 'mailto:handsfirstband@gmail.com' 
  },
];

export default function Links() {
  return (
    <InnerPageLayout title="LINKS" href="/links">
      <div className={styles.linksList}>
        {links.map((link) => (
          <a 
            key={link.label} 
            href={link.url} 
            className={styles.link}
            target={link.url.startsWith('http') ? '_blank' : undefined}
            rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
    </InnerPageLayout>
  );
}
