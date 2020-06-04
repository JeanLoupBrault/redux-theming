import React from 'react';
import About from './components/About';
import ApplyTheme from './components/ApplyTheme';
import './styles.css';
import { Provider } from 'react-redux';
import { reduxStore } from './react-redux/config';

function App() {
  const store = reduxStore();

  return (
    <Provider store={store}>
      <ApplyTheme>
        <div className='App'>
          <About />
        </div>
      </ApplyTheme>
    </Provider>
  );
}

export default App;
