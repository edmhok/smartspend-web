export const generateRandomString = (length = 10) => {
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    var charLength = chars.length;
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
}

export const truncateString = (str, maxLength = 20) => {
    if (str.length <= maxLength) {
      return str;
    }
    
    const truncatedStr = str.slice(0, maxLength - 3); // Leave space for the ellipsis
    return truncatedStr + '...';
  }