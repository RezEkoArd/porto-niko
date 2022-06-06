import React from 'react';
import {createRoot} from 'react-dom/client';
import PortoApp from './components/PortoApp';

const root = createRoot(document.getElementById("root"));
root.render(<PortoApp/>)