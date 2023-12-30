import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import _ from "lodash";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/reducer/authReducer";
import AddItemForm from "./components/AddItemForm";

const NavComponent = styled.div`
    .text {
        margin: 0 0.5em 0 0.5em;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left_nav {
            .username {
                padding: 0.4em;
            }

            .username:hover {
                color: ${(props) => props.theme.color.primary};
                background-color: ${(props) => props.theme.color.fontText};
                transition: 1s;
                cursor: pointer;
            }
        }

        .right_nav {
            padding: 0.4em;
        }
        .right_nav:hover {
            color: ${(props) => props.theme.color.primary};
            background-color: ${(props) => props.theme.color.fontText};
            transition: 1s;
            cursor: pointer;
        }
    }

    .line {
        border: 0.025em solid ${(props) => props.theme.colors};
    }
`;

const Modal = styled.div`
`;

const NavBar = () => {
    const auth = useSelector((state) => state.auth);
    const [cookies, removeCookie] = useCookies(["auth"]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isAddItem, setAddItem] = useState(false);

    const handleLogout = () => {
        if (auth.userInfo.userId !== undefined) {
            try {
                removeCookie("authToken");
                dispatch(logout());
                navigate("/login");
            } catch (err) {
                console.error("Error during logout:", err);
            }
        }
    };

    const handleAddItem = () => {
        if (auth.userInfo.userId !== undefined) {
            setAddItem(!isAddItem);
        }
    };

    return (
        <NavComponent>
            <div className="text">
                <div className="left_nav">
                    TODO |{" "}
                    <span className="username" onClick={handleLogout}>
                        {auth.success && !_.isEmpty(auth.userInfo)
                            ? auth.userInfo.username.toUpperCase()
                            : "YOUR"}
                    </span>{" "}
                    LISTS
                </div>
                <div className="right_nav" onClick={handleAddItem}>
                    Add new List
                </div>
            </div>
            <hr className="line" />
            {isAddItem ? (
                <Modal>
                    <AddItemForm handleAddItem={handleAddItem}/>
                </Modal>
            ) : (
                <></>
            )}
        </NavComponent>
    );
};

export default NavBar;
