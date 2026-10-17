import React from 'react';
import { Card, Tag, Typography } from 'antd';

const { Title, Text } = Typography;

export const ItemEstudio = ({ institucion, titulo, anio }) => (
    <Card size="small" style={{ marginBottom: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
                <Title level={5} style={{ margin: 0 }}>{titulo}</Title>
                <Text type="secondary">{institucion}</Text>
            </div>
            <Tag color="geekblue">{anio}</Tag>
        </div>
    </Card>
);