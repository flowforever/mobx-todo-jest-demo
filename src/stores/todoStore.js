import {action, computed, observable} from 'mobx';
import {StatusTypes, TodoItemModel} from "../models";

export class TodoStore {
    @observable
    list = [];

    @computed
    get completedList() {
        return this.list.filter(o => o.status === StatusTypes.completed);
    }

    @computed
    get inProgressList() {
        return this.list.filter(o => o.status === StatusTypes.inProgress);
    }

    @action
    addTodo(text) {
        this.list.push(new TodoItemModel(text));
    }


    @action
    remove(id) {
        this.list.remove(
            this.list.find(o => o.id === id)
        )
    }

    @action
    clear() {
        this.list.clear();
    }
}

export const todoStore = new TodoStore();
