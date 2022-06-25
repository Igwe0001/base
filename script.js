const input = document.querySelector('input'); 
const button = document.querySelector('button');
const errorIcon = document.querySelector('.error');
const errorText = document.querySelector('.email-text')


input.addEventListener('focus', () => {
    errorIcon.classList.remove('view');
    errorText.classList.remove('view');
})

function checkEmail() {
  let filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!filter.test(input.value)) {
      errorIcon.classList.add('view')
      errorText.classList.add('view')

    input.focus;
    return false;
  }
}

button.addEventListener('click', (e) => {
    e.preventDefault
    checkEmail()
})