import React, {useState} from "react"
import BaseLayout from "../BaseLayout";
import Grid from "@material-ui/core/Grid";
import Strings from "../resources/Strings";
import {Button, Typography, Box, Container, TextField, Avatar} from "@mui/material";
import {auth} from "../firebase/firebaseConfig"
import {useNavigate} from "react-router-dom/";
import {useAuth} from "../contexts/AuthContext"
import LoginIcon from '@mui/icons-material/Login';
import {NavLink} from "react-router-dom";
import Alert from "@mui/material/Alert";

const Login = () => {
    let navigate = useNavigate();
    const {logIn} = useAuth();

    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const singIn = async (e) => {
        e.preventDefault()

        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

        if(regEx.test(loginEmail) || loginEmail === ""){
            setErrorMessage(Strings.register.invalidEmail)
        }else if(regEx.test(loginEmail) || loginEmail !== ""){
            setErrorMessage(Strings.register.invalidEmail)
        }

        try{
            setErrorMessage(null)
            setLoading(true)
            await logIn(auth, loginEmail, loginPassword)
            setLoading(false)
            navigate("/")


        }catch (error){
            console.log(error)
            setErrorMessage(Strings.register.accountInvalid)
        }

    }

    return(
        <BaseLayout>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LoginIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {Strings.login.name}
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        {errorMessage ? (<Alert severity={"error"}>{errorMessage}</Alert>) : null}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label={Strings.login.insertUserName}
                            value={loginEmail || ''}
                            onChange={
                                (e) => {
                                    setLoginEmail(e.target.value)
                                }
                            }
                            error={Boolean(errorMessage)}
                        />

                        <TextField
                            fullWidth
                            label={Strings.login.insertPassword}
                            type={"password"}
                            value={loginPassword || ''}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            error={Boolean(errorMessage)}
                        />
                        <Button
                            type="submit"
                            disabled={loading}
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={singIn}
                        >
                            {Strings.login.signIn}
                        </Button>
                        <Grid container justifyContent={"center"}>
                            <Grid item>
                                <NavLink to="/register" variant="body2">
                                    {Strings.login.dontHaveAccount}
                                </NavLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </BaseLayout>
    )
}

export default Login;
