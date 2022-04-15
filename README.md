# Express.js + Hardhat example

Run project:
- Run hardhat node by `npx hardhat node`
- Open another terminal
- Deploy contract by `npx hardhat run scripts/deploy.ts --network localhost`
- Setup the contract address in server-config.json
- Start server by `npx hardhat run scripts/server.ts --network localhost`
- You can simply mint a new NFT token by `http://localhost:8080/mint`
- Watch your log in the terminal