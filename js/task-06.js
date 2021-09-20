const inputEl = document.getElementById('validation-input');

const inputLength = inputEl.getAttribute("data-length");

inputEl.addEventListener('change', e => {
  const text = e.target.value;

  if (text.length === +inputLength) {
    inputEl.className = "valid";
  } else {
    inputEl.className = "invalid";
  }
});
