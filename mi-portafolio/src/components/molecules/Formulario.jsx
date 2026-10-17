import React from 'react';
import { Input, Typography } from 'antd';

const { Text } = Typography;
const { TextArea } = Input;

export const Formulario = ({ etiqueta, nombre, tipo = 'text', valor, onChange, error, esArea = false }) => (
    <div style={{ marginBottom: '14px' }}>
        <label htmlFor={nombre} style={{ display: 'block', fontWeight: 600, marginBottom: '4px' }}>
            {etiqueta}
        </label>
        {esArea ? (
            <TextArea id={nombre} name={nombre} rows={4} value={valor} onChange={onChange} status={error ? 'error' : ''} />
        ) : (
            <Input id={nombre} name={nombre} type={tipo} value={valor} onChange={onChange} status={error ? 'error' : ''} />
        )}
        {error && <Text type="danger">{error}</Text>}
    </div>
);

export default Formulario;