import React from 'react';
import { Button } from 'antd';

export const Boton = ({ texto, tipo = 'primary', htmlType = 'button', alHacerClick, link, icono }) => (
    <Button
        type={tipo}
        htmlType={htmlType}
        onClick={alHacerClick}
        href={link}
        target={link ? '_blank' : undefined}
        icon={icono}
        style={{ margin: '4px' }}
    >
        {texto}
    </Button>
);