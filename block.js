const sha256 = require('crypto-js/sha256');

module.exports = class Block {
    constructor(index = 0, previousHash = null, data = 'Genesis Block', difficulty = "") {
        this.index = index;
        this.data = data;
        this.timestamp = new Date();
        this.previousHash = previousHash;
        this.nonce = 0;
        this.hash = this.generateHash();

        // A mineração deve ser feita após o objeto ser construído.
        this.mine(difficulty);
    }

    generateHash() {
        return sha256(this.index + this.previousHash + JSON.stringify(this.data) + this.timestamp + this.nonce).toString();
    }

    mine(prefix) {
        // Loop até encontrar um hash que comece com o prefixo desejado
        while (!this.hash.startsWith(prefix)) {
            this.nonce++;
            this.hash = this.generateHash();
        }
    }
}
