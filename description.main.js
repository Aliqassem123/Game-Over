 class Description extends Game{
    constructor(id){
        super()
       
        this.ui = new Ui();
       
 
       
        
        document.getElementById("btn").addEventListener("click", () => {
            document.querySelector("#games").classList.remove("d-none")
            document.querySelector(".description-gama").classList.add("d-none");
            document.querySelector(".navbar").classList.remove("d-none");
         })
         
         this.getApiId(id);
    }
          
 

    

  async getApiId(idGame){
  
  
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '85bf75fbdfmshb7eb74dc0604137p1cfdadjsncc04040fae99',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };


 let api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGame}`,options
    );
    if (api.ok) {
        var res = await api.json();
      
        this.displayDescription(res)
        console.log(res);
   loading.classList.add("d-none");
     
 }




}
} 


new Description();
