import React from 'react';
import { SeccionPersonal } from '../organisms/SeccionPersonal';
import { Experiencia } from '../organisms/Experiencia';
import { Estudios } from '../organisms/Estudios';
import { Proyectos } from '../organisms/Proyectos';
import { Contacto } from '../organisms/Contacto';
import { infoPersonal, listaExperiencias, listaEstudios, listaProyectos } from '../../data/datosPortafolio';

const InicioPortafolio = () => {
    return (
        <div>
            <section id="quien-soy">
                <SeccionPersonal info={infoPersonal} />
            </section>

            <section id="experiencia">
                <Experiencia lista={listaExperiencias} />
            </section>

            <section id="estudios">
                <Estudios lista={listaEstudios} />
            </section>

            <section id="proyectos">
                <Proyectos proyectos={listaProyectos} />
            </section>

            <section id="contacto">
                <Contacto github={infoPersonal.github} correo={infoPersonal.correo} />
            </section>
        </div>
    );
};

export default InicioPortafolio;