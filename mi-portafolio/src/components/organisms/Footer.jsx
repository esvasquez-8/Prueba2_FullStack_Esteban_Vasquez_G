import React from 'react';
import { Layout, Typography } from 'antd';

const { Text } = Typography;

export const Footer = ({ nombre, correo }) => {
    const anioActual = new Date().getFullYear();

    return (
        <Layout.Footer style={{ textAlign: 'center', background: '#001529', color: '#fff' }}>
            <Text style={{ color: '#fff', display: 'block' }}>
                © {anioActual} {nombre} - Todos los derechos reservados.
            </Text>
            <Text style={{ color: '#94a3b8', fontSize: '13px' }}>
                Contacto: {correo}
            </Text>
        </Layout.Footer>
    );
};