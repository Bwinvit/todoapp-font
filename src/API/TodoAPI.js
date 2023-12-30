import axios from "axios";

const TodoGetAPI = async (id) => {
    const res = await axios({
        method: "post",
        url: `${process.env.REACT_APP_SERVICE_PORT}/todo/get`,
        headers: {},
        data: {
            id: id,
        },
    });

    return res.data;
};

const TodoDoneAPI = async (todoId) => {
    const res = await axios({
        method: "put",
        url: `${process.env.REACT_APP_SERVICE_PORT}/todo/done`,
        headers: {},
        data: {
            todoId: todoId,
        },
    });

    return res.data;
};

const TodoCreateAPI = async (userId, title, description) => {
    const res = await axios({
        method: "post",
        url: `${process.env.REACT_APP_SERVICE_PORT}/todo/create`,
        headers: {},
        data: {
            userId: userId,
            title: title,
            description: description
        },
    });

    return res;
};

export const TodoGetService = (id) => TodoGetAPI(id);
export const TodoDoneService = (todoId) => TodoDoneAPI(todoId);
export const TodoCreateService = (userId, title, description) =>
    TodoCreateAPI(userId, title, description);
