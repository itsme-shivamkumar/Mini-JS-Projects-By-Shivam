const cInput=document.getElementById("ci");
const fInput=document.getElementById("fi");
const kInput=document.getElementById("ki");

const inputs=document.getElementsByClassName("input");
for(let i=0;i<inputs.length;i++){
  let input=inputs[i];
  input.addEventListener("input",function(e){
    let value=parseFloat(e.target.value);

    switch (e.target.name) {
      case "celcius":
          fInput.value=(value*1.8)+32;
          kInput.value=value+273.15;
        break;
      case "fahrenheit":
            cInput.value=(value-32)/1.8;
            kInput.value=(value-32)/1.8 + 273.15;
          break;
      case "kelvin":
              fInput.value=((value-273.15)*1.8)+32;
              cInput.value=value-273.15;
            break;
    }
  });
}
