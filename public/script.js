(function renderPage(){
  "use strict"
  const searchBtn = document.querySelectorAll(".searchjs");
  const searchBox = document.querySelector('.search-container');
  const nav = document.querySelector(".menu-containerjs");
  const cancelMBtn = document.querySelector(".cancel.nav");
  const cancelSBtn = document.querySelector(".cancel.search");
  const searchText = document.querySelector('.input');
  const hamburgerBtn = document.querySelectorAll(".menujs");
  const navList = document.querySelector('.sub-mainjs');
  const facebook = document.getElementById("fb-icon");
  const linkedIn = document.getElementById("linkedIn-icon");
  const twitter = document.getElementById("twitter-icon");



  searchBtn.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
      btn.style.display = "none"
      searchBox.style.display = "flex";
      searchBox.classList.add('open-search');
      searchText.focus();
      navList.style.visibility = "hidden"

    })
    cancelSBtn.addEventListener('click', ()=>{
      searchBox.style.display = "none";
    })

  
  });

  hamburgerBtn.forEach((menu)=>{
    menu.addEventListener('click', ()=>{
      nav.style.display = "flex";
      nav.classList.add('menu-open');
      
    })

    cancelMBtn.addEventListener('click', ()=>{
      nav.style.display = "none";
      
    })

  });


}());


