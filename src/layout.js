import React, { useState } from 'react';
import { Layout, Menu, Card, Input, Form, Button } from 'antd';

const { Header, Content } = Layout;

const App = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState('');
    const [inputValues, setInputValues] = useState({});
    const [form] = Form.useForm();

    const handleMenuSelect = (menuItem) => {
        setSelectedMenuItem(menuItem.key);
        form.resetFields(); // Resetăm câmpurile formularului la schimbarea cardului selectat
    };

    const onFinish = (values) => {
        const { content1, content2, content3 } = values;
        setInputValues({
            ...inputValues,
            [selectedMenuItem]: { content1, content2, content3 }
        });
        form.resetFields(); // Resetăm câmpurile formularului după submit
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
                    <Menu.Item key="1">Card 1</Menu.Item>
                    <Menu.Item key="2">Card 2</Menu.Item>
                    <Menu.Item key="3">Card 3</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">
                    <h1>List of Cards</h1>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <Card title={`Content for Card ${selectedMenuItem}`} style={{ width: 300, margin: '16px' }}>
                            <Form
                                form={form}
                                name={`dynamic_form_nest_item_${selectedMenuItem}`}
                                onFinish={onFinish}
                                autoComplete="off"
                            >
                                <Form.Item
                                    name="content1"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your name!',
                                        },
                                        {
                                            pattern: /^[a-zA-Z\s]*$/,
                                            message: 'Please input letters only!',
                                        },
                                    ]}
                                >
                                    <Input placeholder={`Your Name for Card ${selectedMenuItem}`} />
                                </Form.Item>
                                <Form.Item
                                    name="content2"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your age!',
                                        },
                                        {
                                            pattern: /^[0-9]*$/,
                                            message: 'Please input digits only!',
                                        },
                                    ]}
                                >
                                    <Input placeholder={`Your Age for Card ${selectedMenuItem}`} />
                                </Form.Item>
                                <Form.Item
                                    name="content3"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your card number!',
                                        },
                                        {
                                            pattern: /^[0-9]{4}\s[0-9]{4}$/,
                                            message: 'Please input a valid card number (e.g., "1111 1111")!',
                                        },
                                    ]}
                                >
                                    <Input placeholder={`Your Card Number for Card ${selectedMenuItem}`} />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                        <div style={{ width: 300, margin: '16px' }}>
                            <h2>Input Value for {selectedMenuItem}</h2>
                            <div>{inputValues[selectedMenuItem]?.content1}</div>
                            <div>{inputValues[selectedMenuItem]?.content2}</div>
                            <div>{inputValues[selectedMenuItem]?.content3}</div>
                        </div>
                    </div>
                </div>
            </Content>
        </Layout>
    );
};

export default App;
