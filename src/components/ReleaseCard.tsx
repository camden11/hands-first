import Image from 'next/image';
import styles from './ReleaseCard.module.css';

interface StreamingLink {
  label: string;
  url: string;
}

interface ReleaseCardProps {
  image: string;
  title: string;
  type: string;
  dateLabel: string;
  actionLabel?: string;
  actionUrl?: string;
  streamingLinks?: StreamingLink[];
}

export default function ReleaseCard({
  image,
  title,
  type,
  dateLabel,
  actionLabel,
  actionUrl,
  streamingLinks,
}: ReleaseCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
      </div>
      <div className={styles.details}>
        <div className={styles.titleRow}>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.type}>{type}</span>
        </div>
        <p className={styles.date}>{dateLabel}</p>
        {streamingLinks && streamingLinks.length > 0 ? (
          <div className={styles.streamingLinks}>
            {streamingLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.url} 
                className={styles.streamingLink} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : actionLabel && actionUrl ? (
          <a href={actionUrl} className={styles.action}>
            {actionLabel}
          </a>
        ) : null}
      </div>
    </article>
  );
}
