import { useState } from 'react';

export const usoFormulario = () => {
    const [datos, setDatos] = useState({ nombre: '', correo: '', mensaje: '' });
    const [errores, setErrores] = useState({});
    const [enviado, setEnviado] = useState(false);

    const validar = () => {
        const nuevosErrores = {};
        if (!datos.nombre.trim()) {
            nuevosErrores.nombre = 'El nombre es obligatorio';
        }
        if (!datos.correo.trim()) {
            nuevosErrores.correo = 'El correo es obligatorio';
        } else if (!datos.correo.includes('@')) {
            nuevosErrores.correo = 'Ingresa un correo válido';
        }
        if (!datos.mensaje.trim() || datos.mensaje.trim().length < 10) {
            nuevosErrores.mensaje = 'El mensaje debe tener mínimo 10 letras';
        }
        return nuevosErrores;
    };

    const cambiarValor = (e) => {
        const { name, value } = e.target;
        setDatos({ ...datos, [name]: value });
        setEnviado(false);
    };

    const enviarFormulario = (e) => {
        e.preventDefault();
        const resultadoErrores = validar();
        if (Object.keys(resultadoErrores).length > 0) {
            setErrores(resultadoErrores);
            setEnviado(false);
        } else {
            setErrores({});
            setEnviado(true);
            setDatos({ nombre: '', correo: '', mensaje: '' });
        }
    };

    return { datos, errores, enviado, cambiarValor, enviarFormulario };
};

export default usoFormulario;