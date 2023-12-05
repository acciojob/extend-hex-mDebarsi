const extendHex = (shortHex) => {
  // write your code here
	// Remove the '#' symbol if present
  const hexWithoutHash = shortHex.replace(/^#/, '');

  // Check if the input is a valid short hex code
  const isValidShortHex = /^[0-9a-fA-F]{3}$/.test(hexWithoutHash);

  if (isValidShortHex) {
    // Convert short hex to full hex
    const fullHex = hexWithoutHash
      .split('')
      .map((char) => char.repeat(2))
      .join('');

    // Add '#' and return the full hex code
    return `#${fullHex.toUpperCase()}`;
  } else {
    console.error('Invalid short hex code.');
    return null;
  }
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
