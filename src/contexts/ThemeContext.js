import React, { createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { color: '#555', ui: '#ddd', bg: '#eee' },
    dark: { color: '#ddd', ui: '#333', bg: '#555' }
  }
  render() { 
    return (
      <ThemeContext.Provider value={{...this.state}}>

      </ThemeContext.Provider>
    );
  }
}
 
export default ThemeContextProvider;
