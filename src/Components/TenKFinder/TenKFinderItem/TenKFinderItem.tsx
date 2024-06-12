import React from 'react'
import { CompanyTenK } from '../../../company'
import { Link } from 'react-router-dom';

interface Props {
    tenK: CompanyTenK;
}

const TenKFinderItem = ({tenK}: Props) => {
    const fillingData = new Date(tenK.fillingDate).getFullYear();

  return <Link
            reloadDocument
            to={tenK.finalLink}
            type='button' //make sure to put button unless it might act strange
            className='inline-flex items-center p-4 text-md text-white bg-lightGreen rounded m-4'
  > 
    {" "} 10K - {tenK.symbol} - {fillingData}
  </Link>
}

export default TenKFinderItem