import React, {useState} from "react"
import BaseLayout from "../BaseLayout";
import Grid from "@material-ui/core/Grid";
import Strings from "../resources/Strings";
import {Button, Typography, Box, Container, TextField, Avatar, Link} from "@mui/material";
import {auth} from "../firebase/firebaseConfig"
import {useNavigate} from "react-router-dom/";
import {useAuth} from "../contexts/AuthContext"
import LoginIcon from '@mui/icons-material/Login';
import Alert from '@mui/material/Alert';
import {NavLink} from "react-router-dom";

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
                            error={false}
                        />

                        <TextField
                            fullWidth
                            label={Strings.login.insertPassword}
                            type={"password"}
                            value={loginPassword || ''}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            error={false}
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
                                    {"Don't have an account? Sign Up"}
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
