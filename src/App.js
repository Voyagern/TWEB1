import React, { useState } from 'react';
import { Layout, Menu, Card } from 'antd';

const { Header, Content } = Layout;

const App = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState(''); // Starea pentru meniul selectat

    // Funcția pentru a actualiza meniul selectat
    const handleMenuSelect = (menuItem) => {
        setSelectedMenuItem(menuItem.key);
    };

    // Conținutul dinamic pentru fiecare element selectat din meniu
    const dynamicContents = {
        'Item 1': 'Conținut pentru Item 1',
        'Item 2': 'Laboratorul 1 - 3',
        'Item 3': 'Conținut pentru Item 3'
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    onSelect={handleMenuSelect}
                >
                    <Menu.Item key="1">Item 1</Menu.Item>
                    <Menu.Item key="2">Item 2</Menu.Item>
                    <Menu.Item key="3">Item 3</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">
                    <h1>List of Cards</h1>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <Card title={selectedMenuItem} style={{ width: 300, margin: '16px' }}>
                            {dynamicContents[selectedMenuItem]}
                        </Card>
                    </div>
                </div>
            </Content>
        </Layout>
    );
};

export default App;
