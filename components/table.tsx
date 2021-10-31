import axios from 'axios';
import { useRouter } from 'next/router';
import Modal from 'components/modal';
import { useState } from 'react';

const Table = ({ registros, link }) => {
  const router = useRouter();
  const [modalOn, setModalOn] = useState(true);
  const handleClose = () => setModalOn(false);

  const borrarRegistro = async (e, id) => {
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

  const deleteRegister = async (e, id) => {
    e.preventDefault();
    setModalOn(true);
  };

  return (
    <div className='flex flex-col justify-center w-full h-4/5 items-center'>
      <div className='flex sm:w-4/6 w-11/12  justify-center'>
        <div className='flex sm:w-5/6 w-11/12  '>
          <div className='w-1/3 h-11 flex justify-center'>
            <div className='bg-rosadoBoton rounded-t-lg  sm:w-2/3 w-11/12 flex justify-center sm:text-xl text-base font-semibold items-center'>
              Nombre
            </div>
          </div>
          <div className='w-1/3 flex justify-center'>
            <div className='bg-rosadoBoton rounded-t-lg  sm:w-2/3 w-11/12 flex justify-center sm:text-xl text-base font-semibold items-center'>
              RUT
            </div>
          </div>
          <div className='w-1/3 flex justify-center'>
            <div className='bg-rosadoBoton rounded-t-lg  sm:w-2/3 w-11/12 flex justify-center sm:text-xl text-base font-semibold items-center'>
              Acciones
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-300 sm:w-4/6 w-11/12 h-4/6 rounded-3xl shadow-lg flex justify-center items-center'>
        <div className='bg-white h-5/6 w-11/12 sm:rounded-3xl rounded-xl flex flex-col items-center overflow-y-auto'>
          {registros.map((registro) => {
            return (
              <div className='flex w-11/12 justify-center bg-gray-400 h-auto mt-1 sm:rounded-full rounded-xl items-center'>
                <Modal isOpen={modalOn} setIsOpen={setModalOn} link={link} id={registro.id}>
                  <div className='h-1/2  text-xl flex    justify-center items-center '>
                    ¿Está seguro de borrar este item?
                  </div>
                  <div className='flex h-1/2 justify-center gap-2 items-center '>
                    <div
                      onClick={(e) => {
                        borrarRegistro(e, registro.id);
                      }}
                      className='cursor-pointer bg-rosadoBoton border-4 border-red-500 sm:w-5/12 w-full h-10 rounded-md font-semibold flex justify-center items-center shadow-xl hover:shadow-none'
                    >
                      SI, deseo borrarlo.
                    </div>
                    <div
                      onClick={() => {
                        handleClose();
                      }}
                      className='cursor-pointer bg-rosadoBoton sm:w-5/12 w-full h-10 rounded-md font-semibold flex justify-center items-center shadow-xl hover:shadow-none'
                    >
                      NO, llévame atrás.
                    </div>
                  </div>
                </Modal>
                <div className='w-1/3 flex h-20 sm:h-12 hover:h-auto justify-center'>
                  <div className='w-10/12 justify-center threedots flex items-center text-lg'>
                    {' '}
                    {registro.nombre}
                  </div>
                </div>
                <div className='w-1/3 flex h-12 min-h-12 hover:h-auto justify-center'>
                  <div className='w-10/12 flex items-center  justify-center truncate text-lg  '>
                    {' '}
                    {registro.RUT}{' '}
                  </div>
                </div>
                <div className='w-1/3 flex h-12 min-h-12 hover:h-auto justify-center'>
                  <div className='w-10/12 flex sm:flex-row flex-col  gap-1 items-center justify-center  sm:text-lg text-base  '>
                    <div className='font-semibold bg-rosadoBoton sm:w-1/2 w-full rounded-lg shadow-xl hover:shadow-none flex justify-center items-center'>
                      Prestamos
                    </div>
                    <div
                      onClick={(e) => {
                        deleteRegister(e, registro.id);
                      }}
                      className='font-semibold bg-rosadoBoton sm:w-1/2 w-full rounded-lg shadow-xl hover:shadow-none flex justify-center items-center'
                    >
                      Eliminar
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='sm:w-4/6 w-11/12 flex justify-end pt-3'>
        <div
          onClick={() => {
            /**Abrir modal para meter datos y agregar */
          }}
          className='bg-rosadoBoton sm:w-3/12 w-full h-10 rounded-md font-semibold flex justify-center items-center shadow-xl hover:shadow-none'
        >
          Agregar Usuario
        </div>
      </div>
    </div>
  );
};

export default Table;
