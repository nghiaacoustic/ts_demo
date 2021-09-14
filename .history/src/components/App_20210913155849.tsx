import { Provider } from "react-redux";
import Repositories from "./Repositories";
import { store } from '../state'

const App: React.FC = () => {
    return <Provider store={store}>
        <h3>Learn Typescript</h3>
        <Repositories />
    </Provider>
}
export default App;