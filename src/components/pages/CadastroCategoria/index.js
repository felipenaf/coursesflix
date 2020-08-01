import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Template from '../Template';
import FormInput from '../../FormInput';
import FormTextArea from '../../FormTextArea';

function CadastroCategoria() {
  const defaultValues = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [categorias, setCategoria] = useState([]);
  const [values, setValues] = useState(defaultValues);

  function handleChange(event) {
    // fazendo extração dessa forma o getAttribute dá pau
    // então usei ele normalmente na linha 23
    const { value } = event.target;

    setValues({
      ...values,
      [event.target.getAttribute('name')]: value 
    })
  }

  function handleSubmit(event) {
    event.preventDefault();

    setCategoria([
      ...categorias,
      values
    ])

    setValues(defaultValues);
  }
  
  return (
    <Template>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Nome da categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormTextArea
          label="Descrição"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormInput
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, i) => {
          return (
            <li key={i}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </Template>
  )
}

export default CadastroCategoria;