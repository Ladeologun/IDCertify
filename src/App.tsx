/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { PaperProvider } from 'react-native-paper';
import Register from '@auth/components/Register';




function App(): React.JSX.Element {
 

  return (
    <PaperProvider>
      <Register />
    </PaperProvider>
  );
}



export default App;
