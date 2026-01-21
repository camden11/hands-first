import Image from 'next/image';
import styles from './ShowCard.module.css';

interface ShowCardProps {
  image: string;
  title: string;
  location: string;
  dateLabel: string;
  ticketsLabel?: string;
  ticketsUrl?: string;
}

export default function ShowCard({
  image,
  title,
  location,
  dateLabel,
  ticketsLabel,
  ticketsUrl,
}: ShowCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
      </div>
      <div className={styles.details}>
        <div className={styles.titleRow}>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <p className={styles.location}>{location}</p>
        <p className={styles.date}>{dateLabel}</p>
        {ticketsLabel && ticketsUrl && (
          <a href={ticketsUrl} className={styles.action} target="_blank" rel="noopener noreferrer">
            {ticketsLabel}
          </a>
        )}
      </div>
    </article>
  );
}
