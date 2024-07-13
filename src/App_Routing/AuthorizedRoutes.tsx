import React, { lazy } from 'react'
import { IRoute } from "../Utilities/Interfaces";
// import Home from '../Screens/AuthorizedScreens/HomeScreen/Home';
// import ProductList from '../Screens/AuthorizedScreens/ProductListScreen/ProductList';
// import ProductDescp from '../Screens/AuthorizedScreens/ProductDespScreen/ProductDescp';
// import Checkout from '../Screens/AuthorizedScreens/CheckoutScreen/Checkout';
// import OrderPage from '../Screens/AuthorizedScreens/OrderPageScreen/OrderPage';
// import Payment from '../Screens/AuthorizedScreens/PaymentScreen/Payment';
// import ProductSearch from '../Screens/AuthorizedScreens/ProductSearchScreen/ProductSearch';
// import Dashboard from '../Screens/AuthorizedScreens/DashboardScreen/Dashboard';

const Home = lazy(() => import('../Screens/AuthorizedScreens/HomeScreen/Home'))
const ProductList = lazy(() => import('../Screens/AuthorizedScreens/ProductListScreen/ProductList'))
const ProductDescp = lazy(() => import('../Screens/AuthorizedScreens/ProductDespScreen/ProductDescp'))
const Checkout = lazy(() => import('../Screens/AuthorizedScreens/CheckoutScreen/Checkout'))
const OrderPage = lazy(() => import('../Screens/AuthorizedScreens/OrderPageScreen/OrderPage'))
const Payment = lazy(() => import('../Screens/AuthorizedScreens/PaymentScreen/Payment'))
const ProductSearch = lazy(() => import('../Screens/AuthorizedScreens/ProductSearchScreen/ProductSearch'))
const Dashboard = lazy(() => import('../Screens/AuthorizedScreens/DashboardScreen/Dashboard'))

export const SecuredRoutes: Partial<IRoute>[] = [
    {
        path: '/',
        element: <Home />,
        hasChildren: true,
        children: [
            {
                element: <Dashboard />,
                index: true,
            },
            {
                element: <ProductSearch />,
                hasChildren: true,
                path: 'products',
                children: [
                    {
                        index: true,
                        element: <ProductList />,
                    },
                    {
                        path: 'proddescp/:prodId', // relative path
                        element: <ProductDescp />
                    },
                ]
            },
        ]
    },
    {
        path: '/checkout',
        element: <Checkout />,
        hasChildren: true,
        children: [
            {
                element: <OrderPage />,
                index: true
            },
            {
                path: 'payment',
                element: <Payment />
            }
        ]
    },

]