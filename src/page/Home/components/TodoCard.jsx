import styled from "styled-components";

const Card = styled.div`
    background-color: ${(props) => props.theme.color.secondary};
    padding: 1em;

    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .status {
            cursor: pointer;

            .pending {
                padding: 0.25em;
                background-color: ${(props) => props.theme.color.pendingBG};
                color: ${(props) => props.theme.color.pendingFont};
            }
            .done {
                padding: 0.25em;
                background-color: ${(props) => props.theme.color.doneBG};
                color: ${(props) => props.theme.color.doneFont};
            }
        }
    }

    .break_line {
        border: 0.1px solid ${(props) => props.theme.color.ternary};
    }
`;

const TodoCard = ({ list, handleMarkDone }) => {

    return (
        <>
            {list.map((list) => {
                return (
                    <Card key={list._id}>
                        <div className="card">
                            <div className="title">
                                <div className="title_name">{list.title}</div>
                                <div className="status" onClick={() => handleMarkDone(list._id)}>
                                    {!list.completed ? (
                                        <div className="pending">
                                            pending...
                                        </div>
                                    ) : (
                                        <div className="done">completed</div>
                                    )}
                                </div>
                            </div>
                            <hr className="break_line" />
                            <div className="des">{list.description}</div>
                        </div>
                    </Card>
                );
            })}
        </>
    );
};

export default TodoCard;
