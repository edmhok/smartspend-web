// import { useState } from 'react';

// interface User {
//   name: string;
//   email: string; 
// }

// export const useUserLocalStorage = () => {

//   const [admin, setAdmin] = useState<User | null>(null);
//   const [merchant, setMerchant] = useState<User | null>(null);
//   const [patron, setPatron] = useState<User | null>(null);

//   const loginAdmin = (user: User) => {
//     setAdmin(user);
//     localStorage.setItem('admin', JSON.stringify(user));
//   };
  
//   const logoutAdmin = () => {
//     setAdmin(null);
//     localStorage.removeItem('admin');
//   };

//   const loginMerchant = (user: User) => {
//     setMerchant(user);
//     localStorage.setItem('merchant', JSON.stringify(user));
//   };

//   const logoutMerchant = () => {
//     setMerchant(null);
//     localStorage.removeItem('merchant');
//   };

//   const loginPatron = (user: User) => {
//     setPatron(user);
//     localStorage.setItem('patron', JSON.stringify(user));
//   };

//   const logoutPatron = () => {
//     setPatron(null);
//     localStorage.removeItem('patron');
//   };

//   return {
//     admin,
//     merchant,
//     patron,
//     loginAdmin,
//     logoutAdmin,
//     loginMerchant,
//     logoutMerchant,
//     loginPatron,
//     logoutPatron
//   };

// };
