import React from 'react';
import { TituloSeccion } from '../atoms/TituloSeccion';
import { ItemExperiencia } from '../molecules/ItemExperiencia';

export const Experiencia = ({ experiencias }) => (
    <section style={{ marginBottom: '28px' }}>
        <TituloSeccion titulo="Experiencia Laboral"/>
        {experiencias.map((exp) => (
            <ItemExperiencia key={exp.id} {...exp} />
        ))}
    </section>
);