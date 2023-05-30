import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    // Esse é o endereço do nosso contrato ERC-1155 do NFT de filiação.
    const editionDrop = await sdk.getContract("0x33472c022d16241593F556Da760386c8932d3FA1", "edition-drop");
    // Esse é o endereço do nosso contrato ERC-20 do nosso token.
    const token = await sdk.getContract("0x2921882830f334EB190C4c8e994adf88e44bAA5c","token");
    // Pegue o endereço de todas as pessoas que possuem o nosso NFT de filiação, que tem
    // o tokenId 0.

    console.log("Iniciando coleta de wallets")
    const walletAddresses = await editionDrop.history.getAllClaimerAddresses(0);
    console.log("Coleta de wallets")
    if (walletAddresses.length === 0) {
      console.log(
        "Ninguém mintou o NFT ainda, peça para alguns amigos fazerem isso e ganhar um NFT de graça!",
      );
      process.exit(0);
    }
    
    // faça um loop no array de endereços.
    const airdropTargets = walletAddresses.map((address) => {
      // Escolha um # aleatório entre 1000 e 10000.
      const randomAmount = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
      console.log("✅ Vai enviar", randomAmount, "tokens para ", address);
      
      // Configure o alvo.
      const airdropTarget = {
        toAddress: address,
        amount: randomAmount,
      };
  
      return airdropTarget;
    });
    
    // Chame transferBatch em todos os alvos do airdrop.
    console.log("🌈 Começando o airdrop...")
    await token.transferBatch(airdropTargets);
    console.log("✅ Feito o airdrop de tokens para todos os donos de NFT!");
  } catch (err) {
    console.error("O airdrop de tokens falhou", err);
  }
})();