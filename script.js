function CalculateWater() {
  var weight = parseFloat(document.waterForm.weight.value);
  var activity = parseFloat(document.waterForm.activity.value);
  
  if (isNaN(weight)) {
    document.waterForm.result.value = "Please enter a valid weight";
    return;
  }
  
  var water = Math.round(weight * 35 * activity);
  document.waterForm.result.value = 
    "Recommended daily water:\n" + 
    water + " ml\n" +
    "≈ " + Math.round(water/1000) + " liters";
}