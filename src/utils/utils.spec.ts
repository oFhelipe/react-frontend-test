import { calculaNovoSaldo } from '.';

describe('Auando eu realizo uma transação', () => {
  test('Que é um deposito, o saldo deve aumentar', () => {
    const transacao = {
      transacao: 'Depósito',
      valor: 50,
    };
    const novoSaldo = calculaNovoSaldo(transacao, 100);
    expect(novoSaldo).toBe(150);
  });

  test('Que é uma transferencia, o saldo deve diminuir', () => {
    const transacao = {
      transacao: 'Transferência',
      valor: 50,
    };
    const novoSaldo = calculaNovoSaldo(transacao, 100);
    expect(novoSaldo).toBe(50);
  });
});

test('Deve retornar o valor do saldo atualizado com o rendimento', () => {
  const calculaRendimento = jest.fn((saldo) => saldo + saldo * 0.005);
  const saldo = 100;
  const novoSaldo = calculaRendimento(saldo);
  expect(novoSaldo).toBe(100.5);
  expect(calculaRendimento).toBeCalledTimes(1);
  expect(calculaRendimento).toHaveBeenCalledWith(saldo);
});
