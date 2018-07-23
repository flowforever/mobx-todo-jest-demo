// @flow
import React from 'react';
import {inject, observer} from 'mobx-react';
import PropTypes from 'prop-types';


@inject('todoStore', 'appStore')
@observer
export class Header extends React.Component {
    static propTypes = {
        todoStore: PropTypes.object.isRequired,
        appStore: PropTypes.object.isRequired,
    };

    onKeyDown = e => {
        if(e.keyCode === 13) {
            this.props.todoStore.addTodo(e.target.value);
            this.props.appStore.setTodoText('');
        }
    };

    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    autoFocus
                    onKeyDown={this.onKeyDown}
                    value={ this.props.appStore.newTotoText}
                    onChange={e=> this.props.appStore.setTodoText(e.target.value)}
                />
            </header>
        );
    }
}