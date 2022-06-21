"use strict";

class RangeValidator {
  constructor(min, max) {
    if (min < max) {
      this.min = min;
      this.max = max;
      console.log("success");
    } else {
      this.min = 5;
      this.max = 200;
      console.log(
        "Min/max is invalid, set defaults value"
      );
    }
  }
  getMin() {
    return min;
  }

  getMax() {
    return max;
  }

  setMin(value) {
    if (value < max) {
      this.min = min;
      console.log("success");
    } else {
      console.log("Error: val > max");
    }
  }

  setMax(value) {
    if (value > min) {
      this.max = min;
      console.log("success");
    } else {
      console.log("Error: val < min");
    }
    validate(value);
    {
      return min < value && value < max;
    }
  }
}
const range1 = new RangeValidator(
  1,
  5.5
);
const range2 = new RangeValidator(
  10,
  5.5
);
