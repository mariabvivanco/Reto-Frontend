/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useReducer } from 'react';
import { ThemeProvider } from 'react-bootstrap';
import RoutesApp from './routes';
import { RetoFrontReducer, INITIAL_STATE } from './reducers/RetoFrontReducer';

export const AppContext = React.createContext([]);

const App = () => {
  const [state, dispatch] = useReducer(RetoFrontReducer, INITIAL_STATE);
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >

      <AppContext.Provider value={{ state, dispatch }}>
        <RoutesApp />
      </AppContext.Provider>
    </ThemeProvider>
  
  );
};

export default App;
