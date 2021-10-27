import {Provider} from "react-redux";
import store from "./Redux/store";
import PostScreen from "./Screen/PostScreen";

function App() {
    return (
        <Provider store={store}>
            <div style={{padding: 20}}>
                <PostScreen />
            </div>
        </Provider>
    );
}

export default App;
