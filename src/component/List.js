// @flow

import React from 'react';
import PropTypes from 'prop-types';
import {StatusTypes, TodoItemModel} from "../models";
import {inject, observer} from 'mobx-react';

interface TodoItemProps {
    item: TodoItemModel;
}

@observer
export class TodoItem extends React.Component<TodoItemProps> {

    /** @returns {TodoItem|Object}*/
    getItem() {
        const {item} = this.props;
        return item;
    }

    onTextChange = (e) => {
        this.getItem().setText(e.target.value);
    };

    toggleEditing = () => {
        this.getItem().setIsEditing(
            !this.getItem().isEditing
        );
    };

    render() {
        const item = this.getItem();
        const {isEditing} = item;
        return (
            <li className={item.status === StatusTypes.inProgress ? '' : 'completed'}>
                <div className="view" onDoubleClick={this.toggleEditing}
                     style={{display: isEditing ? 'none' : 'block'}}>
                    <input className="toggle" type="checkbox"
                           checked={item.status === StatusTypes.completed}/>
                    <label>{item.text}</label>
                    <button className="destroy"></button>
                </div>
                <input className="edit" style={{display: !isEditing ? 'none' : 'block'}}
                       onBlur={this.toggleEditing} value={item.text} onChange={this.onTextChange}/>
            </li>
        );
    }
}

@inject('todoStore')
@observer
export class List extends React.Component {
    static propTypes = {
        todoStore: PropTypes.object.isRequired,
    };

    render() {
        return (
            <section className="main">
                <input id="toggle-all" className="toggle-all" type="checkbox"/>
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                    {this.props.todoStore.list.map(o => (<TodoItem key={o.id} item={o}/>))}
                </ul>
            </section>
        )
    }
}