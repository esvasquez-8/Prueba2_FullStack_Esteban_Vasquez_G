import React, { useState, useEffect } from 'react';
import { PlantillaPortafolio } from '../templates/PlantillaPortafolio';
import { SeccionPersonal } from '../organisms/SeccionPersonal';
import { Experiencia } from '../organisms/Experiencia';
import { Estudios } from '../organisms/Estudios';
import { Proyectos } from '../organisms/Proyectos';
import { Contacto } from '../organisms/Contacto';
import { infoPersonal, listaExperiencias, listaEstudios, listaProyectos } from '../../data/datosPortafolio';

export const InicioPortafolio = () => {
    const [pestanaActiva, setPestanaActiva] = useState('todo');

    useEffect(() => {
        document.title = `Portafolio | ${infoPersonal.nombre}`;
    }, [pestanaActiva]);

    return (
        <PlantillaPortafolio
            pestanaActiva={pestanaActiva}
            setPestanaActiva={setPestanaActiva}
            infoPersonal={infoPersonal}
        >
            {(pestanaActiva === 'todo' || pestanaActiva === 'personal') && (
                <SeccionPersonal info={infoPersonal} />
            )}
            {(pestanaActiva === 'todo' || pestanaActiva === 'experiencia') && (
                <Experiencia experiencias={listaExperiencias} />
            )}
            {(pestanaActiva === 'todo' || pestanaActiva === 'estudios') && (
                <Estudios estudios={listaEstudios} />
            )}
            {(pestanaActiva === 'todo' || pestanaActiva === 'proyectos') && (
                <Proyectos proyectos={listaProyectos} />
            )}
            {(pestanaActiva === 'todo' || pestanaActiva === 'contacto') && (
                <Contacto github={infoPersonal.github}  />
            )}
        </PlantillaPortafolio>
    );
};