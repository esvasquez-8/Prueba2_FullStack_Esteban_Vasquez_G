import React from 'react';
import { Typography, Divider } from 'antd';

const { Title, Text } = Typography;

export const TituloSeccion = ({ titulo, subtitulo }) => (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Title level={2} style={{ marginBottom: '4px' }}>{titulo}</Title>
        {subtitulo && <Text type="secondary">{subtitulo}</Text>}
        <Divider style={{ margin: '10px auto', width: '60px', minWidth: '60px' }} />
    </div>
);