import NextImage from 'next/image';
import Router, { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  return (
    <div className='h-full w-full flex flex-col justify-center items-center z-0'>
      <div className='h-2/6 relative w-full '>
        <NextImage src='/resources/logo.svg' objectFit='contain' layout='fill' />
      </div>
      <div className='flex h-2/6 flex-col sm:w-3/6 w-4/5 justify-center items-center'>
        <button
          onClick={() => router.push('/usuarios')}
          className='sm:w-2/6 w-full mb-2 botonindex'
        >
          Usuarios
        </button>
        <div className='grid grid-cols-2 sm:w-2/6 w-full  gap-2'>
          <button onClick={() => {}} className='w-full botonindex'>
            Usuarios
          </button>
          <button onClick={() => {}} className='w-full botonindex'>
            Usuarios
          </button>
          <button onClick={() => {}} className='w-full botonindex'>
            Usuarios
          </button>
          <button onClick={() => {}} className='w-full botonindex'>
            Usuarios
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
