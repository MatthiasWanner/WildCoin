/* eslint-disable no-alert */
/* eslint-disable quotes */
/* eslint-disable no-useless-escape */
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('mail');
const messageInput = document.getElementById('msg');

// mail regex in format xxx@yyy.zzz
const mailRegex = /.+@.+\..+/;

const entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;',
};

function escapeHtml(string) {
  return String(string).replace(/[&<>"'`=\/]/g, (s) => entityMap[s]);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = escapeHtml(form.elements.name.value);
  let nameCheck;
  const email = escapeHtml(form.elements.mail.value);
  let mailCheck;
  const message = escapeHtml(form.elements.msg.value);
  let messageCheck;

  // check if name input is empty:
  if (name.length === 0) {
    nameCheck = false;
    nameInput.style = 'border: 2px solid red;';
    const nameLabel = document.getElementById('name-cont').querySelector('label');
    const nameWarningBox = document.createElement('span');
    nameWarningBox.setAttribute('class', 'warning');
    nameWarningBox.textContent = `Veuillez saisir un nom s'il vous plaît :)`;
    nameLabel.appendChild(nameWarningBox);
    setTimeout(() => {
      nameLabel.removeChild(nameWarningBox);
    }, 5000);
  } else {
    nameCheck = true;
    nameInput.style = 'border: 2px solid green';
  }

  // Check if email entered
  if (!mailRegex.test(email)) {
    mailCheck = false;
    emailInput.style = 'border: 2px solid red;';
    const mailLabel = document.getElementById('mail-cont').querySelector('label');
    const emailWarningBox = document.createElement('span');
    emailWarningBox.setAttribute('class', 'warning');
    emailWarningBox.textContent = 'Adresse mail invalide :(';
    mailLabel.appendChild(emailWarningBox);
    setTimeout(() => {
      mailLabel.removeChild(emailWarningBox);
    }, 5000);
  } else {
    mailCheck = true;
    emailInput.style = 'border: 2px solid green';
  }

  // Check if message countains anything
  if (message.length === 0) {
    messageCheck = false;
    messageInput.style = 'border: 2px solid red;';
    const msgLabel = document.getElementById('msg-cont').querySelector('label');
    const messageWarningBox = document.createElement('span');
    messageWarningBox.setAttribute('class', 'warning');
    messageWarningBox.textContent = `Laissez-nous un p'tit mot...`;
    msgLabel.appendChild(messageWarningBox);
    setTimeout(() => {
      msgLabel.removeChild(messageWarningBox);
    }, 5000);
  } else {
    messageCheck = true;
    messageInput.style = 'border: 2px solid green';
  }

  setTimeout(() => {
    if ((nameCheck === true) && (mailCheck === true) && (messageCheck === true)) {
      window.alert(`Merci ${name}! Votre message est envoyé :)`);
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
      window.location.reload();
    }
  }, 50);
});
