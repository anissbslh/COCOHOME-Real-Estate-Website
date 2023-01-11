import {GoogleLogin} from 'react-google-login';

const clientId = "889650749204-ro7qei6g1dg6e0313d85l687oab0dfnh.apps.googleusercontent.com";

function Login() {


    const onSuccess = (res) => {
        console.log("login cool, uuser : ",res.profileObj);
    }

    const onFailure = (res) => {
        console.log("login NOTcool, res : ",res);
    }

    return (
        <div></div>
    )

}