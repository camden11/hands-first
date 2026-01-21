import Image from 'next/image';
import styles from './ReleaseCard.module.css';

interface ReleaseCardProps {
  image: string;
  title: string;
  type: string;
  dateLabel: string;
  actionLabel: string;
  actionUrl: string;
}

export default function ReleaseCard({
  image,
  title,
  type,
  dateLabel,
  actionLabel,
  actionUrl,
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
        <a href={actionUrl} className={styles.action}>
          {actionLabel}
        </a>
      </div>
    </article>
  );
}
