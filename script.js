function convert() {
    let red = parseInt(document.getElementById('red').value);
    let green = parseInt(document.getElementById('green').value);
    let blue = parseInt(document.getElementById('blue').value);
    let hexColor = rgbToHex(red, green, blue);
    
    document.getElementById('hexColor').textContent = hexColor;
  }
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    alert(componentToHex(c))
  }
