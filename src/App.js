import React from 'react';
import { RecoilRoot } from 'recoil';

import Todos from './Todos';

function App() {
  return (
    <RecoilRoot>
      <Todos />
    </RecoilRoot>
  );
}

export default App;
