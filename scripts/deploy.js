const main = async () => {
  const Greeter = await ethers.getContractFactory("Greeter");
  const contract = await Greeter.deploy();
  await contract.deployed();
  await sleep(10000);

  await hre.run("verify:verify", {
    address: contract.address,
    constructorArguments: [],
  });
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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
