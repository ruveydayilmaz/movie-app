import { Provider } from "react-redux";
import store from "../store/ReduxStore";
import { GoogleOAuthProvider } from "@react-oauth/google";

const Providers = ({children}) => (
    <Provider store={store}>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_OAUTH_KEY}>
            {children}
        </GoogleOAuthProvider>        
    </Provider>
)

export default Providers;