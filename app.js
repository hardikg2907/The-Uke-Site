const newArrItems = [
    {
      id: 1,
      title: "Romero Creations Cedar Rosewood Tenor",
      price: '$1,119.00',
      img: "pics\\uke-1.jpg",
    },
    {
      id: 2,
      title: "Rebel Spruce Top Mahogany Satin Tenor Cutaway",
      price: '$899.00',
      img: "pics\\uke-2.jpg",
    },
    {
      id: 3,
      title: "Romero Creations Mahogany ST Concert",
      price: '$679.00',
      img: "pics\\uke-3.jpg",
    },
];

const vids=[
  {
    id: 1,
    title: "What uke size is right for you?",
    embedLink: "https://www.youtube.com/embed/hmW2ccWJOk4", 
  },
  {
    id: 2,
    title: "How to change strings?",
    embedLink: "https://www.youtube.com/embed/FmrISmF6O3I"
  },
  {
    id: 3,
    title: "Ukulele lesson 1- How to start(For Beginners)",
    embedLink: "https://www.youtube.com/embed/5bTE5fbxDsc", 
  },

];


const newArrContainer = document.querySelector('.new-arr-items-container');

const iframeWrap = document.querySelector('.iframe-wrap');
const btns = document.querySelectorAll('.btn');
const navbar = document.getElementById("nav");
const navHeight = navbar.getBoundingClientRect().height;

//do when page is loaded
window.addEventListener('DOMContentLoaded',function(){
  displayNewArrItems(newArrItems);
});

// display new arrival items 
function displayNewArrItems(newArrItems){
  let displayNewArr = newArrItems.map(function(item){
    return `<div class="new-arrival-item">
          <img src="${item.img}" class ="photo" alt="${item.title}"/>
          <div class="item-info">
          <p>${item.title}</p>
          <span class="price">${item.price}</span>
      </div>
      </div>`;
  });
  displayNewArr = displayNewArr.join(" ");
  newArrContainer.innerHTML = displayNewArr;
}

// changing videos 
btns.forEach(function(btn){
  btn.addEventListener('click',function(e){
    const vidBtn = e.currentTarget.dataset.id;
    const vidDisplay = vids.filter(function(vid){
      // console.log(vid.id);
      if(vid.id == vidBtn){
        return vid.embedLink;
      }
    });
    console.log(`"${vidDisplay[0].embedLink}"`);
    iframeWrap.innerHTML = `<iframe width="640" height="360" src="${vidDisplay[0].embedLink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;
  })
})

// *****smooth scroll*****
// select links

const scrollLinks = document.querySelectorAll('.link');
scrollLinks.forEach(function(link){
  link.addEventListener("click",function(e){
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    
    let position = element.offsetTop-navHeight;
    window.scrollTo({
      left:0,top:position,
    })
  })
})