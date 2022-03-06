import React, {useState} from "react"
import BaseLayout from "../BaseLayout";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Strings from "../resources/Strings";
import {Button} from "@mui/material";
import {auth} from "../firebase/firebaseConfig"
import {logOut, login} from "../Api/authentication"
import {useNavigate} from "react-router-dom/";
import {useAuth} from "../contexts/AuthContext"
import Alert from '@mui/material/Alert';
import {onAuthStateChanged} from "firebase/auth";

const Login = () => {
    let navigate = useNavigate();
    const {currentUser, logIn} = useAuth();

    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({})

    const singIn = async () => {
        try{
            setError(false)
            setLoading(true)
            await logIn(auth, loginEmail, loginPassword).then((navigate("/dashboard")))
        }catch {
            setError(true)
        }
    }

    return(
        <BaseLayout>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <div><h1>{Strings.login.name}</h1></div>
                </Grid>
                <Grid item>
                    <TextField
                        label={Strings.login.insertUserName}
                        value={loginEmail || ''}
                        onChange={
                            (e) => {
                                setLoginEmail(e.target.value)
                            }
                        }
                        style={{width: '60%', paddingBottom: '15px'}}
                        error={false}>

                    </TextField>
                </Grid>
                <Grid item>
                    <TextField
                        label={Strings.login.insertPassword}
                        type={"password"}
                        value={loginPassword || ''}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        style={{width: '60%', paddingBottom: '15px'}}
                        error={false}>

                    </TextField>

                </Grid>
                <Grid item>
                    <Button
                        disabled={loading}
                        onClick={singIn}
                    >
                        {Strings.login.signIn}
                    </Button>
                </Grid>
                    <Grid item>
                                Don't have an account?
                            <Button
                                onClick={() => navigate("/register")}
                            >
                                {Strings.register.createAccount}
                            </Button>
                    </Grid>
                </Grid>
        </BaseLayout>
    )
}

export default Login;

/*
onClick={() => {
    // login(auth, registerEmail, registerPassword)
}}*/
