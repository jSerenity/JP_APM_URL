const hexToRgb = input => {
    input = input + "";
    input = input.replace("#", "");
    let hexRegex = /[0-9A-Fa-f]/g;
    if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
      throw new Error("input is not a valid hex color.");
    }
    if (input.length === 3) {
      let first = input[0];
      let second = input[1];
      let last = input[2];
      input = first + first + second + second + last + last;
    }
    input = input.toUpperCase(input);
    let first = input[0] + input[1];
    let second = input[2] + input[3];
    let last = input[4] + input[5];
    return (
      parseInt(first, 16) +
      ", " +
      parseInt(second, 16) +
      ", " +
      parseInt(last, 16)
    );
  };

const successColor = ["#1C8464", "#1C8464", "#125A44", "#2DBF64"];
const primaryColor = ["#13599e", "#13599e", "#06294c", "#2CA2C5"];
const dangerColor = ["#EE3228", "#EE3228", "#B6241C", "#f55a4e"];
const infoColor = ["#13599e", "#205e9c", "#13599e", "#00d3ee"];
const blackColor = "#000";
const whiteColor = "#FFF";
const successBoxShadow = {
    boxShadow:
      "0 4px 20px 0 rgba(" +
      hexToRgb(blackColor) +
      ",.14), 0 7px 10px -5px rgba(" +
      hexToRgb(successColor[0]) +
      ",.4)"
  };
  const dangerBoxShadow = {
    boxShadow:
      "0 4px 20px 0 rgba(" +
      hexToRgb(blackColor) +
      ",.14), 0 7px 10px -5px rgba(" +
      hexToRgb(dangerColor[0]) +
      ",.4)"
  };
  const primaryBoxShadow = {
    boxShadow:
      "0 4px 20px 0 rgba(" +
      hexToRgb(blackColor) +
      ",.14), 0 7px 10px -5px rgba(" +
      hexToRgb(primaryColor[0]) +
      ",.4)"
  };

const successCardHeader = {
    background:
      "linear-gradient(60deg, " + successColor[1] + ", " + successColor[2] + ")",
    ...successBoxShadow
  };
  const dangerCardHeader = {
    background:
      "linear-gradient(60deg, " + dangerColor[1] + ", " + dangerColor[2] + ")",
    ...dangerBoxShadow
  };
  const primaryCardHeader = {
    background:
      "linear-gradient(60deg, " + primaryColor[1] + ", " + primaryColor[2] + ")",
    ...primaryBoxShadow
  };
 
  export {
    hexToRgb,
    successColor,
    primaryColor,
    dangerColor,
    infoColor,
    blackColor,
    whiteColor,
    successBoxShadow,
    successCardHeader,
    dangerCardHeader,
    primaryCardHeader,
    dangerBoxShadow,
    primaryBoxShadow,
  };