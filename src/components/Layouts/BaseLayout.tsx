import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Route, Outlet, Link } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
const { Header, Sider, Content } = Layout;
function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>xxx</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem(<Link to="/app/home">home</Link>, 'home', <ContainerOutlined />),
  // getItem(<Link to="/app/vtree">vtree</Link>, 'vtree', <PieChartOutlined />),

  getItem('RTree (react)', 'react', <AppstoreOutlined />, [
    getItem(
      <Link to="/app/rtree">RTree Home</Link>,
      'rtree',
      <PieChartOutlined />,
    ),
    getItem(
      <Link to="/app/rtree/leaf">树叶</Link>,
      'leaf',
      <PieChartOutlined />,
    ),
    getItem('鳄梨树', 'sub3', null, [
      getItem(
        <Link to="/app/rtree/avocado">鳄梨</Link>,
        'avocado',
        <PieChartOutlined />,
      ),
      getItem(
        <Link to="/app/rtree/tea">鳄梨奶茶</Link>,
        'tea',
        <PieChartOutlined />,
      ),
    ]),
  ]),

  getItem('VTree (vue)', 'vue', <AppstoreOutlined />, [
    getItem(
      <Link to="/app/vtree">VTree Home</Link>,
      'vtree',
      <PieChartOutlined />,
    ),
    getItem(
      <Link to="/app/vtree/leaf">树叶</Link>,
      'vtreeLeaf',
      <PieChartOutlined />,
    ),
    getItem('鳄梨树', 'vue3', null, [
      getItem(
        <Link to="/app/vtree/avocado">鳄梨</Link>,
        'vtreeAvocado',
        <PieChartOutlined />,
      ),
      getItem(
        <Link to="/app/vtree/tea">鳄梨奶茶</Link>,
        'vtreetea',
        <PieChartOutlined />,
      ),
    ]),
  ]),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout
      className="ant-layout-has-sider"
      style={{
        height: 'calc(100vh - 50px)',
        overflowY: 'scroll',
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            },
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <div id="MFContainer" data-micromoculename="initGlobalState">
            MFContainer
          </div>
          {/* <Route path="sabout" element={<About />} /> */}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
