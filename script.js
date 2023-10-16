const  virender = document.getElementById('VS')
const sachin = document.getElementById('ST')
const gautam = document.getElementById('GG')
const virat = document.getElementById('VK')
const ms = document.getElementById('MS')
const yuvraj = document.getElementById('YS')
const suresh = document.getElementById('SR')
const harbhajan = document.getElementById('HS')
const zaheer = document.getElementById('ZR')
const munaf = document.getElementById('MP')
const sreesanth = document.getElementById('SSR')

const infoDiv = document.getElementById('info')

const table = document.getElementById('tableon')

const players = ['https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sehwag.png',
                'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sachin.png',
                'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-gambhir.png',
                'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-virat-kohli.png',
                'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-dhoni.png',
                'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-yuvraj.png',
                'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-suresh-raina.jpg',
                'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-harbhajan.jpg',
                'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-zaheer-khan.jpg',
                'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-munaf-patel.jpg',
                'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sreeshanth.jpg']

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      onEscapeKeyPressed();
    }
  });

infoDiv.style.display = 'none'


function pointMe(index){
    console.log(index)
    infoDiv.style.display = ''
    infoDiv.style.backgroundImage = `url('${players[index]}')`;
    table.style.filter = "blur(1px)"
}

function onEscapeKeyPressed(){
    infoDiv.style.display = 'none'
    table.style.filter = ""
}

const cover = document.getElementById('cover')

cover.onclick = () =>{
    infoDiv.style.display = 'none'
    table.style.filter = ""
}


