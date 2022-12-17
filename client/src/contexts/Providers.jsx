import { Provider } from "react-redux";
import store from "../store/ReduxStore";
import { GoogleOAuthProvider } from "@react-oauth/google";

const Providers = ({children}) => (
    <Provider store={store}>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_API_URL}>
            {children}
        </GoogleOAuthProvider>        
    </Provider>
)

export default Providers;