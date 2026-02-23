const weight = (value, unit) => {
  switch (unit) {
    case "kg_to_pounds": return (value * 2.20462).toFixed(2);
    case "pounds_to_kg": return (value * 0.453592).toFixed(2);
    case "grams_to_ounces": return (value * 0.035274).toFixed(2);
    case "ounces_to_grams": return (value * 28.3495).toFixed(2);
    default: return null;
  }
};

module.exports = weight;