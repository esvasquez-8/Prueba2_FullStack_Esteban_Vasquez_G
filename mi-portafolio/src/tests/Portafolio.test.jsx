import { describe, test, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import InicioPortafolio from '../components/pages/InicioPortafolio';
import { infoPersonal } from '../data/datosPortafolio';

describe('Pruebas automatizadas del Portafolio SPA Vertical', () => {

    beforeEach(() => {
        render(<InicioPortafolio />);
    });

    test('Renderiza correctamente el nombre del usuario en la sección principal', () => {
        const nombreElemento = screen.getByText(new RegExp(infoPersonal.nombre, 'i'));
        expect(nombreElemento).toBeInTheDocument();
    });

    test('Renderiza la sección de Experiencia Laboral en la página', () => {
        const tituloExperiencia = screen.getByRole('heading', { name: /Experiencia Laboral/i });
        expect(tituloExperiencia).toBeInTheDocument();
    });

    test('Renderiza la sección de Estudios y Proyectos', () => {
        const tituloEstudios = screen.getByRole('heading', { name: /^Estudios$/i });
        const tituloProyectos = screen.getByRole('heading', { name: /Desarrollos y Proyectos/i });

        expect(tituloEstudios).toBeInTheDocument();
        expect(tituloProyectos).toBeInTheDocument();
    });

    test('Muestra mensajes de error de validación al intentar enviar el formulario vacío', () => {
        const botonEnviar = screen.getByRole('button', { name: /Enviar Mensaje/i });

        fireEvent.click(botonEnviar);

        expect(screen.getByText(/El nombre es obligatorio/i)).toBeInTheDocument();
        expect(screen.getByText(/El correo es obligatorio/i)).toBeInTheDocument();
    });

});