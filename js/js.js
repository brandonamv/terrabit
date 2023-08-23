const $navLink=document.querySelectorAll('#navLink')
const $imgNav=document.querySelector('#img-navbar')
const $nav=document.querySelector('#nav')

console.log($imgNav)



if(window.scrollY===0){
    $imgNav.src="/img/logo.png"
    $navLink.forEach(element => {
        console.log('ahora aqui esta 1')
        element.style.color='white'
    });}


document.addEventListener('scroll',()=>{
    if(window.scrollY===0){
        $imgNav.src="/img/logo.png"
        $imgNav.style.width='100%'
        $navLink.forEach(element => {
            console.log('ahora aqui esta 2')
            element.style.color='white'
            element.style.fontWeight='normal'
            element.style.opacity='1'
        });
        
    } else if(window.scrollY!==0){
        $navLink.forEach(element => {
            $imgNav.style.width='min-content'
            $imgNav.src="/img/Terrabbit-Logo-Horizontal 1.svg"
            console.log('ahora aqui esta 3')
            element.style.color='#141B4D'
            element.style.fontWeight='bold'
            element.style.opacity='0.5'
        });
    }
})

