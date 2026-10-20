import React from 'react';
import { TituloSeccion } from '../atoms/TituloSeccion';
import { ItemEstudio } from '../molecules/ItemEstudio';

export const Estudios = ({ lista = [] }) => (
    <section style={{ marginBottom: '28px' }}>
        <TituloSeccion titulo="Estudios" />
        {lista.map((est) => (
            <ItemEstudio key={est.id} {...est} />
        ))}
    </section>
);