import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x33472c022d16241593F556Da760386c8932d3FA1", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "ON FIRE BALLER",
        description: "Esse NFT vai te dar acesso ao BASKADAO!",
        image: readFileSync("scripts/assets/logo.png"),
      },
    ]);
    console.log("✅ Novo NFT criado com sucesso no drop!");
  } catch (error) {
    console.error("falha ao criar o novo NFT", error);
  }
})()