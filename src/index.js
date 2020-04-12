import Tooltip from './tooltip';
import Dropdown from './dropdown';
import Tabs from './tabs.js';
import Snackbar from './snackbar.js';

//create a tooltip

const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// create dropdowns

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
	const instance = new Dropdown(dropdown);
	instance.init();
})

// create tabs 
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

// create a snackbar

const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');

button.addEventListener('click', () => {
	snackbar.show('You clicked me :) ');
})