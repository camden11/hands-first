import InnerPageLayout from '@/components/InnerPageLayout';
import ReleaseCard from '@/components/ReleaseCard';

const releases = [
  {
    image: '/mask.png',
    title: 'Mask',
    type: 'Single',
    dateLabel: 'Releases Feb 06 2026',
    actionLabel: 'Presave',
    actionUrl: '#',
  },
  {
    image: '/carousel.png',
    title: 'Sorrow',
    type: 'EP',
    dateLabel: 'Feb 23 2024',
    actionLabel: 'Listen',
    actionUrl: '#',
  },
  {
    image: '/mask-2.png',
    title: 'Hands First',
    type: 'EP',
    dateLabel: 'Oct 13 2023',
    actionLabel: 'Listen',
    actionUrl: '#',
  },
];

export default function Music() {
  return (
    <InnerPageLayout title="MUSIC" href="/music">
      {releases.map((release) => (
        <ReleaseCard key={release.title} {...release} />
      ))}
    </InnerPageLayout>
  );
}
