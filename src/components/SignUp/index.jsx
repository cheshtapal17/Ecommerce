import React from 'react'

function SignUp() {
    const onFormSubmit=()=>{

    }
  return (
    <div className='d-flex justify-center' style={{ padding: "22px" }} >
        <form onSubmit={onFormSubmit} className="bg-white shadow-md w-[400px] rounded-md" style={{ padding: "22px" }}>
            <h2 className="flex justify-center text-3xl">Login</h2>
            <div className="flex flex-col gap-2">
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
            </div>
            <div style={{ margin: "0px 10px" }}>
                <button type="submit" className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                    Create New Account </button>
            </div>
            <div className="" style={{ margin: "8px 80px 0px 80px" }}>
                <button className="d-flex align-middle hover:cursor-pointer" style={{alignItems:"center"}}> Already have an Account <span className="material-symbols-outlined">
                    chevron_forward
                </span></button>
            </div>
        </form>
    </div>
  )
}

export default SignUp
