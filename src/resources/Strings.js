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
                error: "The passwords don't match",
                haveAnAccount: "Already have an account? Login"
            },
            login: {
                name: "Login",
                insertUserName: "Insert your user name",
                username: "Username",
                insertPassword: "Insert your password",
                password: "Password",
                signIn: "Sign In",
                dontHaveAccount: "Don't have an account? Sign Up",
            },
            alarm: {
                name: "Alarms",
                new: "New Alarm",
                delete: "Stop Alarm",
                timePickerLabel: "Time picker",
                addAlarm: "Add Alarm",
                alarmName: "Alarm Name",
                update: "Update alarm",
                description: "Create as many alarms as you need",
                success: "The alarm was added successfully",
                deleted: "The alarm was deleted",
                stop: "The alarm hast stopped"
            },
            notes: {
                name: "Notes",
                new: "New Note",
                addNote: "Add Note",
                delete: "Delete Note",
                edit: "Edit Note",
                update: "Update Note",
                description: "Save your thoughts",
                success: "The note was added successfully",
                deleted: "The note was deleted",
                edited: "The note was edited"
            },
            pictures: {
                name: "Pictures",
                new: "New Picture",
                addPicture: "Add Picture",
                uploadPicture: "Upload Picture",
                selectFile: "Select Image",
                description: "Upload your files and share the URL",
                upload: "Upload Picture",
                select: "Select Image",
                download: "Download File",
                copy: "Copy URL",
                delete: "Delete Picture",
                see: "See File",
                success: "File uploaded successfully",
                edited: "File has been updated",
                deleted: "File has been deleted"
            },
            pomodoro: {
                name: "Pomodoro Clock",
                description: "Increase your productivity"
            },
            dashboard: {
                title: "Leo's PM Tools",
                paragraph1: "This is my ReactJS webApp created to hold all the tools I use in my day-to-day work. I'll be adding new features in the future :-)"
            },
            about: {
                title: "About",
                about: "About this App",
                paragraph1: "This webApp was created using the ReactJS library, the MaterialUI framework and the BAAS FireBase from Google."

            },
            personalDetails: {
                linkedin: " LinkedIn",
                github: "GitHub",

            }
        }
    )
}

export default Strings();