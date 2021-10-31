import { useRouter } from 'next/router';
import axios from 'axios';
import { useState } from 'react';

const Modal = ({ isOpen, setIsOpen, link, id, children }) => {
  const router = useRouter();
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const iden = useState(id);

  const deleteRegister = async (e, id) => {
    e.preventDefault();
    try {
      await axios.delete(`${link}${id}`).then((res) => {
        if (res.status === 200) {
          console.log('Se ha borrado satisfactoriamente.');
          router.reload();
        } else {
          console.log('Ha ocurrido un error.');
        }
      });
    } catch (e) {
      console.log('error', e);
    }
  };

  return (
    <div
      className={`${
        isOpen ? 'flex' : 'hidden'
      }  fixed bg-bgModal h-full w-full z-10 flex-col items-center justify-center inset-0 bg-black bg-opacity-60 `}
    >
      <div className='bg-white sm:w-1/5 w-almost  h-2/6 rounded-lg shadow-boton flex-col'>
        <div className='h-full w-full flex-col justify-center items-center '>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
