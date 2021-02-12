import 'vite/dynamic-import-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

const Test = styled.div`
  background: red;
`;

ReactDOM.render(<Test>Testing styled components</Test>, document.getElementById('root'));