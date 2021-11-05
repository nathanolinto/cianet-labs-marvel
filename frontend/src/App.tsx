import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyle from './styles/global';

import Home from './pages/Home';
import Comics from './pages/Comics';

function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Route path="/" exact component={Home} />
                <Route path="/characters/:id/comics" component={Comics} />
            </BrowserRouter>
        </>
    );
}

export default App;
