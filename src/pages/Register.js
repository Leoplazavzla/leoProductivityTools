import React, {useState} from "react"
import BaseLayout from "../BaseLayout";
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid"
import Strings from "../resources/Strings";
import {Button} from "@mui/material";
import {createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import {auth} from "../firebase/firebaseConfig"
import {logOut, login} from "../Api/authentication"

const Register = () => {

    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [user, setUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    const register = async () => {
        try{
        const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword)
            console.log(user)
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <BaseLayout>
            {!user &&
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
                            error={false}>

                        </TextField>

                    </Grid>
                    <Grid item>
                        <Button
                            onClick={register}
                        >
                            {Strings.register.createAccount}
                        </Button>
                        <Button onClick={() => login(auth, registerEmail, registerPassword)}>
                            Login
                        </Button>
                    </Grid>
                </Grid>
            }
                <Grid item>
                <TextField
                value={`Hello ${user?.email}`}
                style={{width: '60%', paddingBottom: '15px'}}
                error={false}>

                </TextField>

                </Grid>
            <Button onClick={logOut}>
                LogOut
            </Button>



        </BaseLayout>
    )
}

export default Register;