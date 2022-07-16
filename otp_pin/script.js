const inputs = document.querySelectorAll(".otp-feild input");

inputs.forEach((input, index) => {
  input.dataset.index = index;
  input.addEventListener("paste", handleOnPasteOtp);
  input.addEventListener("keyup", handleOtp);
});

function handleOnPasteOtp(e) {
  const data = e.clipboardData.getData("text");
  const value = data.split("");
  if ((value, length === inputs.length)) {
    inputs.forEach((input, index) => (input.value = value[index]));
    submit();
  }
}

function submit() {
  console.log("Submitting...");
  let otp = "";
  inputs.forEach((input) => {
    otp += input.value;
    input.disabled = true;
    input.classList.add("disabled");
  });
  console.log(otp);
}

function handleOtp(e) {
  const input = e.target;
  let value = input.value;
  input.value = "";
  input.value = value ? value[0] : "";

  let feildIndex = input.dataset.index;
  if (value.length > 0 && feildIndex < inputs.length - 1) {
    input.nextElementSibling.focus();
  }

  if (e.key === "backspace" && feildIndex > 0) {
    input.previousElementSibling.focus();
  }
  if (feildIndex === input.length - 1) {
    submit();
  }
}
