export const printHelp = (arg) => {
  const help = `
  usage:\tnode src/index.js <checksum_length>
  
  \t<checksum_length> must be between 4 and 8
  
  \t<checksum_length> of 4 will produce 12 phrases
  \t<checksum_length> of 5 will produce 15 phrases
  \t<checksum_length> of 6 will produce 18 phrases
  \t<checksum_length> of 7 will produce 21 phrases
  \t<checksum_length> of 8 will produce 24 phrases
  `;

  if (
    !arg ||
    !Number.isInteger(Number(arg)) ||
    arg < 4 ||
    arg > 8 ||
    arg.toUpperCase() === "HELP" ||
    arg.toUpperCase() === "-H" ||
    arg.toUpperCase() === "--HELP"
  ) {
    console.log(help);
    process.exit();
  }
};

export const dec2Bin = (dec, getNBits) => {
  return `${Array(getNBits).join("0")}${(dec >>> 0).toString(2)}`.substr(
    -getNBits
  );
};
