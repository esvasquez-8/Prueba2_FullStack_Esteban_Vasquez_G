import React from 'react';
import { Avatar } from 'antd';

export const FotoPerfil = ({ imagen, nombre }) => (
    <Avatar
        src={imagen}
        alt={nombre}
        size={120}
        style={{ border: '2px solid #1677ff', marginBottom: '12px' }}
    />
);