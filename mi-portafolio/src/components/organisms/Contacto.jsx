import React from 'react';
import { Card, Alert } from 'antd';
import { GithubOutlined, SendOutlined } from '@ant-design/icons';
import { TituloSeccion } from '../atoms/TituloSeccion';
import { Formulario } from '../molecules/Formulario';
import { Boton } from '../atoms/Boton';
import { usoFormulario } from '../../hooks/usoFormulario';

export const Contacto = ({ github }) => {
    const { datos, errores, enviado, cambiarValor, enviarFormulario } = usoFormulario();

    return (
        <section style={{ marginBottom: '28px' }}>
            <TituloSeccion titulo="Contacto" subtitulo="Mis redes y formulario" />
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <Boton texto="GitHub" link={github} tipo="default" icono={<GithubOutlined />} />
            </div>

            <Card style={{ maxWidth: '550px', margin: '0 auto' }}>
                {enviado && (
                    <Alert message="¡Mensaje enviado con éxito!" type="success" showIcon style={{ marginBottom: '14px' }} />
                )}
                <form onSubmit={enviarFormulario} noValidate>
                    <Formulario
                        etiqueta="Nombre"
                        nombre="nombre"
                        valor={datos.nombre}
                        onChange={cambiarValor}
                        error={errores.nombre}
                    />
                    <Formulario
                        etiqueta="Correo"
                        nombre="correo"
                        tipo="email"
                        valor={datos.correo}
                        onChange={cambiarValor}
                        error={errores.correo}
                    />
                    <Formulario
                        etiqueta="Mensaje"
                        nombre="mensaje"
                        esArea
                        valor={datos.mensaje}
                        onChange={cambiarValor}
                        error={errores.mensaje}
                    />
                    <Boton texto="Enviar Mensaje" htmlType="submit" tipo="primary" icono={<SendOutlined />} />
                </form>
            </Card>
        </section>
    );
};