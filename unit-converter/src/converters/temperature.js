const temperature = (value, unit) => {
  switch (unit) {
    case "c_to_f": return ((value * 9/5) + 32).toFixed(2);
    case "f_to_c": return (((value - 32) * 5/9)).toFixed(2);
    case "c_to_k": return (parseFloat(value) + 273.15).toFixed(2);
    case "k_to_c": return (value - 273.15).toFixed(2);
    default: return null;
  }
};

module.exports = temperature;