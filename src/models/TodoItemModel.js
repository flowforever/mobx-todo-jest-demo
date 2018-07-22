import {observable, action} from "mobx";

export const StatusTypes = {
    completed: 'completed',
    inProgress: 'inProgress',
};

export class TodoItemModel {
    constructor(text) {
        this.setText(text);
    }

    @observable
    id = Math.random();

    @observable
    status = StatusTypes.inProgress;

    @observable
    text = '';

    @observable
    isEditing = false;

    @action
    setStatus(status) {
        this.status = status;
    }

    @action
    setText(text) {
        this.text = text;
    }

    @action
    setIsEditing(isEditing) {
        this.isEditing = isEditing;
    }
}

