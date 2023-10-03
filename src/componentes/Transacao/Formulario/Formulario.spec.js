import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from '.';

describe('Deve rendenizar um campo de input', () => {
  test('no documento', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    expect(campoTexto).toBeInTheDocument();
  });

  test('com type number', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    expect(campoTexto).toHaveAttribute('type', 'number');
  });

  test('que pode ser preenchido', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    userEvent.type(campoTexto, '50');
    expect(campoTexto).toHaveValue(50);
  });
});

test('Deve chamar um evento de onSubmit ao clicar em realizar transação', () => {
  const realizarTransacao = jest.fn();
  render(<Formulario realizarTransacao={realizarTransacao} />);

  const botao = screen.getByRole('button');
  userEvent.click(botao);

  expect(realizarTransacao).toBeCalledTimes(1);
});

test('Deve selecionar uma opção de deposito', () => {
  render(<Formulario realizarTransacao={jest.fn()} />);
  const options = screen.getByTestId('select-opcoes');

  userEvent.selectOptions(options, ['Depósito']);

  const selectedOptions = screen.getAllByRole('option', {
    selected: true,
  });

  const notSelectedOptions = screen.getAllByRole('option', {
    selected: false,
  });

  expect(selectedOptions).toHaveLength(1);
  expect(selectedOptions[0].value).toBe('Depósito');
  expect(selectedOptions[0].textContent).toBe('Depósito');

  expect(notSelectedOptions).toHaveLength(2);
});
