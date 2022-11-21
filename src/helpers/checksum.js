import sha256 from "sha256";

export const getChecksumFromEntropy = (entropy) => {
  const checksumLength = getChecksumLengthFromEntropy(entropy);

  /**
   * Checksum is the first N bits of SHA256(entropy)
   */
  const entropySHA256 = sha256(entropy);
  const checksum =
    parseInt(entropySHA256.substring(0, 2), 16) >> (8 - checksumLength);

  return { checksum, checksumLength };
};

export const getChecksumLengthFromEntropy = (entropy) => {
  if (entropy.length === 16 || entropy.length === 17) return 4;
  if (entropy.length === 20 || entropy.length === 21) return 5;
  if (entropy.length === 24 || entropy.length === 25) return 6;
  if (entropy.length === 28 || entropy.length === 29) return 7;
  if (entropy.length === 32 || entropy.length === 33) return 8;
};

export const getChecksumLengthFromMnemonic = (mnemonic) => {
  if (mnemonic.length === 12) return 4;
  if (mnemonic.length === 15) return 5;
  if (mnemonic.length === 18) return 6;
  if (mnemonic.length === 21) return 7;
  if (mnemonic.length === 24) return 8;
};
