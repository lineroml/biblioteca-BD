import LayoutNoIndex from 'components/layoutNoIndex';
import Router, { useRouter } from 'next/router';
import axios from 'axios';
import safeJsonStringify from 'safe-json-stringify';
import { useState } from 'react';
import Table from 'components/table';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

export async function getServerSideProps(ctx) {
  const response = await axios.get('https://bibliotecamongo.herokuapp.com/usuarios');
  const usuarios = response.data;
  console.log('response ', usuarios);
  return {
    props: { usuariosProp: JSON.parse(safeJsonStringify(usuarios)) },
  };
}

const Usuarios = ({ usuariosProp }) => {
  const router = useRouter();
  const [usuarios, setUsuarios] = useState(usuariosProp);

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Nombre', width: 70 },
    { field: 'rut', headerName: 'RUT', width: 130, sortable: false },
  ];

  var cont = 0;

  const rows = usuarios.map((usuario) => {
    return usuario;
  });
  console.log('rows: ', rows);

  return (
    <LayoutNoIndex>
      <div className='w-full  flex justify-center'>
        <div className='flex text-2xl w-11/12 sm:mt-0 mt-2 '>
          <div onClick={() => router.push('./')} className=' h-9 cursor-pointer'>
            Inicio /
          </div>
          <div className='pl-1 font-semibold text-grisLogo h-9'> Usuarios </div>
        </div>
      </div>
      <Table registros={usuarios} link='/usuarios/' />
    </LayoutNoIndex>
  );
};

export default Usuarios;
