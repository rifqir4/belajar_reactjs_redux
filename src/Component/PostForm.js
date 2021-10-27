import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ADD_POST} from "../Redux/Post/postTypes";

const PostForm = () => {
    const dispatch = useDispatch();
    const listPost = useSelector((state) => state.listPost);

    const submitHandler = (e) => {
        e.preventDefault();

        if (listPost.filter((val) => val.name === name).length > 0) {
            alert("Nama Sudah digunakan");
        } else {
            const data = {
                id: Date.now(),
                name: name,
                harga: harga,
                stok: stok,
            };
            dispatch({type: ADD_POST, payload: data});
        }
    };

    const [name, setName] = useState("");
    const [harga, setHarga] = useState(0);
    const [stok, setStok] = useState(0);

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    placeholder="Masukkan nama"
                    style={{padding: 8, display: "block"}}
                    onChange={(event) => setName(event.target.value)}
                />
                {name === "" && (
                    <p style={{color: "red"}}> Field nama tidak boleh kosong</p>
                )}
                <input
                    placeholder="Masukkan Harga"
                    style={{padding: 8, display: "block"}}
                    type="number"
                    onChange={(event) => setHarga(event.target.value)}
                />
                <input
                    placeholder="Masukkan Stok"
                    style={{padding: 8, display: "block"}}
                    type="number"
                    onChange={(event) => setStok(event.target.value)}
                />
                <input
                    style={{padding: 8, display: "block"}}
                    type="submit"
                    value="Add Data"
                />
            </form>
        </div>
    );
};

export default PostForm;
