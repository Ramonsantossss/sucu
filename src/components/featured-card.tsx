import Link from 'next/link';
import { HighLights } from '@/types/highlights';
import Image from 'next/image';

interface FeaturedCardProps {
  item: HighLights;
}

const gradient =
  'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)';

export const FeaturedCard = ({ item }: FeaturedCardProps) => {
  const link = `/manga/${item.id}`;

  return (
    <li
      className='flex sm:justify-evenly snap-center h-full w-full shrink-0'
      style={{
        backgroundImage: gradient,
        backgroundColor: `#${item.color}`,
        color: `#${item.foreground}`,
      }}
    >
      <Link href={link} className='flex aspect-[2/3] w-auto h-full'>
        <Image
          src={item.cover}
          alt={`Imagem de ${item.title}`}
          className='object-cover object-center'
          width={192}
          height={288}
        />
      </Link>
      <div className='flex flex-col justify-center text-center grow p-2 sm:px-6 sm:py-4'>
        <Link className='font-bold text-xl hover:underline' href={link}>
          {item.title}
        </Link>
        <span className='text-sm'>{item.date.toLocaleDateString('pt-BR')}</span>
      </div>
    </li>
  );
};
