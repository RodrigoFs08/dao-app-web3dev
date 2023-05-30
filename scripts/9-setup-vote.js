import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    // Esse é o nosso contrato de governança.
    const vote = await sdk.getContract("0xB8c673436D0EcA3E29607Fda0479fD6f3c960dce", "vote");
    // Esse é o nosso contrato ERC-20.
    const token = await sdk.getContract("0x2921882830f334EB190C4c8e994adf88e44bAA5c", "token");
    // Dê para a nosso tesouro o poder de cunhar tokens adicionais se necessário.
    await token.roles.grant("minter", vote.getAddress());

    console.log(
      "✅  Módulo de votos recebeu permissão de manipular os tokens com sucesso"
    );
  } catch (error) {
    console.error(
      "falha ao dar acesso aos tokens ao módulo de votos",
      error
    );
    process.exit(1);
  }

  try {
    // Esse é o nosso contrato de governança.
    const vote = await sdk.getContract("0x294B096015FC2293569Df289ffac7D3AaE2Ea756", "vote");
    // Esse é o nosso contrato ERC-20.
    const token = await sdk.getContract("0x2921882830f334EB190C4c8e994adf88e44bAA5c", "token");
    // Pegue o saldo de tokens da nossa carteira, lembre-se -- nós detemos basicamente o fornecimento inteiro agora!
    const ownedTokenBalance = await token.balanceOf(
      process.env.WALLET_ADDRESS
    );

    // Pegue 90% do fornecimento que nós detemos.
    const ownedAmount = ownedTokenBalance.displayValue;
    const percent90 = Number(ownedAmount) / 100 * 90;

    // Transfira 90% do fornecimento para nosso contrato de votação.
    await token.transfer(
      vote.getAddress(),
      percent90
    ); 

    console.log("✅ Transferiu " + percent90 + " tokens para o módulo de votos com sucesso");
  } catch (err) {
    console.error("falhar ao transferir tokens ao módulo de votos", err);
  }
})();