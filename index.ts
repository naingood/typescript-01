// Import stylesheets
import './style.css';
import * as greeter from './greeter.ts';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = greeter.pray('sdf') ;