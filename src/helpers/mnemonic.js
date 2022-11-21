import wordlist from "../wordlist.js";
import {
  dec2Bin,
  getChecksumFromEntropy,
  entropyBytes2Bin,
  entropyBin2Bytes,
  getChecksumLengthFromMnemonic,
} from "./index.js";

export const getMnemonicPhrasesFromEntropy = (entropy) => {
  /**
   * Get entropy checksum
   */
  const { checksum, checksumLength } = getChecksumFromEntropy(entropy);

  /**
   * Combine entropy with checksum
   */
  const entropyBinary = entropyBytes2Bin(entropy);
  const checksumBinary = dec2Bin(checksum, checksumLength);
  const entropyWithChecksumBinary = entropyBinary + checksumBinary;

  /**
   * Generate mnemonic from entropy and checksum combination
   */
  const mnemonicBytes = [];
  const entropyWithChecksumBinaryLength = entropyWithChecksumBinary.length;
  for (let i = 0; i < entropyWithChecksumBinaryLength; i += 11) {
    mnemonicBytes.push(
      parseInt(entropyWithChecksumBinary.substring(i, i + 11), 2)
    );
  }

  const mnemonicPhrases = mnemonicBytes.map((value) => wordlist[value]);

  return {
    entropy,
    entropyBinary,
    checksum,
    checksumBinary,
    checksumLength,
    entropyWithChecksumBinary,
    mnemonicBytes,
    mnemonicPhrases,
  };
};

export const getEntropyFromMnemonicPhrases = (mnemonicPhrases) => {
  const checksumLength = getChecksumLengthFromMnemonic(mnemonicPhrases);
  const mnemonicBytes = getMnemonicBytesfromPhrases(mnemonicPhrases);

  /**
   * Convert mnemonic to binary
   */
  const entropyWithChecksumBinary = mnemonicBytes2Binary(mnemonicBytes);

  /**
   * Get entropy from mnemonic
   */
  const entropyBinary = entropyWithChecksumBinary.substring(
    0,
    entropyWithChecksumBinary.length - checksumLength
  );
  const entropy = entropyBin2Bytes(entropyBinary);

  /**
   * Get checksum from mnemonic
   */
  const checksumBinary = entropyWithChecksumBinary.substring(
    entropyWithChecksumBinary.length - checksumLength,
    entropyWithChecksumBinary.length
  );
  const checksum = parseInt(checksumBinary, 2);

  return {
    entropy,
    entropyBinary,
    checksum,
    checksumBinary,
    checksumLength,
    entropyWithChecksumBinary,
    mnemonicBytes,
    mnemonicPhrases,
  };
};

export const getMnemonicBytesfromPhrases = (mnemonicPhrases) => {
  return mnemonicPhrases.map((phrase) => wordlist.indexOf(phrase));
};

export const mnemonicBytes2Binary = (mnemonicBytes) => {
  return mnemonicBytes.reduce(
    (binary, number) => `${binary}${dec2Bin(number, 11)}`,
    ""
  );
};
