import './styles.css';
import { home } from './pages/home.js';

let contentDiv = document.querySelector('#content');
contentDiv.appendChild(home());
