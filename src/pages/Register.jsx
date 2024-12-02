
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Register_User } from "../Services/ServiceApi";


function Register() {
    const [user, setUser] = useState({})
    const navigate = useNavigate();
    // const [isRegister, setisRegister] = useState(true)

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            await Register_User(user)
            const serializedValue = JSON.stringify(user);
            localStorage.setItem('User', serializedValue);
            setUser({
                "nom": "",
                "prenom": "",
                "adresse": "",
                "telephone": "",
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
                                        <label className="text-black" >First name</label>
                                        <input
                                            value={user.prenom}
                                            onChange={(e) => setUser({ ...user, prenom: e.target.value })}
                                            type="text" className="form-control" id="fname" />
                                    </div>

                                    <div className="form-group">
                                        <label className="text-black"  >Last name</label>
                                        <input
                                            value={user.nom}
                                            onChange={(e) => setUser({ ...user, nom: e.target.value })}
                                            type="text" className="form-control" id="lname" />
                                    </div>

                                    <div className="form-group">
                                        <label className="text-black"  >Address</label>
                                        <input
                                            value={user.adresse}
                                            onChange={(e) => setUser({ ...user, adresse: e.target.value })}
                                            type="text" className="form-control" id="adr" />
                                    </div>

                                    <div className="form-group">
                                        <label className="text-black"  >Phone</label>
                                        <input
                                            value={user.telephone}
                                            onChange={(e) => setUser({ ...user, telephone: e.target.value })}
                                            type="number" className="form-control" id="phone" />
                                    </div>

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
                                    <button onClick={(e) => handleSubmit(e)} type="submit" className="btn btn-primary-hover-outline">Register</button>
                                </form>
                                <Link to="/Login">
                                    <p>
                                        Already have Account
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

export default Register
