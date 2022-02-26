import React, {useState} from "react"
import BaseLayout from "../BaseLayout";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Strings from "../resources/Strings";
import {Button} from "@mui/material";
import {auth} from "../firebase/firebaseConfig"
import {logOut, login} from "../Api/authentication"
import {useNavigate} from "react-router-dom/";
import {onAuthStateChanged} from "firebase/auth";

const Login = () => {
    let navigate = useNavigate();

    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [user, setUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    return(
        <BaseLayout>
            <Grid container direction="column" spacing={2}>
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
                        value={loginPassword || ''}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        style={{width: '60%', paddingBottom: '15px'}}
                        error={false}>

                    </TextField>

                </Grid>
                <Grid item>
                    <Button
                        onClick={() => {
                            login(auth, loginEmail, loginPassword).then(navigate("/dashboard"));

                        }}
                    >
                        {Strings.login.signIn}
                    </Button>
                    <Grid item>

                    Don't have an account?

                    <Button
                        onClick={() => navigate("/register")}
                    >
                        {Strings.register.createAccount}
                    </Button>
                    </Grid>
                </Grid>
                </Grid>
        </BaseLayout>
    )
}

export default Login;