const Strings = () => {
    return ({
            app: {
                name: "Leo's PM Tools"
            },
            navBar: {
                dashboard: "Dashboard",
                messages: "Messages",
                new: "Alarm",
                pomodoro: "Pomodoro",
                login: "Login",
                logout: "Logout",
                register: "Register",
                motorcycles: "Motorcycles"
            },
            register: {
                name: "Sign Up",
                insertUserName: "Insert your email",
                username: "Username",
                insertPassword: "Insert your password",
                passwordConfirmation: "Password confirmation",
                password: "Password",
                createAccount: "Create Account",
                error: "The passwords don't match"
            },
            login: {
                name: "Login",
                insertUserName: "Insert your user name",
                username: "Username",
                insertPassword: "Insert your password",
                password: "Password",
                signIn: "Sign In"
            },
            alarm: {
                name: "Alarms",
                new: "New Alarm",
                delete: "Delete Alarm",
                timePickerlabel: "Time picker",
                addAlarm: "Add Alarm",
                alarmName: "Alarm Name"

            },
            pictures: {
                name: "Pictures",
                new: "New Picture",
                addPicture: "Add Picture",
                uploadPicture: "Upload Picture",
                selectFile: "Select Image",

            },
            dashboard: {
                title: "Welcome to Leo's PM Tools",
                paragraph1: "This is my ReactJS webApp created to hold all the tools I use in my day-to-day work. I'll be adding new features in the future :-)"
            }
        }
    )
}

export default Strings();