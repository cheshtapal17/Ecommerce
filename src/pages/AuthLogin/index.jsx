import { Login } from "../../components/Login"
import Navbar from "../../components/Navbar"

export const AuthLogin = () => {
    return (
        <>
            <Navbar />
            <main className="d-flex justify-center" style={{marginTop:"40px"}}>
                <Login />
            </main>

        </>

    )
}