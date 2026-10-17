import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { TituloSeccion } from '../atoms/TituloSeccion';
import { TarjetaProyecto } from '../molecules/TarjetaProyecto';
import { Boton } from '../atoms/Boton';

export const Proyectos = ({ proyectos }) => {
    const [filtro, setFiltro] = useState('Todos');
    const categorias = ['Todos', 'Web', 'Kotlin'];

    const proyectosFiltrados = filtro === 'Todos'
        ? proyectos
        : proyectos.filter((p) => p.tipo === filtro);

    return (
        <section style={{ marginBottom: '28px' }}>
            <TituloSeccion titulo="Desarrollos y Proyectos" subtitulo="Mis repositorios en GitHub" />
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                {categorias.map((cat) => (
                    <Boton
                        key={cat}
                        texto={cat}
                        tipo={filtro === cat ? 'primary' : 'default'}
                        alHacerClick={() => setFiltro(cat)}
                    />
                ))}
            </div>
            <Row gutter={[16, 16]}>
                {proyectosFiltrados.map((proy) => (
                    <Col xs={24} sm={12} md={8} key={proy.id}>
                        <TarjetaProyecto {...proy} />
                    </Col>
                ))}
            </Row>
        </section>
    );
};