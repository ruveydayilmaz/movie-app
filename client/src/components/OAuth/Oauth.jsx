import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { googleLogin } from "../../actions/auth";
import axios from "axios";

const Oauth = () => { // refactor this later
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = useGoogleLogin({
        onSuccess: async (response) => {
        try {
            console.log(response, "response");
            const res = await axios.get(
            `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${response.access_token}`
            );

            console.log("burada");
            const data = {
            email: res.data.email,
            password: res.data.sub,
            profilePic: res.data.picture,
            username:
                res.data.given_name
                .toLowerCase()
                .replace(/[^a-zA-Z0-9]/g, "")
                .split(" ", 1) +
                res.data.family_name
                .toLowerCase()
                .replace(/[^a-zA-Z0-9]/g, "")
                .split(" ", 1) +
                Math.floor(Math.random() * 1000),
            };
            console.log(data, "data")
            dispatch(googleLogin(data, navigate));
            console.log(data);
        } catch (err) {
            alert("Google Sign In was unsuccessful. Try again later");
        }
        },
    });

    return (
        <div>
            <button onClick={login}>
                <i className="fab fa-google"></i> Sign in with Google
            </button>
            {/* <button> facebook login later
                <i className="fab fa-facebook"></i> Sign in with Facebook
            </button> */}
        </div>
    );
};

export default Oauth;
