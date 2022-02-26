import React, {useState} from "react"
import BaseLayout from "../BaseLayout";
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid"
import Strings from "../resources/Strings";
import {Button} from "@mui/material";
import {auth} from "../firebase/firebaseConfig";
import {useNavigate} from "react-router-dom/";
import {useAuth} from "../contexts/AuthContext";

const Register = () => {
    const {register, currentUser} = useAuth();
    let navigate = useNavigate();

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [confirmationPassword, setConfirmationPassword] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(false);

    const handleSubmit = async () => {
        if(registerPassword !== confirmationPassword){
            setError(true)
        }
        try{
            setError(false)
            setLoading(true)
            await register(auth, registerEmail, registerPassword)
        }catch{
            setError(true)
        }
        setLoading(false)

    }



    /*const register = async () => {
        try{
        const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword)
        } catch (error) {
            console.log(error);
        }
        navigate("/login")
    }*/

    return(
        <BaseLayout>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <TextField
                            label={Strings.register.insertUserName}
                            value={registerEmail || ''}
                            onChange={
                                (e) => {
                                    setRegisterEmail(e.target.value)
                                }
                            }
                            style={{width: '60%', paddingBottom: '15px'}}
                            error={false}>
                        </TextField>
                    </Grid>
                    <Grid item>
                        <TextField
                            label={Strings.register.insertPassword}
                            value={registerPassword || ''}
                            onChange={(e) => setRegisterPassword(e.target.value)}
                            style={{width: '60%', paddingBottom: '15px'}}
                            error={error}>
                        </TextField>

                    </Grid>
                    <Grid item>
                        <TextField
                            label={Strings.register.passwordConfirmation}
                            value={confirmationPassword || ''}
                            onChange={(e) => setConfirmationPassword(e.target.value)}
                            style={{width: '60%', paddingBottom: '15px'}}
                            error={error}>

                        </TextField>

                    </Grid>
                    <Grid item>
                        <Button
                            disabled={loading}
                            onClick={handleSubmit}
                        >
                            {Strings.register.createAccount}
                        </Button>
                        <Grid>
                            Already have an account?
                            <Button onClick={() => {
                                // login(auth, registerEmail, registerPassword)
                            }}>
                            Login
                        </Button>
                        </Grid>

                    </Grid>
                </Grid>
            <Grid item>
                <TextField
                value={`Hello ${currentUser?.email}`}
                style={{width: '60%', paddingBottom: '15px'}}
                error={false}>

                </TextField>

                </Grid>
        </BaseLayout>
    )
}

export default Register;

