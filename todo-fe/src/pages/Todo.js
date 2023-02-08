import React from "react";
import Layout from "../components/Layout";
import moment from "moment";

const Todo = () => {
    return (
        <Layout>
            <div>Todo</div>
            <div className="">{moment().fromNow()}</div>
        </Layout>
    );
};

export default Todo;
