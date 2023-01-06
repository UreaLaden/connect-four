import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { registerIcons } from "@fluentui/react"
import { svgIcons } from './utils/SVGIcons';

registerIcons(svgIcons);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);
