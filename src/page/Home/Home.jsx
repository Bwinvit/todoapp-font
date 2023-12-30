import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { TodoGetService, TodoDoneService } from "../../API/TodoAPI";
import TodoCard from "./components/TodoCard";
import { fetchList } from "../../redux/reducer/todoReducer";

const CardContainer = styled.div`
    display: grid;
    gap: 1em;
`;

const Home = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const todo = useSelector((state) => state.todo);
    const [loading, setIsLoading] = useState(false);

    useEffect(() => {
        if (auth.userInfo.userId) {
            todoFetch();
        }
    }, [auth]);

    const todoFetch = async () => {
        setIsLoading(true);
        await TodoGetService(auth.userInfo.userId).then((res) => {
            dispatch(fetchList(res.todo));
        });
        setIsLoading(false);
    };

    const handleMarkDone = async (todoId) => {
        await TodoDoneService(todoId);
        await todoFetch();
    };

    return (
        <CardContainer>
            {loading ? (
                <>loading...</>
            ) : (
                <TodoCard list={todo.list} handleMarkDone={handleMarkDone} />
            )}
        </CardContainer>
    );
};

export default Home;
