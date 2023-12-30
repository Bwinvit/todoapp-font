import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoCreateService, TodoGetService } from "../../../API/TodoAPI";
import { fetchList } from "../../../redux/reducer/todoReducer";

const ModalBG = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #fffff1dd;
`;

const Form = styled.div`
    position: fixed;
    z-index: 999;
    top: 30%; /* Adjust vertical positioning as needed */
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    max-width: 600px;
    height: auto;
    background-color: ${(props) => props.theme.color.secondary};
    padding: 0 2em;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
        margin-bottom: 1em;
    }

    .form_container {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 2em;

        .input_group {
            display: grid;
            margin-bottom: 1em;
        }

        .button_container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1em;
        }
    }
`;

const AddItemForm = ({ handleAddItem }) => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (auth.userInfo.userId && title && description) {
            try {
                await TodoCreateService(
                    auth.userInfo.userId,
                    title,
                    description
                );
                await todoFetch();
                handleAddItem()
            } catch (err) {
                console.error(err);
            }
        }
    };

    const handleCancel = () => {
        setTitle("");
        setDescription("");
        handleAddItem();
    };

    const todoFetch = async () => {
        await TodoGetService(auth.userInfo.userId).then((res) => {
            dispatch(fetchList(res.todo));
        });
    };

    return (
        <>
            <ModalBG onClick={handleAddItem} />
            <Form>
                <h3 className="title">ADD USER LIST</h3>
                <form onSubmit={handleSubmit} className="form_container">
                    <div className="input_group title_container">
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="input_group description_container">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            value={description}
                            style={{ resize: "none", height: "4em" }}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="button_container">
                        <button onClick={handleCancel}>Cancel</button>
                        <button type="submit">Add Todo</button>
                    </div>
                </form>
            </Form>
        </>
    );
};

export default AddItemForm;
