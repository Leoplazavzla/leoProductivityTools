import React, {useState, useEffect} from "react"
import BaseLayout from "../BaseLayout";
import Grid from "@material-ui/core/Grid"
import Strings from "../resources/Strings";
import {Avatar, Box, Button, Container, Typography, TextField} from "@mui/material";
import {auth} from "../firebase/firebaseConfig";
import {useNavigate} from "react-router-dom/";
import Alert from '@mui/material/Alert';
import {useAuth} from "../contexts/AuthContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {NavLink} from "react-router-dom";

const Register = () => {
    const {register, currentUser} = useAuth();
    let navigate = useNavigate();

    useEffect(() => {
        if(currentUser){
            navigate("/")
        }
    }, [])



    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [confirmationPassword, setConfirmationPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

        if (registerPassword !== confirmationPassword) {
            setErrorMessage(Strings.register.passDontMatch)
        }
        if(registerPassword.length < 6 && confirmationPassword < 6){
            setErrorMessage(Strings.register.passLowerThanSix)
        }
        if(regEx.test(registerEmail) || registerEmail === ""){
            setErrorMessage(Strings.register.invalidEmail)
        }else if(regEx.test(registerEmail) || registerEmail !== ""){
            setErrorMessage(Strings.register.invalidEmail)
        }
        try {
            setErrorMessage(null)
            setLoading(true)
            await register(auth, registerEmail, registerPassword)
            if (errorMessage === null){
                navigate("/")
            }
        } catch (err){
            setErrorMessage("Please check your details")
        }
        setLoading(false)
    }

    return (
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
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <AccountCircleIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {Strings.register.name}
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        sx={{mt: 1}}
                    >
                        {errorMessage ? (<Alert severity={"error"}>{errorMessage}</Alert>) : null}

                        <TextField
                            margin="normal"
                            type={"email"}
                            required
                            fullWidth
                            label={Strings.register.insertUserName}
                            value={registerEmail || ''}
                            onChange={(e) => setRegisterEmail(e.target.value)}
                            error={Boolean(errorMessage)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label={Strings.register.insertPassword}
                            type={"password"}
                            value={registerPassword || ''}
                            onChange={(e) => setRegisterPassword(e.target.value)}
                            error={Boolean(errorMessage)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label={Strings.register.passwordConfirmation}
                            type={"password"}
                            value={confirmationPassword || ''}
                            onChange={(e) => setConfirmationPassword(e.target.value)}
                            error={Boolean(errorMessage)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={loading}
                            onClick={handleSubmit}
                        >
                            {Strings.register.createAccount}
                        </Button>
                    <Grid container justifyContent={"center"}>
                        <Grid item>
                            <NavLink to="/login" variant="body2">
                                {Strings.register.haveAnAccount}
                            </NavLink>
                        </Grid>
                    </Grid>
                </Box>
                </Box>
        </Container>
</BaseLayout>
)
}

export default Register;



