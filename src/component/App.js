import React, {Component} from 'react';
import {List} from "./List";
import {Provider} from "mobx-react";
import * as stores from "../stores";
import {Header} from "./Header/Header";
import _ from 'lodash';

import 'todomvc-app-css/index.css';

const storeInstances = _.pickBy(stores, (value, key) => /^[a-z].+Store$/.test(key));

export class App extends Component {
    render() {
        return (
            <Provider {...storeInstances}>
                <section className="todoapp">
                    <Header/>

                    <List/>

                    <footer className="footer">
                        <span className="todo-count"><strong>0</strong> item left</span>
                        <ul className="filters">
                            <li>
                                <a className="selected" href="#/">All</a>
                            </li>
                            <li>
                                <a href="#/active">Active</a>
                            </li>
                            <li>
                                <a href="#/completed">Completed</a>
                            </li>
                        </ul>
                        <button className="clear-completed">Clear completed</button>
                    </footer>
                </section>
            </Provider>
        );
    }
}