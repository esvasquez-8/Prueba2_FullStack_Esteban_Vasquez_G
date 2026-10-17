import React from 'react';
import { Card, Typography } from 'antd';
import { FotoPerfil } from '../atoms/FotoPerfil';
import { TituloSeccion } from '../atoms/TituloSeccion';

const { Title, Paragraph } = Typography;

export const SeccionPersonal = ({ info }) => (
    <section style={{ marginBottom: '28px' }}>
        <Card style={{ textAlign: 'center' }}>
            <FotoPerfil imagen={info.foto} nombre={info.nombre} />
            <TituloSeccion titulo="¿Quién soy?" subtitulo={info.carrera} />
            <Title level={3} style={{ marginTop: 0 }}>{info.nombre}</Title>
            <Paragraph style={{ maxWidth: '650px', margin: '0 auto' }}>
                {info.descripcion}
            </Paragraph>
        </Card>
    </section>
);