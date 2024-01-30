let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let Customer_Input = document.getElementById("qrText");

function generateQR() {
  if (Customer_Input.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      Customer_Input.value;
    imgBox.classList.add("show-img");
  }
  else{
    Customer_Input.classList.add("error")
    setTimeout(()=>{
      Customer_Input.classList.remove("error")
    },1000)
  }
}
