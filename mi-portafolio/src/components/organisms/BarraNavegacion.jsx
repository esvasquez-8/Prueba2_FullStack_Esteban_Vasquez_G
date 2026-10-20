import React from 'react';
import { Menu } from 'antd';

export const BarraNavegacion = () => {
    const items = [
        { label: <a href="#quien-soy">¿Quién soy?</a>, key: 'quien-soy' },
        { label: <a href="#experiencia">Experiencia</a>, key: 'experiencia' },
        { label: <a href="#estudios">Estudios</a>, key: 'estudios' },
        { label: <a href="#proyectos">Proyectos</a>, key: 'proyectos' },
        { label: <a href="#contacto">Contacto</a>, key: 'contacto' },
    ];

    return (
        <Menu
            mode="horizontal"
            items={items}
            style={{ justifyContent: 'center', marginBottom: '24px' }}
        />
    );
};