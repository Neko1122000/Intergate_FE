import '../css/App.css';
import Tabs from "./components/Tabs"
import PrivateRouter from './components/google.login/PrivateRouter';
import PublicRouter from './components/google.login/PublicRouter';
import {BrowserRouter, Switch, Router} from 'react-router-dom';
// import PrivatePage from './components/google.login/PrivatePage'
// import PublicPage from './components/google.login/PublicPage'


export default function App() {
    return (
        <div className="App" style={{display: "block"}}>
            <div className="welcome">Chào mừng đến với hệ thống đồng bộ lịch biểu
            <br/>
                Nhóm 2 - K63T - Tích hợp hệ thống
            </div>

            {/*<Tabs />*/}

            <BrowserRouter>
                <div>
                    <PublicRouter  path="/" component={Tabs} />
                    {/*<PrivateRouter path="/private" component={PrivatePage} />*/}
                    <PrivateRouter path="/" component={Tabs} />
                </div>
            </BrowserRouter>

        </div>
    );
}

