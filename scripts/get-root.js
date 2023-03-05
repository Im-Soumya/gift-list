const MerkleTree = require("../utils/MerkleTree");
const verifyProof = require("../utils/verifyProof");
const niceList = require("../utils/niceList.json");

const merkleTree = new MerkleTree(niceList);

const treeRoot = merkleTree.getRoot();
console.log(`Merkle root is ${treeRoot}`);

const nameToSearch = "Heisenberg";
const nameIndex = niceList.findIndex((name) => name === nameToSearch);
const merkleProof = merkleTree.getProof(nameIndex);

console.log(verifyProof(merkleProof, nameToSearch, treeRoot));
