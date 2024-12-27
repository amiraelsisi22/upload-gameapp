// const details =  
 
 
 async function allGames (){
    const container =  document.getElementById('gameData');
    fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
        headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-key':'5d93512a34msh6cb532d0bbd3a08p10325ejsn0c9b70d35036'
        }
  })
  .then(response => response.json())
  .then(data => data.map((values) =>{
    container.innerHTML +=
            values.id+`<div class="col">
                <div data-id="${values.id}" class="card h-100 bg-transparent" role="button" onclick="displayid('${values.id}')">
                    <div class="card-body">
                        <figure class="position-relative">
                            <img class="card-img-top object-fit-cover h-100" src="${values.thumbnail}">
                        </figure>
                        <figcaption>
                            <div class="hstack justify-content-between">
                                <h3 class="h6 small">`+values.title+`</h3>
                                <span class="badge text-bg-primary p-2">Free</span>
                            </div>
                            <p class="card-text small text-center opacity-50">
                                A,cross-platform,MMORPG,developed,by,Level,Infinite,and
                            </p>
                        </figcaption>
                    </div>
                    <footer class="card-footer small hstack justify-content-between">
                        <span class="badge badge-color">MMORPG</span>
                        <span class="badge badge-color">PC (Windows)</span>
                    </footer>
                </div>
            </div>`
        ;

   }))





} 





let alllinks = document.querySelectorAll(" li a")
 for (let index = 0; index < alllinks.length; index++) {
     alllinks[index].addEventListener('click',function (e) {
        getGameByCat(e.target.innerHTML);
        
     });
    
 }



 function getGameByCat (cat){
    const container =  document.getElementById('gameData');
    container.innerHTML=" ";
fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?category="+cat, {
    headers: {
      'Content-Type': 'application/json',
      'x-rapidapi-key':'5d93512a34msh6cb532d0bbd3a08p10325ejsn0c9b70d35036'
    }
  })
  .then(response => response.json())
  .then(data => data.map((values) =>{

    container.innerHTML +=
            `<div class="col">
                <div data-id="582" class="card h-100 bg-transparent" role="button">
                    <div class="card-body">
                        <figure class="position-relative">
                            <img class="card-img-top object-fit-cover h-100" src="${values.thumbnail}">
                        </figure>
                        <figcaption>
                            <div class="hstack justify-content-between">
                                <h3 class="h6 small">`+values.title+`</h3>
                                <span class="badge text-bg-primary p-2">Free</span>
                            </div>
                            <p class="card-text small text-center opacity-50">
                                A,cross-platform,MMORPG,developed,by,Level,Infinite,and
                            </p>
                        </figcaption>
                    </div>
                    <footer class="card-footer small hstack justify-content-between">
                        <span class="badge badge-color">MMORPG</span>
                        <span class="badge badge-color">PC (Windows)</span>
                    </footer>
                </div>
            </div>`
        ;

   }))
//   .catch(error => console.error('Error:', error));




} 
allGames();

// function displayid(id){
//     fetch("https://free-to-play-games-database.p.rapidapi.com/api/game?id="+id, {
//         headers: {
//           'Content-Type': 'application/json',
//           'x-rapidapi-key':'5d93512a34msh6cb532d0bbd3a08p10325ejsn0c9b70d35036'
//         }
//       })
//       .then(response => response.json())
//       .then(data =>((data) =>{
//         console.log(data);
        
// console.log("hello");

//         document.getElementById("gameImage").setAttribute(`${data.thumbnail}`)
//         document.getElementById("genre")=innerHTML=data.genre
        
       


// `
// <div class="container">
//             <header class="hstack justify-content-between">
//                <h1 class="text-center h3 py-4">Details Game</h1>
//                <button class="btn-close btn-close-white" id="btnClose"></button>
//             </header>
//             <div class="row g-4" id="detailsContent">
//       <div class="col-md-4">
//       <img src="${data.thumbnail}" class="w-100" alt="image details">
//    </div>

//    <div class="col-md-8">
//       <h3 id="title">Call Of Duty: </h3>
//       <p>Category: <span id="genre" class="badge text-bg-info"> MMORPG</span> </p>
//       <p>Platform: <span id="platform" class="badge text-bg-info"> Windows</span> </p>
//       <p>Status: <span id="status" class="badge text-bg-info">  Live</span> </p>
//       <p id="description" class="small">Tarisland is a free-to-play cross-platform MMORPG developed by Level Infinite and Published by Tencent. 

// Available on PC and mobile devices, the game allows players to easily move between both, taking the game with them when they can’t be at their desk. The game is designed to appeal to players of MMOs like World of Warcraft, offering players nine playable classes and 18 specializations.

// Each class features an extensive talent tree system and can be customized. Players of existing MMOs will be familiar with the standard tank, DPS, and healer lineup, necessary for the game’s classic raid and dungeon system. Explore a vast game world and solve mysteries. Pick up various trades such as gathering, mining, and crafting, and sell your items on the auction house.</p>
//       <a id="freetogame_profile_url" class="btn btn-outline-warning" target="_blank" href="https://www.freetogame.com/open/tarisland">Show Game</a>
//    </div>
      
//       </div>
//          </div>
// `

//         // container.innerHTML +=
//         //         `<div class="col">
//         //             <div data-id="582" class="card h-100 bg-transparent" role="button">
//         //                 <div class="card-body">
//         //                     <figure class="position-relative">
//         //                         <img class="card-img-top object-fit-cover h-100" src="${values.thumbnail}">
//         //                     </figure>
//         //                     <figcaption>
//         //                         <div class="hstack justify-content-between">
//         //                             <h3 class="h6 small">`+values.title+`</h3>
//         //                             <span class="badge text-bg-primary p-2">Free</span>
//         //                         </div>
//         //                         <p class="card-text small text-center opacity-50">
//         //                             A,cross-platform,MMORPG,developed,by,Level,Infinite,and
//         //                         </p>
//         //                     </figcaption>
//         //                 </div>
//         //                 <footer class="card-footer small hstack justify-content-between">
//         //                     <span class="badge badge-color">MMORPG</span>
//         //                     <span class="badge badge-color">PC (Windows)</span>
//         //                 </footer>
//         //             </div>
//         //         </div>`
//         //     ;
    



//        }))
    


       

// }