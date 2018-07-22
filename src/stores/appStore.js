import {action, observable} from 'mobx';

export class AppStore {
    @observable
    newTotoText = '';

    @action
    setTodoText(text) {
        this.newTotoText = text;
    }
}

export const appStore = new AppStore();
export default appStore;