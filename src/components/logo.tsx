import Image from 'next/image';

const Logo = () => (
  <div className='relative h-12 w-12 md:h-12 md:w-12'>
    <Image
      src='/unnamed.png'
      fill
      alt='logo'
      style={{ objectFit: 'contain' }} 
    />
  </div>
);

export default Logo;
