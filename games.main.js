
 class Game extends Ui{ 
    
    constructor(){
        super()
     
        this.getGames("MMORPG");
   
      

document.querySelectorAll(".menu a").forEach((e) => {
    e.addEventListener("click", (e) => {
        document.querySelector(".active").classList.remove("active");
     e.target.classList.add("active");
        this.getGames(e.target.name);
   
 }); 
 });
 this.ui = new Ui();
 
    }

       
async  getGames(category){
   const loading = document.querySelector(".loading");
   loading.classList.remove("d-none");
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '85bf75fbdfmshb7eb74dc0604137p1cfdadjsncc04040fae99',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        } };
 let url = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options
    );
    if (url.ok) {
        const res = await url.json();
        this.displayGames(res)
    
         loading.classList.add("d-none"); 
      
        }
    
            this.getElement();
       
        


}

getElement() { 
     console.log("ali")
     document.querySelectorAll(".games-item").forEach((link) => {
       link.addEventListener("click", () => {
          const id = link.id;
          this.getDetails(id);
          console.log(link)
          
          
       });
    });
 }
 getDetails(idGame) {
    const details = new Description(idGame);
    document.querySelector("#games").classList.add("d-none");
    document.querySelector(".description-gama").classList.remove("d-none");
    
 }

};


       