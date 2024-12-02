
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Login_User } from "../Services/ServiceApi";


function Login() {
    const [user, setUser] = useState({})
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            let resLog = await Login_User(user)
            const serializedValue = JSON.stringify(resLog.data);
            localStorage.setItem('User', serializedValue);
            setUser({
                "email": "",
                "password": ""
            })
            navigate('/');
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
    }, [])

    return (
        <div>
            <div className="untree_co-section">
                <div className="container">

                    <div className="block">
                        <div className="row justify-content-center">


                            <div className="col-md-8 col-lg-8 pb-4">


                                <form>
                                    <div className="form-group">
                                        <label className="text-black"  >Email</label>
                                        <input
                                            value={user.email}
                                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                                            type="email" className="form-control" id="email" />
                                    </div>

                                    <div className="form-group">
                                        <label className="text-black"  >Password</label>
                                        <input value={user.password}
                                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                                            type="password" className="form-control" id="password" />
                                    </div>
                                    <br />
                                    <button onClick={(e) => handleSubmit(e)} type="submit"
                                        className="btn btn-primary-hover-outline">Connexion</button>
                                </form>
                                <Link to="/Register">
                                    <p>
                                        Create new Account
                                    </p>
                                </Link>
                            </div>

                        </div>

                    </div>

                </div>


            </div>
        </div>
    )
}

export default Login
