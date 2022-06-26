const main = async () => {
  const PaymentSplitter = await ethers.getContractFactory("PaymentSplitter");
  const contract = await PaymentSplitter.deploy(["0xc0ffee254729296a45a3885639AC7E10F9d54979","0x999999cf1046e68e36E1aA2E0E07105eDDD1f08E"]); //example addresses
  await contract.deployed();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
