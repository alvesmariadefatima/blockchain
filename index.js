const Blockchain = require('./Blockchain');

const blockchain = new Blockchain();
blockchain.addBlock({from: 'a', to: 'b', amout: 1});
blockchain.addBlock({from: 'a', to: 'c', amout: 2});

//COINBASE - 6.25 BTC

console.log(JSON.stringify(blockchain));
console.log(blockchain.isValid());

blockchain.blocks[1].data = {from: 'a', to: 'b', amout: 2};
console.log(JSON.stringify(blockchain));
console.log(blockchain.isValid());

// const Block = require('./block');
// const bloco1 = new Block();
// console.log(bloco1);

// const bloco2 = new Block();
// console.log(bloco2);

// const transaction = {
//     from: 'a',
//     from: 'b',
//     amount: 1
// }

// const str = JSON.stringify(transaction);

// const hash = sha256(str).toString();
// console.log(hash);

// transaction.from = 'c';
// console.log(sha256(JSON.stringify(transaction)).toString())