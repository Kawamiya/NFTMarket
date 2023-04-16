<template>
    NftMarketHome

</template>

<script>
import Web3 from "web3"
export default {
    name: "NftMarketHome",
    methods: {
        // async test() {
        //     let web3 = new Web3(window.ethereum);
        //     console.log(typeof web3)
        //     const accounts = await web3.eth.getAccounts();
        //     console.log("accounts",typeof accounts[0]);
        //     const balance = await web3.eth.getBalance(accounts[0]);
        //     console.log("balance",typeof balance);
        //     const networkId = await web3.eth.net.getId();
        //     console.log("networkId",typeof networkId);
        //     const contract = new web3.eth.Contract(NFTMarketplace.abi,NFTMarketplace.networks[networkId].address);
        //     console.log("contract:",typeof contract)
        //     //first we should mint a NFT item
        //     let _listingPrice = Web3.utils.toWei("0.025", "ether");
        //     await contract.methods.mintToken("http://222.com", Web3.utils.toWei("10", "ether")).send({
        //         from: accounts[0],
        //         value: _listingPrice
        //     });
        //
        //     const Items = await contract.methods.getAllNftOnSale().call();
        //     console.log("Items",Items)
        //     console.log(typeof _listingPrice)
        // }

    },
    created() {
        this.$store.dispatch("getWeb3");
    },
}
</script>

<style scoped>

</style>