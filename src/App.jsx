import { useAddress, ConnectWallet, Web3Button, useContract, useNFTBalance } from '@thirdweb-dev/react';
import { useState, useEffect, useMemo } from 'react';

const App = () => {
  // Usando os hooks que o thirdweb nos dá.
  const address = useAddress();
  console.log("👋 Address:", address);
  // inicializar o contrato editionDrop
  const editionDropAddress = "0x33472c022d16241593F556Da760386c8932d3FA1"
  const { contract: editionDrop } = useContract(editionDropAddress, "edition-drop");
  // Hook para sabermos se o usuário tem nosso NFT.
  const { data: nftBalance } = useNFTBalance(editionDrop, address, "0")

  const hasClaimedNFT = useMemo(() => {
    return nftBalance && nftBalance.gt(0)
  }, [nftBalance])

    // Se ele não tiver uma carteira conectada vamos chamar Connect Wallet
    if (!address) {
    return (
      <div className="landing">
        <h1>Bem vindo a BaskaDAO</h1>
        <div className="btn-hero">
          <ConnectWallet />
        </div>
      </div>
    );
  }
   
   // Adicione esse pedacinho!
   if (hasClaimedNFT) {
    return (
      <div className="member-page">
        <h1>Página dos membros da DAO</h1>
        <p>Parabéns por fazer parte do clube OnFire de baska!</p>
      </div>
    )
   };

  // Renderiza a tela de cunhagem do NFT.
  return (
    <div className="mint-nft">
      <h1>Cunhe seu NFT, ele mostra que você é membro desta DAO</h1>
      <div className="btn-hero">
        <Web3Button 
          contractAddress={editionDropAddress}
          action={contract => {
            contract.erc1155.claim(0, 1)
          }}
          onSuccess={() => {
            console.log(`🌊 Successfully Minted! Check it out on OpenSea: https://testnets.opensea.io/assets/${editionDrop.getAddress()}/0`);
          }}
          onError={error => {
            console.error("Failed to mint NFT", error);
          }}
        >
          CUNHE SEU NFT (GRATIS)
        </Web3Button>
      </div>
    </div>
  );

}

export default App;