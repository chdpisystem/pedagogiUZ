const menu = [
  { 
    id: 1,
    title: "Айдаров, Еркин Бакитович",
    category: "math",
    price: "33года",
    img: "https://ltdfoto.ru/images/2022/03/29/pedagog18c8328a468bd6878.jpg",
    desc: `В 2011 году окончил Ташкентский институт ирригации и мелиорации , а в 1913 году окончил Поволжский...`,
    more:`https://chdpisystem.github.io/aidaroverkinRU/index.html`
  },
  {
    id: 3,
    title: "Зинаида Викторовна Османова",
    category: "math",
    price: "47 лет",
    img: "https://ltdfoto.ru/images/2022/03/30/zinaidaviktorovna.jpg",
    desc: `Зинаида Викторовна Османова — итальянский художник и учёный, изобретатель, писатель...`,
    more: `https://chdpisystem.github.io/zinaidaviktorovnaRU/index.html`
  },
  {
    id: 4,
    title: "Леонардо Да Винчи",
    category: "russ",
    price: "31 год",
    img: "https://ltdfoto.ru/images/2022/04/02/leo_optimized.jpg",
    desc: `Леона́рдо ди сер Пье́ро да Ви́нчи — итальянский художник и учёный, изобретатель и писатель, музыкант `,
    more:`https://chdpisystem.github.io/leonardodavinchiRU/index.html`
  },
  {
    id: 5,
    title: "Мирзиёев, Шавкат Миромонович",
    category: "russ",
    price: "45 лет",
    img: "https://ltdfoto.ru/images/2022/04/02/920__95_2734992474.jpg",
    desc: `Шавкат Миромонович Мирзиёев (узб. Shavkat Miromonovich Mirziyoyev; род. 24 июля 1957, `,
    more:`https://chdpisystem.github.io/shavkatmirziyoevRU/index.html`
  },
  {
    id: 6,
    title: "Эйнштейн, Альберт",
    category: "physics",
    price: "34",
    img: "https://ltdfoto.ru/images/2022/04/02/ale.jpg",
    desc: `Альбе́рт Эйнште́йн (нем. Albert Einstein, МФА )Родился 14 марта 1879, Ульм, Королевство Вюртемберг `,
    more:`https://chdpisystem.github.io/alberteinsteinRU/index.html`,
  },
  {
    id: 8,
    title: "Лариса Барисовна",
    category: "russ",
    price: "25лет",
    img: "https://sun9-39.userapi.com/impg/TCFiOLP-M5PEtHdhSK6JWB3hFIyK-Q2Fv6JVyQ/sUK2GKlF63Y.jpg?size=604x604&quality=96&sign=cb95b30bc2f512dce30d5f3149d2639a&type=album",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "Глара Анотаева",
    category: "physics",
    more: "https://add0n.com/flashplayer.html?version=0.2.3&p=0.2.2&type=update",
    price: "27лет",
    img: "http://sch216nsk.edu54.ru/uploads/teachers/logosh-darya-aleksandrovna.JPG",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  }, 
];

const List = document.querySelector('#menulist')

function displayElements(arr){
  let html =  ``

  arr.map( function(obj){
    html += `

    <div data-aos="zoom-in" class="main-block col-lg-4 col-md-6 col-sm-12  "> 
    <div class="card">
    <div class="card-header">
      <img src="${obj.img}" alt="rover" />
    </div>
    <div class="card-body">
      <span class="tag tag-teal">${obj.title}</span>
      <h4 class="h4-desc">
      ${obj.desc}
      </h4>
      <div class="block-btn">
      <a href="${obj.more}"> <button class="button-main-block">ПОДРОБНЕЕ</button> </a>
      </div>
      </div>
    </div>
    </div>
</div>



    `
    })
    List.innerHTML = html


}

let url = 'menu'


const lunch =  menu.filter(function(cat){
  return cat.category === "breakfast"
})

displayElements(menu)

function filterElements(category){
  const breakfast = menu.filter(function(cat){
    return cat.category === category
  })

  displayElements(breakfast)

}













// TIME
setInterval(function(){
  const now = new Date();
  const clock = document.getElementById("clock");
  clock.innerHTML = now.toLocaleTimeString();
},1000);

// WEEK
window.setInterval(function(){
  const days =['ВОСКРЕСЕНЬЕ',"ПОНЕДЕЛЬНИК", "ВТОРНИК", "СРЕДА", "ЧЕТВЕРГ", "ПЯТНИЦА", "СУББОТА"];
  const now = new Date();
  const week = document.getElementById("week");
  week.innerHTML = days[now.getDay()]
},1000);


// PRELOAD
document.body.onload = function(){
  setTimeout(function(){
      var preloader = document.getElementById('page-preloader')
      if(!preloader.classList.contains('done')){
          preloader.classList.add('done')
      }
  }, 1000);
}

  

