import React from 'react';
import { createRoot } from 'react-dom/client';
import Top10 from './component/top10/top10';

const content = document.querySelector('#here');

const top10 = <Top10 />;

const root = createRoot(content);
root.render(top10);
