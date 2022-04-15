import express, { Express, Request, Response } from 'express';
import { ethers } from "hardhat";
import * as config from "../server-config.json";

const app: Express = express();

async function main() {

    const MyToken = await ethers.getContractFactory("MyToken");
    const mytoken = MyToken.attach(config.contract_address);

    mytoken.on('Transfer', (from, to, value) => {
        if (from == 0)
            console.log(`Token minted for ${to}, token ID: ${value}`)
        else
            console.log(`Token transfer from ${from} to ${to}, token ID: ${value}`)
    })

    app.get('/', (req: Request, res: Response) => {
        res.send('Hardhat + Express (with TypeScript) example!')
    })

    app.get('/mint', async (req: Request, res: Response) => {
        const signers = await ethers.getSigners();
        await mytoken.safeMint(signers[0].address)

        res.send(`Token minted!`)
    })

    app.listen(config.port, () => {
        console.log(`Example app listening on port ${config.port}`)
    })
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});