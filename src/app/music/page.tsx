import InnerPageLayout from '@/components/InnerPageLayout';
import ReleaseCard from '@/components/ReleaseCard';

const releases = [
  {
    image: '/mask_single.jpg',
    title: 'Mask',
    type: 'Single',
    dateLabel: 'Releases Feb 06 2026',
    actionLabel: 'Spotify Presave',
    actionUrl: 'https://distrokid.com/hyperfollow/handsfirst/mask',
  },
  {
    image: '/sorrow_ep.jpg',
    title: 'Sorrow',
    type: 'EP',
    dateLabel: 'Feb 23 2024',
    streamingLinks: [
      { label: 'BANDCAMP', url: 'https://handsfirst.bandcamp.com/album/sorrow' },
      { label: 'SPOTIFY', url: 'https://open.spotify.com/album/0HHQUcVzFQUncQHXeqbyEY?si=wmb35XKnQL65k1qiyLSTqA' },
      { label: 'APPLE MUSIC', url: 'https://music.apple.com/us/album/sorrow/1732652360' },
    ],
  },
  {
    image: '/hands_first_ep.jpg',
    title: 'Hands First',
    type: 'EP',
    dateLabel: 'Oct 13 2023',
    streamingLinks: [
      { label: 'BANDCAMP', url: 'https://handsfirst.bandcamp.com/album/hands-first-ep-2' },
      { label: 'SPOTIFY', url: 'https://open.spotify.com/album/7eIvrRUqpV8sraJXJVUOHP?si=jUS2Qc9uTjSZJ6q-KB6KOw' },
      { label: 'APPLE MUSIC', url: 'https://music.apple.com/us/album/hands-first-ep/1711963586' },
    ],
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
