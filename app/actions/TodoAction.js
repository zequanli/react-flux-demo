import AppDispatcher from '../dispatcher/Appdispatcher';

const TodoAction = {
    create(todo) {
        AppDispatcher.dispatch({
            actionType: 'CREATE_TODO',
            todo: todo
        });
    },
    delete(id) {
        AppDispatcher.dispatch({
            actionType: 'DELETE_TODO',
            id: id
        });
    }
}

export default TodoAction;