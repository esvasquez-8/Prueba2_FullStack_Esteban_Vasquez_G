import React from 'react';
import { Tabs, Typography } from 'antd';

const { Title } = Typography;

export const BarraNavegacion = ({ pestanaActiva, setPestanaActiva }) => {
    const pestanas = [
        { key: 'todo', label: 'Inicio' },
        { key: 'personal', label: '¿Quién soy?' },
        { key: 'experiencia', label: 'Experiencia' },
        { key: 'estudios', label: 'Estudios' },
        { key: 'proyectos', label: 'Proyectos' },
        { key: 'contacto', label: 'Contacto' },
    ];

    return (
        <header style={{ background: '#fff', padding: '12px 24px 0', borderBottom: '1px solid #f0f0f0' }}>
            <div style={{ maxWidth: '960px', margin: '0 auto' }}>
                <Title level={4} style={{ margin: '0 0 8px 0' }}>Portafolio Esteban Vásquez</Title>
                <Tabs activeKey={pestanaActiva} onChange={setPestanaActiva} items={pestanas} />
            </div>
        </header>
    );
};