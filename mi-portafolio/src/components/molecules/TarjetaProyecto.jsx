import React from 'react';
import { Card, Tag } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { Boton } from '../atoms/Boton';

export const TarjetaProyecto = ({ titulo, tipo, imagen, linkRepo }) => (
    <Card
        hoverable
        cover={<img alt={titulo} src={imagen} style={{ height: '160px', objectFit: 'cover' }} />}
    >
        <Tag color="cyan" style={{ marginBottom: '8px' }}>{tipo}</Tag>
        <Card.Meta title={titulo} style={{ marginBottom: '14px' }} />
        <Boton texto="Ver en GitHub" link={linkRepo} icono={<GithubOutlined />} />
    </Card>
);