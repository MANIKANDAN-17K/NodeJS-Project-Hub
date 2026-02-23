const length = (value, unit) => {
  switch (unit) {
    case "km_to_miles": return (value * 0.621371).toFixed(2);
    case "miles_to_km": return (value * 1.60934).toFixed(2);
    case "cm_to_inches": return (value * 0.393701).toFixed(2);
    case "inches_to_cm": return (value * 2.54).toFixed(2);
    default: return null;
  }
};

module.exports = length;