import React, { memo, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { useSelector } from 'react-redux';
import { getDataApi } from '../utils/axios';
import { toast } from 'react-toastify';

const Todo = () => {
    const { accessToken } = useSelector((state) => state.user);
    const [todo, setTodo] = useState([]);

    // const getDataTodo = useCallback(() => {
    //     getDataApi("todo", accessToken)
    //         .then((res) => {
    //             setTodo(res.data.todo || []);
    //         })
    //         .catch(() => {
    //             toast.error("Something go wrong!");
    //         });
    // }, [accessToken]);

    useEffect(() => {
        if (accessToken) {
            // IIFE
            // (async function getData() {
            //     try {
            //         const res = await getDataApi("todo", accessToken);
            //         setTodo(res.data.todo || []);
            //     } catch (error) {
            //         toast.error("Something go wrong!");
            //     }
            // })();

            const getData = async () => {
                try {
                    const res = await getDataApi('todo', accessToken);
                    console.log(res);
                    setTodo(res.todo || []);
                } catch (error) {
                    console.error(error);
                    toast.error('Something go wrong!');
                    setTodo(null);
                }
            };

            getData();
        }
    }, [accessToken]);

    return (
        <Layout>
            <div className="todo-container">
                {todo && todo.length > 0 ? (
                    todo.map((item) => <div key={item._id}>{item.content}</div>)
                ) : todo === null ? (
                    <div>Cant' loading</div>
                ) : (
                    <div>loading</div>
                )}
            </div>
        </Layout>
    );
};

export default memo(Todo);
