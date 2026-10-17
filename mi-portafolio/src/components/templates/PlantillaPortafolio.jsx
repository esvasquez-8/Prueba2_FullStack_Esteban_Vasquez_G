import React from 'react';
import { Layout } from 'antd';
import { BarraNavegacion } from '../organisms/BarraNavegacion';
import { Footer } from '../organisms/Footer';

const { Content } = Layout;

export const PlantillaPortafolio = ({ pestanaActiva, setPestanaActiva, infoPersonal, children }) => (
    <Layout style={{ minHeight: '100vh' }}>
        <BarraNavegacion pestanaActiva={pestanaActiva} setPestanaActiva={setPestanaActiva} />
        <Content style={{ maxWidth: '960px', width: '100%', margin: '24px auto', padding: '0 16px' }}>
            {children}
        </Content>
        <Footer nombre={infoPersonal.nombre} correo={infoPersonal.correo} />
    </Layout>
);