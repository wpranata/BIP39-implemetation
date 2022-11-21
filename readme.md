Based on [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki)

Usage
=====

```
node bip39.js <checksum_length>
  
<checksum_length> must be between 4 and 8
  
<checksum_length> of 4 will produce 12 phrases
<checksum_length> of 5 will produce 15 phrases
<checksum_length> of 6 will produce 18 phrases
<checksum_length> of 7 will produce 21 phrases
<checksum_length> of 8 will produce 24 phrases

```