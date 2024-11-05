import axios from "axios";
import React from 'react';
const Econfirm = () => {
    const notify = async () => {
        await axios.post("https://mail-senderv1api.onrender.com/api/v1/signup", {
            name: "Venkata Thapaswini Thota",
            gmail: "thotavenkatathapaswini@gmail.com",
            content: "jhvhujv",
            subject: "jbbihb",
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <>
            <div onClick={() => { notify(); }}>
                Your Email has been verified
            </div>
        </>
    )
}

export default Econfirm