import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { MainPage, SignUpPage, LogInPage, AddaProduct, ResultsPage, ProductPage, UserSettings, MapPage } from "./pages";
import ProfilePage from './pages/ProfilePage';

import { useDispatch } from "react-redux";
import { getLoginStatus } from "./actions";

function App() {
    window.API_HOST = "https://flourish-api.herokuapp.com/";

    const dispatch = useDispatch();

    useEffect(() => {
        const access_token = window.localStorage.getItem('access_token');
        access_token && dispatch(getLoginStatus(access_token));
    }, []);

    return (
        <React.StrictMode>
            <BrowserRouter>
                <Scrollbars style={{ width: "100vw", height: "100vh" }}
                // This will activate auto hide
                autoHide
                // Hide delay in ms
                autoHideTimeout={1000}
                // Duration for hide animation in ms.
                autoHideDuration={200}>
                    <Routes>
                        <Route exact path="/" element={<MainPage />}/>
                        <Route path="/signup" element={<SignUpPage />}/>
                        <Route path="/login" element={<LogInPage />}/>
                        <Route path="/new" element={<AddaProduct />}/>
                        <Route path="/products" element={<ResultsPage />}/>
                        <Route path="/user/:id" element={<ProfilePage />}/>
                        <Route path="/product/:id" element={<ProductPage />}/>
                        <Route path="/settings" element={<UserSettings />}/>
                        <Route path="/map" element={<MapPage />}/>
                    </Routes>
                </Scrollbars>
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default App;
