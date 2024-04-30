document.addEventListener('DOMContentLoaded', function() {
    const root = document.querySelector(':root');
    const pageBody = document.querySelector('body');

    const themeOptions = document.querySelectorAll('#theme-options input');

    themeOptions.forEach(themeOption => {
        themeOption.addEventListener('click', function(e) {
            switch (e.target.value) {
                case 'romance': {
                    removeBodyClasses();
                    pageBody.classList.add('theme-romance');
                    break;
                }
                case 'fantasy': {
                    removeBodyClasses();
                    pageBody.classList.add('theme-fantasy');
                    break;
                }
                    
                case 'mystery-crime': {
                    removeBodyClasses();
                    pageBody.classList.add('theme-mystery');
                    break;
                }
                default: {
                    removeBodyClasses();
                    pageBody.classList.add('theme-other');
                    break;
                }
            }
        })
    })

    function removeBodyClasses() {
        pageBody.classList.remove('theme-fantasy');
        pageBody.classList.remove('theme-romance');
        pageBody.classList.remove('theme-mystery');
        pageBody.classList.remove('theme-other');
    }
})