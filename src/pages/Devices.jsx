import { useState } from 'react';
import DeviceSearch from '../components/BasicTable/DeviceSearch';
import BasicTable from '../components/BasicTable/BasicTable';
import data from '../data/data.json';
import Header from '../components/Heade/Header';

const Devices = () => {
  const [tableData, setTableData] = useState(data);

  const columns = [
    {
      header: 'SI.NO',
      accessorKey: 'SI_NO',
      footer: 'SI_NO',

    },
    {
      header: 'Status',
      accessorKey: 'status',
      footer: 'Status',

    },
    {
      header: 'Device Type',
      accessorKey: 'Device Type',
      footer: 'Device Type',
 
    },
    {
      header: 'Device Name',
      accessorKey: 'Device Name',
      footer: 'Device Name',
   
    },
    {
      header: 'Date Issued',
      accessorKey: 'Date Issune',
      footer: 'Date Issune',

    },
    {
      header: 'One Time Passcode',
      accessorKey: 'One Time Passcode',
      footer: 'One Time Passcode',
     
    },
  ];



  return (
    <>
      <Header />
      <DeviceSearch />
      <BasicTable data={tableData} columns={columns} />
    </>
  );
};

export default Devices;
