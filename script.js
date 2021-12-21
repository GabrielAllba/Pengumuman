let container = document.getElementsByClassName('container')
let data = document.getElementsByClassName('data')
window.onclick = (event) => {
    for(let i = 0; i < container.length; i++){
        if(event.target == container[i]){
            container[i].style.opacity = ''
            container[i].style.zIndex = ''
            data[i].style.transform = 'scale(0,0)'
        }
    }
}
let sisteminformasi = document.getElementById('sistem-informasi')
let sicontainer = document.getElementById('si-container')

let sidata = document.getElementById('si-data')
let muldokdata = document.getElementById('muldok-data')
let sekredata = document.getElementById('sekre-data')
let padata = document.getElementById('pa-data')
sisteminformasi.addEventListener('click', () => {
    sicontainer.style.opacity = '100'
    sicontainer.style.zIndex = '100'
    sidata.style.transform = 'scale(1,1)'
})

let md = document.getElementById('muldok')
let multimedia = document.getElementById('multimedia-container')
md.addEventListener('click', () => {
    multimedia.style.opacity= '100'
    multimedia.style.zIndex= '100'
    muldokdata.style.transform = 'scale(1,1)'
})
let sk = document.getElementById('sekre')
let sekre = document.getElementById('sekretariat-container')
sk.addEventListener('click', () => {
    sekre.style.opacity = '100'
    sekre.style.zIndex = '100'
    sekredata.style.transform = 'scale(1,1)'
})

let pa = document.getElementById('public-affairs')
let publicaffairs = document.getElementById('publicaffairs-container')
pa.addEventListener('click', () => {
    publicaffairs.style.opacity = '100'
    publicaffairs.style.zIndex = '100'
    padata.style.transform = 'scale(1,1)'
})
