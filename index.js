import {
  generateEntropy,
  getEntropyFromMnemonicPhrases,
  getMnemonicPhrasesFromEntropy,
  printHelp,
} from "./src/index.js";

const checksumLength = process.argv[2];
printHelp(checksumLength);

/**
 * Generating entropy and mnemonic phrases
 */
const entropy = generateEntropy(checksumLength);
const encodeResult = getMnemonicPhrasesFromEntropy(entropy);
console.log(encodeResult);

/**
 * Decoding mnemonic phrases into entropy
 */
const decodeResult = getEntropyFromMnemonicPhrases(
  encodeResult.mnemonicPhrases
);
console.log(decodeResult);
