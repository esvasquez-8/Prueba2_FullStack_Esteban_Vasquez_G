import React from 'react';
import { TituloSeccion } from '../atoms/TituloSeccion';
import { ItemExperiencia } from '../molecules/ItemExperiencia';

export const Experiencia = ({ lista = [] }) => (
    <section style={{ marginBottom: '28px' }}>
        <TituloSeccion titulo="Experiencia Laboral"/>
        {lista.map((exp) => (
            <ItemExperiencia key={exp.id} {...exp} />
        ))}
    </section>
);