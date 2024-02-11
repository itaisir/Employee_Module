import { useContext } from "react";
import { logoutUser } from "../../APIFunctions/Auth/auth";
import { AuthContext } from "../../Contexts/AuthContext";
import { showToast } from "../../Helpers/ToastHelpers";
import { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { FaUsers, FaMoneyCheckAlt, FaUsersCog, FaMoneyBill, FaIndustry, FaUserTie, FaTruckMoving, FaBoxes, FaProductHunt, FaStore, FaFileSignature } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { Link } from 'react-router-dom';
import AppRouter from "./AppRouter";
const { Header, Sider, Content, Footer } = Layout;

export default function Main() {

    async function LogoutClick() {
        var response = await logoutUser()
        setLocalToken("")
        showToast("success", response)
    }
    const { setLocalToken } = useContext(AuthContext)
    const [collapsed, setCollapsed] = useState(false);
    const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();
    const menuItems = [
        { title: "الإحصائيات", path: "/dashboard", icon: <IoBarChartSharp /> },
        { title: "الموظفين", path: "/employees", icon: <FaUsers /> },
        { title: "البيع", path: "/sales", icon: <FaFileSignature /> },
        { title: "التوريد", path: "/supplies", icon: <FaTruckMoving /> },
        { title: "المصروفات", path: "/expenses", icon: <FaMoneyBill /> },
        { title: "الإنتاج", path: "/production", icon: <FaIndustry /> },
        { title: "التحصيل", path: "/collection", icon: <FaMoneyCheckAlt /> },
        { title: "الموردين", path: "/suppliers", icon: <FaUserTie /> },
        { title: "العملاء", path: "/customers", icon: <FaUsersCog /> },
        { title: "الخامات", path: "/materials", icon: <FaBoxes /> },
        { title: "المنتجات", path: "/products", icon: <FaProductHunt /> },
        { title: "المخازن", path: "/stores", icon: <FaStore /> },
    ];
    return (
        <Layout style={{ direction: 'rtl', height: "100vh" }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" style={{ flexDirection: 'row', display: "flex", justifyContent: 'center', alignItems: 'center' }} >
                    <Link style={{ textDecoration: 'none', color: '#ffff', fontSize: '2em', alignItems: 'center', justifyContent: 'center', display: 'flex', marginBottom: '25px', marginTop: '15px' }} to={"/dashboard"}>
                        Home</Link>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    {menuItems.map((item, index) => (
                        <Menu.Item key={index + 1} icon={item.icon}>
                            <Link to={item.path}>{item.title}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer, justifyContent: 'space-between', alignItems: 'center', display: 'flex' }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{ fontSize: '16px', width: 64, height: 64 }}
                    />
                    <Button style={{ color: '#FF4F4B', fontSize: '1.2em', alignItems: 'center', display: 'flex' }} type="text" onClick={LogoutClick}>
                        <MdLogout style={{ marginLeft: '8px' }} />Logout
                    </Button>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                ><AppRouter />
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Managment-System ©{new Date().getFullYear()} Created by ExcelCodes
                </Footer>
            </Layout>
        </Layout>
    );
};