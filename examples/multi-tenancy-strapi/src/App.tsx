import { GitHubBanner, Refine } from "@pankod/refine-core";
import {
    notificationProvider,
    LoginPage,
    Layout,
    ErrorComponent,
} from "@pankod/refine-antd";
import { DataProvider } from "@pankod/refine-strapi-v4";
import routerProvider from "@pankod/refine-react-router-v6";

import "@pankod/refine-antd/dist/reset.css";

import { StoreProvider } from "context/store";
import { CustomSider } from "components/sider";
import { ProductList } from "pages/product";
import { OrderList, CreateOrder, OrderEdit } from "pages/order";
import { API_URL } from "./constants";
import { authProvider, axiosInstance } from "./authProvider";

const App: React.FC = () => {
    return (
        <StoreProvider>
            <GitHubBanner />
            <Refine
                authProvider={authProvider}
                dataProvider={DataProvider(API_URL + "/api", axiosInstance)}
                routerProvider={routerProvider}
                Sider={CustomSider}
                resources={[
                    {
                        name: "products",
                        list: ProductList,
                    },
                    {
                        name: "orders",
                        list: OrderList,
                        create: CreateOrder,
                        edit: OrderEdit,
                    },
                ]}
                notificationProvider={notificationProvider}
                LoginPage={LoginPage}
                Layout={Layout}
                catchAll={<ErrorComponent />}
            />
        </StoreProvider>
    );
};

export default App;
