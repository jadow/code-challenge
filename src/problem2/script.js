function check() {
  var address = document.getElementById("input-address"),
  amount = document.getElementById("input-amount"),
  otp = document.getElementById("input-otp");

  //check if ETH address is value
  const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
  //var resultAddress = web3.utils.isAddress(address.value);
  var resultAddress = true

  //check if amount to send is valid
  //One ether = 1,000,000,000,000,000,000 wei (1018).
  //as long as not negative value, its possible to send.
  var resultAmount = amount.value.length >= 1

  //otp check length
  //just assume length 6
  var resultOtp = otp.value.length == 6

  if(resultAddress && resultAmount && resultOtp) {
    addRow(address.value, amount.value);
    //clear content of input
    address.value = ""
    amount.value = ""
    otp.value = ""

  } else {
    alertMessage = ""
    if(!resultAddress) {
      alertMessage += "Please provide an valid address\n"
    }
    if(!resultAmount) {
      alertMessage += "Please enter an amount\n"
    }
    if(!resultOtp) {
      alertMessage += "Please provide an otp\n"
    }

    alert(alertMessage);
  }
}

function addRow(address, amount) {
  var table = document.getElementById("history"),
      row = table.insertRow(table.rows.length);
    createCell(row.insertCell(0), address, 'row');
    createCell(row.insertCell(1), amount, 'row');
}

function createCell(cell, text, style) {
  var div = document.createElement('div'),
  txt = document.createTextNode(text);
  div.appendChild(txt);
  div.setAttribute('class', style);
  div.setAttribute('className', style);
  cell.appendChild(div);
}

document.getElementById("onsubmit").addEventListener("click", check, false);
