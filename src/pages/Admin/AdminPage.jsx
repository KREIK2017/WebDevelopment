import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
const AdminPage = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          {/* Додайте потрібні пункти меню */}
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {/* Додайте підменю та пункти меню */}
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }}>
              <Menu.Item key="1">Dashboard</Menu.Item>
              <SubMenu key="sub1" title="Підменю 1">
                <Menu.Item key="2">Опція 1</Menu.Item>
                <Menu.Item key="3">Опція 2</Menu.Item>
              </SubMenu>
              {/* Додайте інші пункти меню за потребою */}
            </Menu>
            <Content className="site-layout-background" style={{ padding: 24, margin: 0, minHeight: 280 }}>
              <h1>Ласкаво просимо в Панель Адміністратора</h1>
              {/* Додайте ваш вміст тут */}
            </Content>

            {/* Додайте вміст сторінки адміністратора */}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AdminPage;
