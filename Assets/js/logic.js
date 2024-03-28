
const darkModeSwitch = document.querySelector('#darkModeSwitch')



darkModeSwitch.addEventListener('click', () => {
   const isDarkMode = document.body.classList.toggle('dark')
   localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled')

})

if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark');

}


 