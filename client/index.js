const axios = require("axios");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");

const serverUrl = "http://localhost:1225";

async function main() {
  const merkleTree = new MerkleTree(niceList);

  const nameToSearch = "Heisenberg";
  const nameIndex = niceList.findIndex((name) => name === nameToSearch);
  const merkleProof = merkleTree.getProof(nameIndex);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name: nameToSearch,
    proof: merkleProof,
  });

  console.log({ gift });
}

main();
