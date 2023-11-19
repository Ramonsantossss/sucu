import { BookOpen, Github, Mail } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='container px-3 sm:mx-auto my-8'>
      <hr className='my-6 border-base-content/10 sm:mx-auto lg:my-4' />
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2'>
        <Link href='/' className='flex items-center mb-4 sm:mb-0'>
          <BookOpen className='h-8 w-8 mr-3 stroke-current' />
          <span className='self-center text-lg sm:text-2xl font-semibold'>
            MangasTrevo™
          </span>
        </Link>
        <ul className='flex flex-wrap items-center text-sm font-medium mx-1 sm:mx-0'></ul>
      </div>
      <p className='mb-1'>
        © 2023{' '}
        <Link href='/' className='hover:underline'>
          MangasTrevo™
        </Link>
        . All Rights Reserved.
      </p>
      <p className='text-sm'>
        The works contained on this page are authored by third parties. All
        material available is loaded from the .
      </p>
    </footer>
  );
};
