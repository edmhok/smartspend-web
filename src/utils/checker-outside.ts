
export const AuthCheckerOutside = () => {
    console.log('init');
    const token = window.localStorage.getItem('token');
    const role = window.localStorage.getItem('role');
  
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
  
  