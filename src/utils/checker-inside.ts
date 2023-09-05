// import { SITE_URL } from "./constants";

export const AuthCheckerInside = (window:any) => {
 
    // console.log('init');
    
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
  
    if (!token) {
      window.location.href = '/';
    } 
    else {
      if (! window.location.href.includes(`/merchant`) && role === 'merchant') {
        console.log('not a merchant, go back to merchant page...')
        window.location.href = '/merchant';
      } 
      if (! window.location.href.includes(`/patron`) && role === 'patron') {
        console.log('not a patron, go back to patron page...')
        window.location.href = '/patron';
      } 
      if (! window.location.href.includes(`/admin`) && role === 'admin') {
        console.log('not a admin, go back to admin page...')
        window.location.href = '/admin';
      } 
    }
   
  } 
  
  