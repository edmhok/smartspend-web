'use client'

import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Link from 'next/link';
import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface propsType {
    itemId : number;
    thumbnail: string;
    desc: string;
    qty: number;
    price: number;
    total: number;
    updateQty: (newQty: number) => void; 
    onDelete: (itemId: number) => void;
} 

  


const CartInfo:React.FC<propsType> = (
    {
        itemId,
        thumbnail,
        desc,
        qty,
        price,
        total,
        updateQty,
        onDelete
    }) => {
  
    const handleQtyChange = (newQty: number) => {
    // update quantity
    updateQty(newQty);
    };
    const handleDelete = (itemId: number) => {
        // Call callback to delete item
        onDelete(itemId);
      }


  return (
    <div className=" w-full flex flex-col items-center">
        <div className="bg-[#EFEFEF] w-full justify-center flex flex-row gap-x-[150px] p-[20px] mb-10">
            <div className="text-sm text-fuchsia-500 ">
                <CheckCircleIcon />
                Cart Information
            </div>
            <div className="text-sm text-fuchsia-500 ">
                <CheckCircleOutlineIcon />
                Delivery Method
            </div>
            <div className="text-sm text-fuchsia-500 ">
                <CheckCircleOutlineIcon />
                Confirmation
            </div>
        </div>
        <div>
            <div className="bg-white drop-shadow-md w-[1040px] h-auto mb-5 pb-5">
                <div className='text-2xl text-black ps-10 py-7'>Order Summary</div>
                    <div className='flex-col flex space-y-2 ps-4'>
                        <div className='bg-[#F6F6F6] p-[20px] w-[98%] pb-2'>
                            <ul className='flex flex-row text-thin justify-start gap-[110px] '>
                                <li>Thumbnail</li>
                                <li>Description</li>
                                <li>Quantity</li>
                                <li>Unit Price</li>
                                <li>SubTotal Price</li>
                            </ul>
                        </div>
                        <div className='bg-[#F6F6F6] p-[20px] w-[98%] pb-1 text-center'>
                            <ul className='flex flex-row text-thin justify-start gap-[120px]'>
                                <li>{thumbnail}</li>
                                <li className='ps-6'>{desc}</li>
                                <li className='ps-3'>
                                <div className=' '>
                                    <button type={'button'}
                                        className='btn'
                                        onClick={() => handleQtyChange(qty - 1)}
                                        >
                                        -
                                    </button>
                                    <input 
                                        className='w-8 bg-[#F6F6F6] text-center'
                                        type="number" 
                                        value={qty}
                                        onChange={e => handleQtyChange(Number(e.target.value))} 
                                        />
                                    <button type={'button'}
                                        className='btn'
                                        onClick={() => handleQtyChange(qty + 1)}
                                        >
                                        +
                                    </button>
                                </div>
                                </li>
                                <li>{price}</li>
                                <li className='ps-6'>{total}</li>
                                <li className='ps-5'>
                                <Tooltip title="Delete">
                                    <IconButton>
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                <div className='px-4 py-3 flex justify-end mr-[100px] font-semibold'>
                    Grand Total : {'₱ total'}
                </div>
                
            </div>
          
         
            <div className='w-full flex justify-end mb-5 space-x-4'>
                <Link href={'/checkout/b'} >
                <button className='px-4 py-2 text-white text-lg font-semibold bg-fuchsia-400'>Proceed to CheckOut</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default CartInfo