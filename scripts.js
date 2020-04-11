const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');

const nameH1 = document.getElementById('name');
const wppButton = document.getElementById('sendWhatsApp');

if (name) {
  nameH1.innerHTML = name;
}

function handleSend() {
  const name = document.getElementById('inputName').value;

  if (name && name.length > 0) {
    nameH1.innerHTML = name;

    const url = location.host + location.pathname + '?name=' + name;
    const wppLink = 'whatsapp://send?text=' + url;

    wppButton.href = wppLink;
    wppButton.classList.toggle('hide');

    document.querySelector('.input-group').classList.toggle('hide');
  }
}
