import React from 'react';
import { Card, Tag, Typography } from 'antd';

const { Title, Text, Paragraph } = Typography;

export const ItemExperiencia = ({ empresa, cargo, fecha, detalle }) => (
    <Card style={{ marginBottom: '14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Title level={4} style={{ margin: 0 }}>{cargo}</Title>
            <Tag color="blue">{fecha}</Tag>
        </div>
        <Text strong type="secondary">{empresa}</Text>
        <Paragraph style={{ marginTop: '8px', marginBottom: 0 }}>{detalle}</Paragraph>
    </Card>
);