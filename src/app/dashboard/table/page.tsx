// "use client";
// import React, {useEffect, useState} from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { Button, CircularProgress } from '@mui/material';
// import { Delete, Edit } from '@mui/icons-material';

// const ViewDashboard = () => {
//   const token = localStorage.getItem('token');
//     if (!token) { 
//       window.location.href = '/dashboard/table';
//       return false;
//     } 
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/tapada/');
//       const jsonData = await response.json();
//       setData(jsonData);
//     } catch (error) {
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleDelete = async (id:number) => {
//     setIsLoading(true);
//     try {
//       const response = await fetch('http://localhost:8000/tapada/'+id, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       fetchData();
//       setTimeout(function() {
//         setIsLoading(false);
//       }, 1000)
      
//     } catch (error) {
//       setTimeout(function() {
//         setIsLoading(false);
//       }, 1000)
//     }
//   };

//   const handleUpdate = (id: any) => {
//     window.location.href="/tapada/?isEdit=1&id="+id;
//   };

//   return (
//     <div className={styles.container}>
//       <div>
//         <Sidebar />
//       </div>
//       <div className={styles.content}>
//         <TableContainer component={Paper}>
//         <h1 className={styles.textColor}>List of Tapadas</h1>
//           <Table aria-label="MuiTableSample">
//             <TableHead>
//               <TableRow>
//                 <TableCell>Date</TableCell>
//                 <TableCell>User</TableCell>
//                 <TableCell>Draw Time</TableCell>
//                 <TableCell>Runner Name</TableCell>
//                 <TableCell>Amount</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {data.map((row:any) => {
//                 const username = row.user.length > 0 ? row.user[0].username : '';
//                 return (
//                 <TableRow key={row.id}>
//                   <TableCell>{row.date}</TableCell>
//                   <TableCell>{username}</TableCell>
//                   <TableCell>{row.draw_time}</TableCell>
//                   <TableCell>{row.runner_name}</TableCell>
//                   <TableCell>{row.amount}</TableCell>
//                   <TableCell>
//                     <Button variant="outlined" startIcon={<Edit />} onClick={() => handleUpdate(row.id)}>
//                       Update
//                     </Button>
//                     <Button variant="outlined" startIcon={<Delete />} onClick={() => handleDelete(row.id)}>
//                       Delete
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//                 )
//               })}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
//       {isLoading && (<div className={styles.vhcenter}><CircularProgress /></div>)}
//     </div>
//   );
// };

// export default ViewTapadas;
