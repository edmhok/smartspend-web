import { SITE_URL } from "./constants";

export const AuthCheckerInside = () => {
    console.log('init');
    const token = window.localStorage.getItem('token');
    const role = window.localStorage.getItem('role');
  
    if (!token) {
        window.location.href = '/';
    } 
    else {
      if (!window.location.href.includes(`${SITE_URL}/merchant`) && role === 'merchant') {
          window.location.href = '/merchant';
      } 
      if (!window.location.href.includes(`${SITE_URL}/patron`) && role === 'patron') {
        window.location.href = '/patron';
      } 
      if (!window.location.href.includes(`${SITE_URL}/admin`) && role === 'admin') {
        window.location.href = '/admin';
      } 
    }
   
  } 
  
  