// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { publicRoutes } from './routes';
// import { DefaultLayout } from './components/Layout';
// import { Fragment } from 'react';
// import './pages/Cart/Cart.module.scss';
// import './pages/CartItem/CartItem.module.scss';

// function App() {
//     return (
//         <Router>
//             <div className="App">
//                 <Routes>
//                     {publicRoutes.map((route, index) => {
//                         let Layout = DefaultLayout;
//                         if (route.layout) {
//                             Layout = route.layout;
//                         } else if (route.layout === null) {
//                             Layout = Fragment;
//                         }
//                         let Private = Fragment;
//                         if (route.private) {
//                             Private = route.private;
//                         }
//                         let role = '';
//                         if (route.role) {
//                             role = route.role;
//                         }
//                         const Page = route.component;
//                         return (
//                             <Route
//                                 key={index}
//                                 path={route.path}
//                                 element={
//                                     <Private>
//                                         <Layout>
//                                             <Page />
//                                         </Layout>
//                                     </Private>
//                                 }
//                             />
//                         );
//                     })}
//                 </Routes>
//             </div>
//         </Router>
//     );
// }
// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './components/Layout';
import { Fragment } from 'react';
import { CartProvider } from '~/pages/CartContext'; // Import CartProvider from the CartContext.js file
import './pages/Cart/Cart.module.scss';
import './pages/CartItem/CartItem.module.scss';

function App() {
    return (
        <Router>
            <div className="App">
                <CartProvider>
                    {' '}
                    {/* Wrap the routes with CartProvider */}
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            let Layout = DefaultLayout;
                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }
                            let Private = Fragment;
                            if (route.private) {
                                Private = route.private;
                            }
                            let role = '';
                            if (route.role) {
                                role = route.role;
                            }
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Private>
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        </Private>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </CartProvider>
            </div>
        </Router>
    );
}

export default App;
