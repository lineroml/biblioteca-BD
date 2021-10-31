import NextImage from 'next/image';
import Router, { useRouter } from 'next/router';

const LayoutNoIndex = ({ children }) => {
  const router = useRouter();

  return (
    <div className='w-screen h-screen fixed z-30 flex flex-col'>
      <div className='h-28 w-52 relative flex self-center  -mt-5 hover:translate-y-3 transform duration-150 ease-in-out'>
        <NextImage
          onClick={() => router.push('./')}
          className='cursor-pointer'
          src='/resources/header-left.svg'
          objectFit='contain'
          layout='fill'
        />
      </div>
      {children}
    </div>
  );
};

export default LayoutNoIndex;
