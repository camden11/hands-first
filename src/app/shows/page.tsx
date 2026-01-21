import InnerPageLayout from '@/components/InnerPageLayout';
import ShowCard from '@/components/ShowCard';

const shows = [
  {
    image: '/2_7_empire_stage.jpeg',
    title: 'FEB 07 / EMPIRE STAGE',
    location: 'BROOKLYN, NY',
    dateLabel: 'Feb 07 2026',
    ticketsLabel: 'Tickets',
    ticketsUrl: '#',
  },
];

export default function Shows() {
  return (
    <InnerPageLayout title="SHOWS" href="/shows">
      {shows.map((show) => (
        <ShowCard key={show.title} {...show} />
      ))}
    </InnerPageLayout>
  );
}
