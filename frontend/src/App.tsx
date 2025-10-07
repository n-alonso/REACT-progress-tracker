import { Outlet } from 'react-router';
import { MantineProvider } from '@mantine/core';

import { Header, Footer } from './components';

import '@mantine/core/styles.css';
import styles from './App.module.css';

function App() {
  return (
    <MantineProvider>
      <div className={styles.appContainer}>
        <Header />
        <div className={styles.page}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </MantineProvider>
  )
}

export default App;
