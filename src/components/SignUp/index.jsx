import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signUpUser } from '../../api/auth';

function SignUp() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const onFormSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        try {
            const data = await signUpUser(formData);
            console.log("User created:", data);
            alert("Sign-up successful!");
            navigate("/auth/login");
        } catch (err) {
            console.error(err);
            alert("Error creating account. Please try again.");
        }
    };

    const navigate = useNavigate()

    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <div className='d-flex justify-center' style={{ padding: "22px" }} >
            <form onSubmit={onFormSubmit} className="bg-white shadow-md w-[400px] rounded-md" style={{ padding: "22px" }}>
                <h2 className="flex justify-center text-3xl">Login</h2>
                {/* <div className="flex flex-col gap-2">
                <span className="">First Name</span>
                <input className="border-b-2" type="text" required  ></input>
            </div>
            <div className="flex flex-col gap-2">
                <span>Last Name</span>
                <input className="border-b-2" type="text" required ></input>
            </div>
             <div className="flex flex-col gap-2">
                <span>Email</span>
                <input className="border-b-2" type="text" required ></input>
            </div>
             <div className="flex flex-col gap-2">
                <span>Password</span>
                <input className="border-b-2" type="password" required ></input>
            </div>
             <div className="flex flex-col gap-2">
                <span>Confirm Password</span>
                <input className="border-b-2" type="password" required ></input>
            </div> */}

                {["firstName", "lastName", "email", "password", "confirmPassword"].map((field, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <span>{field.replace(/([A-Z])/g, " $1")}</span>
                        <input
                            className="border-b-2"
                            type={field.toLowerCase().includes("password") ? "password" : "text"}
                            name={field}
                            value={formData[field]}
                            onChange={onChangeHandler}
                            required
                        />
                    </div>
                ))}
                <div style={{ margin: "0px 10px" }}>
                    <button type="submit" className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                        Create New Account </button>
                </div>
                <div className="" style={{ margin: "8px 80px 0px 80px" }}>
                    <button className="d-flex align-middle hover:cursor-pointer" style={{ alignItems: "center" }} onClick={() => navigate("/auth/login")}> Already have an Account <span className="material-symbols-outlined">
                        chevron_forward
                    </span></button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
