// Cadastro da conta bancária a pessoa
let nome = prompt("Digite o seu nome completo: ");
let numeroConta = prompt("Digite o número da sua conta (5 dígitos): ");
let saldo = 0;
let extrato = []; // Pra armazenar operações de saque e depósito

// Exibição inicial da conta da pessoa
alert("Conta criada com sucesso!\nNome: " + nome + "\nNúmero da conta: " + numeroConta + "\nSaldo inicial: R$ " + saldo);

// Função pra mostrar as opções pra pessoa
function mostrarMenu() {
  return prompt(
    "Escolha uma operação:\n" +
      "1. Saldo\n" +
      "2. Extrato\n" +
      "3. Saque\n" +
      "4. Depósito\n" +
      "5. Sair"
  );
}

// Função pra exibir o saldo atual da pessoa
function mostrarSaldo() {
  alert("Nome: " + nome + "\nNúmero da conta: " + numeroConta + "\nSaldo atual: R$ " + saldo);
}

// Função pra exibir o extrato da pessoa
function mostrarExtrato() {
  if (extrato.length === 0) {
    alert("Nenhuma operação realizada até o momento.");
  } else {
    let extratoTexto = "Extrato de operações:\n";
    for (let i = 0; i < extrato.length; i++) {
      extratoTexto += extrato[i] + "\n";
    }
    alert(extratoTexto);
  }
}

// Função pra realizar o saque da pessoa
function realizarSaque() {
  let valorSaque = parseFloat(prompt("Digite o valor para saque: R$ "));
  if (valorSaque > saldo) {
    alert("Saldo insuficiente para realizar o saque.");
  } else {
    saldo -= valorSaque;
    extrato.push("Saque: R$ " + valorSaque + " | Saldo: R$ " + saldo);
    alert("Saque realizado com sucesso. Saldo atual: R$ " + saldo);
  }
}

// Função pra realizar o depósito da pessoa
function realizarDeposito() {
  let valorDeposito = parseFloat(prompt("Digite o valor para depósito: R$ "));
  saldo += valorDeposito;
  extrato.push("Depósito: R$ " + valorDeposito + " | Saldo: R$ " + saldo);
  alert("Depósito realizado com sucesso. Saldo atual: R$ " + saldo);
}

// Loop pra o menu principal
let operacao = "";

while (operacao !== "5") {
  operacao = mostrarMenu();

  if (operacao === "1") {
    mostrarSaldo();
  } else if (operacao === "2") {
    mostrarExtrato();
  } else if (operacao === "3") {
    realizarSaque();
  } else if (operacao === "4") {
    realizarDeposito();
  } else if (operacao === "5") {
    alert("Obrigado por utilizar nosso sistema bancário!\n" + 
          "Nome: " + nome + "\nNúmero da conta: " + numeroConta + "\nSaldo final: R$ " + saldo);
  } else {
    alert("Opção inválida. Tente novamente.");
  }
}
