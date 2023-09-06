'use client'

import { useState, ChangeEvent, useEffect } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'

interface Column {
  id: 'id' | 'username' | 'first_name' | 'last_name' | 'address' | 'points'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: string) => string
}

const columns: readonly Column[] = [
  { id: 'id', label: 'ID\u00a0Code', minWidth: 170 },
  { id: 'username', label: 'Email\u00a0Add', minWidth: 100 },
  {
    id: 'first_name',
    label: 'First Name',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'last_name',
    label: 'Last Name',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'address',
    label: 'Address',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'points',
    label: 'Points',
    minWidth: 170,
    align: 'right',
  }
]

interface Row {
  _id: string;
  username: string;
  first_name: string;
  last_name: string;
  address: string;
  points: number;
}

function MemberList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState<Row[]>([]);


  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/merchants`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response);
        if (response.ok) {
          const jsonData: Row[] = await response.json();

          setRows(jsonData);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchData();
  }, []);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row._id}>
                  {columns.map((column: any) => {
                    const value = row[column.id]

                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'string' ? column.format(value) : value}
                      </TableCell>
                    )
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
export default MemberList;

// "use client";

// import React, { useEffect, useState } from "react";
// import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';

// interface Data {
//   _id: string;
//   username: string;
//   first_name: string;
//   last_name: string;
//   address: string;
//   points: number;

// }

// export default function MemberList() {
//   const [merchantData, setMerchantData] = useState<Data[]>([]);

//   const fetchData = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/merchants`, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });

//       if (response.ok) {
//         const jsonData: Data[] = await response.json();
//         setMerchantData(jsonData);
//       } else {
//         console.error("Failed to fetch data");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);


//   const deleteMerchant = async (_id: string) => {
//     try {
//       const token = localStorage.getItem("token");

//       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/merchants/${_id}`, {
//         method: 'DELETE',
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });

//       if (!response.ok) {
//         throw new Error('Failed to delete merchant');
//       }
//       // Refetch merchants after delete
//       fetchData();

//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <div className='p-10'>
//       <h1 className="text-xl pb-3 text-[#218c20]"> Merchants List</h1>
//       <TableContainer component={Paper}>
//         <Table
//           sx={{ minWidth: 650, minHeight: 100 }}
//           aria-label="simple table"
//         >
//           <TableHead>
//             <TableRow>
//               <TableCell>Merchant_ID</TableCell>
//               <TableCell>Username</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Address</TableCell>
//               <TableCell>Points</TableCell>
//               <TableCell></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {merchantData.map(merchant => (
//               <TableRow
//                 key={merchant._id}
//                 sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//               >
//                 <TableCell component="th" scope="row">{merchant._id}</TableCell>
//                 <TableCell component="th" scope="row"> {merchant.username}</TableCell>
//                 <TableCell>{merchant.last_name}, {merchant.first_name}</TableCell>
//                 <TableCell>{merchant.address}</TableCell>
//                 <TableCell>{merchant.points}</TableCell>

//                 <TableCell>
//                   <IconButton
//                     onClick={() => deleteMerchant(merchant._id)}>
//                     <DeleteOutlineIcon fontSize="small" />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//     </div>

//   );
// }




