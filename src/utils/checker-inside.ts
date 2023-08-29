// import { SITE_URL } from "./constants";

export const AuthCheckerInside = (window:any) => {
 
    // console.log('init');
    
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
  
    if (!token) {
      window.location.href = '/';
    } 
    else {
      if (! window.location.href.includes(`${process.env.NEXT_PUBLIC_SITE_URL}/merchant`) && role === 'merchant') {
        window.location.href = '/merchant';
      } 
      if (! window.location.href.includes(`${process.env.NEXT_PUBLIC_SITE_URL}/patron`) && role === 'patron') {
        window.location.href = '/patron';
      } 
      if (! window.location.href.includes(`${process.env.NEXT_PUBLIC_SITE_URL}/admin`) && role === 'admin') {
        window.location.href = '/admin';
      } 
    }
   
  } 
  
  