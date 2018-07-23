import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './Header';
import {AppStore, TodoStore} from "../../stores/index";

it('render <Header/>', () => {
    const appStore = new AppStore();
    const todoStore = new TodoStore();

    const div = document.createElement('div');
    ReactDOM.render(<Header todoStore={todoStore} appStore={appStore}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});