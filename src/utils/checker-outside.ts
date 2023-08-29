
export const AuthCheckerOutside = (window:any) => {
    console.log('init');
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
  
    if (token) {
      if (role === 'admin') {
         window.location.href = '/admin';
      }
      if (role === 'merchant') {
         window.location.href = '/merchant'; 
      }
      if (role === 'patron') {
         window.location.href = '/patron';
      }
    } 
  } 
  
  