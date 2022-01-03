    let hamburger = document.querySelector('#hamburger')
    let navlinks = document.querySelector('#navlinks')

    let line = hamburger.querySelector('#line')
    let line2 = hamburger.querySelector('#line2')

    hamburger.addEventListener('click', function(){
        if(navlinks.classList.contains('hidden')){
            navlinks.classList.remove('hidden')
            line.classList.add('absolute', 'rotate-45')
            line2.classList.add('absolute', '-rotate-45')
            line2.classList.remove('mt-2')
        }else{
            navlinks.classList.add('hidden')
            line.classList.remove('absolute', 'rotate-45')
            line2.classList.remove('absolute', '-rotate-45')
            line2.classList.add('mt-2')
        }
    })