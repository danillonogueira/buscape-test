import './styles/main.scss';
import { $ } from './helpers/Alias';
import { Controller } from './core/Controller';

const controller = new Controller();

$('.menu').addEventListener('click', controller.hamburgerMenuClick.bind(controller));