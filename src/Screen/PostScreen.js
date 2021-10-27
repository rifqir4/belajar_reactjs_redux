import React from "react";
import {useDispatch, useSelector} from "react-redux";
import PostForm from "../Component/PostForm";
import {DELETE_POST} from "../Redux/Post/postTypes";

const PostScreen = () => {
    const dispatch = useDispatch();
    const listPost = useSelector((state) => state.listPost);
    console.log(listPost);

    const deleteHandler = (id) => {
        dispatch({type: DELETE_POST, payload: id});
    };

    return (
        <div>
            <h1>Selamat Datang di halaman post</h1>

            <PostForm />

            <table style={{borderWidth: 1}}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Stok</th>
                    </tr>
                </thead>
                <tbody>
                    {listPost.map((val) => {
                        return (
                            <tr key={val.id}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>IDR {val.harga}</td>
                                <td>{val.stok}</td>

                                <td>
                                    <button
                                        onClick={() => deleteHandler(val.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default PostScreen;
