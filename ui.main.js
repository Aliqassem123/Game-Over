 
 class Ui {
  
     displayGames(gamesData) {
      let box = '';
        for (var i = 0; i < gamesData.length; i++) {
    
           box += ` <div class=" games-item col-xl-3  col-lg-4 col-md-6 col-sm-12   " id="${gamesData[i].id}" >
                     
      
                <div class="card h-100  text-light ">
                  <img src="${gamesData[i].thumbnail}" class="card-img-top " alt="...">
                    
                  <div class="card-body" >
                   <div class=" d-flex justify-content-between align-items-center">
                    <h5 class="card-title">${gamesData[i].title}</h5>
                    <button type="button" class="btn btn-primary  py-1">Free</button>
                   </div>
                  <div class=" d-flex justify-content-center align-items-center text-center">
                    <p class="card-text px-2 text-wrap text-break">${gamesData[i].short_description.split(" ",8)}</p>
                  </div>
                  </div>
                  <div class="card-footer d-flex justify-content-between align-items-center ">
                    <small class="text-light px-2 ">${gamesData[i].genre}</small>
                    <small class="text-light px-2">${gamesData[i].platform}</small>
                  </div>
                </div>
               
    
              </div>`;
         
          document.getElementById('row').innerHTML = box;
          
        
        }
      
      
      
      }
//===============================================================



    //   ===================================================

     displayDescription(gamesDataBYId) {
    
        var box =''
             box += ` 
             
          
              
                   
                   <div class="row g-3">
                    <div class=" col-lg-4 col-md-12 ">
                        <img src="${gamesDataBYId.thumbnail}"  alt="">
                     </div>
            
            
            
                     <div class=" col-lg-8  col-md-12">
                        <h3>Title: ${gamesDataBYId.title} </h3>
                        <p>Category: <span class="bg-info text-black rounded-2 px-1">${gamesDataBYId.genre}</span></p>
                        <p>Platform: <span class="bg-info text-black rounded-2 px-1">${gamesDataBYId.platform}</span></p>
                        <p>Status: <span class="bg-info text-black rounded-2 px-1">${gamesDataBYId.status}</span></p>
                        <p>${gamesDataBYId.description}</p>
                       
                        <a class="btn btn-outline-warning" href="${gamesDataBYId.game_url}">  Show Game</a>
                  
                   
                   </div> 
                </div>
              </div>
         
            </div>`;
           
            document.getElementById(`description`).innerHTML = box;
            
          
          }


}



// const nav = document.querySelector('.navbar')
// const games = document.querySelector('#games')
// const container  = document.querySelector('.container-nav ')
// window.addEventListener('scroll',()=>{
//   if(window.scrollY > games.offsetTop){
//   nav.classList.add('fixed-top')
//   container.classList.add('top-0')
//   container.classList.remove('flex-wrap')
//   container.classList.remove('bottom-0')

//   }else if(window.scrollY > nav.offsetTop){
//     nav.classList.remove('fixed-top')
//     container.classList.remove('top-0')
//     container.classList.add('flex-wrap')
//     container.classList.add('bottom-0')
//     container.classList.add('position-relative')


//   }
  

  

 
// })
