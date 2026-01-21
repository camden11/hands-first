import InnerPageLayout from '@/components/InnerPageLayout';
import Image from 'next/image';
import styles from './about.module.css';

export default function About() {
  return (
    <InnerPageLayout title="ABOUT" href="/about">
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/band.jpg" 
            alt="Hands First" 
            fill 
            style={{ objectFit: 'cover' }} 
            priority
          />
        </div>
        <p className={styles.bio}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac purus nisi. 
          Pellentesque tempus est sit amet nunc sollicitudin, at pulvinar orci fringilla. Duis 
          interdum arcu a vulputate molestie. Fusce luctus, mauris nec fermentum bibendum, arcu 
          dui commodo enim, vitae tincidunt diam lectus at neque. Donec nunc mi, aliquet quis dui 
          in, consequat commodo arcu. Curabitur vehicula sapien vitae neque molestie imperdiet. 
          Suspendisse sit amet diam finibus, semper nunc in, interdum elit. Sed elit massa, 
          tincidunt ac sapien a, euismod mattis quam. Phasellus molestie ligula sit amet tincidunt 
          semper. Etiam rhoncus facilisis massa, eget tempus dolor vehicula quis. Quisque vel 
          pretium justo, eget auctor enim. Vestibulum tempor imperdiet malesuada. Ut tristique 
          viverra sem, at pulvinar lectus laoreet non.
        </p>
      </div>
    </InnerPageLayout>
  );
}
