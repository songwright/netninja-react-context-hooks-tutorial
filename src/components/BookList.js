import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div className='book-list' style={{ color: theme.color, background: theme.bg}}>
      <ul>
        <li style={{ background: theme.ui }}>The Way of Kings</li>
        <li style={{ background: theme.ui }}>The Name of the Wind</li>
        <li style={{ background: theme.ui }}>The Final Emplire</li>
      </ul>
    </div>
  );
}

export default BookList;