import { render, screen } from '@testing-library/react';
import Cabecalho from '.';

test('Deve rendenizar o nome do usário logado', () => {
  render(<Cabecalho />);
  const nomeUsuario = screen.getByText('Joana Fonseca Gomes');
  expect(nomeUsuario).toBeInTheDocument();
});
