import React from "react";
import "./App.css";
import Item from "./Item";
import { connect } from "react-redux";

const Paper = (props) => {
    const renderItems = () => {
        if (props.mode === "all") {
            return props.tasks.map((element, index) => {
                return (
                    <Item
                        text={element.text}
                        active={element.status}
                        key={index}
                        id={index}
                    />
                );
            });
        } else if (props.mode === "active") {
            return props.tasks.map((element, index) => {
                if (element.status) {
                    return (
                        <Item
                            text={element.text}
                            active={element.status}
                            key={index}
                            id={index}
                        />
                    );
                }
                return null;
            });
        } else {
            return props.tasks.map((element, index) => {
                if (!element.status) {
                    return (
                        <Item
                            text={element.text}
                            active={element.status}
                            key={index}
                            id={index}
                        />
                    );
                }
                return null;
            });
        }
    };
    return <div className="paper">{renderItems()}</div>;
};

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
    };
};

export default connect(mapStateToProps)(Paper);
