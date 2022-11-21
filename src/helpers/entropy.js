import random from "random";
import { dec2Bin } from "./index.js";

export const generateEntropy = (checksumLength = 4) => {
  const entropyLengthInBytes = (checksumLength * 32) / 8;
  const entropy = Array(entropyLengthInBytes)
    .fill(0)
    .map(() => random.uniformInt(0, Math.pow(2, 8))());

  return entropy;
};

export const entropyBytes2Bin = (entropy) => {
  return entropy.reduce(
    (binary, currentByte) => `${binary}${dec2Bin(currentByte, 8)}`,
    ""
  );
};

export const entropyBin2Bytes = (entropyBinary) => {
  const entropy = [];
  for (let i = 0; i < entropyBinary.length; i += 8) {
    entropy.push(parseInt(entropyBinary.substring(i, i + 8), 2));
  }
  return entropy;
};
