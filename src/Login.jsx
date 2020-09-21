import React, { useState } from 'react';


const Login = () => {

    const [forum, changeHead] = useState({
        name: "",
        password: "",
        email: "",
        phone: "",
        message: "",


    });

    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);

        // const value = event.target.value;
        // const name = event.target.name;

        const { value, name } = event.target;
        changeHead((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }

        })


    }
    const changeIt = (event) => {
        event.preventDefault();
        alert('Form Submitted');



    }

    return (

        <>
            <div className="main_div">
                <form onSubmit={changeIt}>
                    <div>
                        <h1>Hello!! <span>{forum.name} {forum.password} </span></h1>
                        <h4>{forum.email}  {forum.phone}</h4>
                        <p>{forum.message}</p>
                        <input type="text" placeholder="Enter Your Name" name="name" onChange={inputEvent} value={forum.heading} />
                        <input type="text" placeholder="Type strong Password" name="password" onChange={inputEvent} value={forum.pw} />
                        <input type="email" placeholder="Enter your email" name="email" onChange={inputEvent} value={forum.email} /><br />
                        <input type="tel" placeholder="Enter your phone number" name="phone" onChange={inputEvent} value={forum.phone} />
                        <textarea placeholder="write your quERY" name="message" onChange={inputEvent} value={forum.message}></textarea>

                        <br />
                        <button type="submit" > Submit ❤️ </button>
                    </div>
                </form>
            </div>


        </>
    );
};

export default Login;