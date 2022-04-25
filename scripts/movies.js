// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let id;

function debounce(){
    clearInterval(id);
    id = setTimeout(function(){
        myfunc()
    },1000)
}

function myfunc(){
    let movie = document.getElementById("search").value;
    const key = "659f9daf";
    const url = `https://www.omdbapi.com/?apikey=d806bd70&s=${movie}`;

    fetch(url)
        .then(function(res){
            return res.json();
        }).then(function(res){
            // console.log(res.Search);
            mySearch(res.Search)
        });
}

let mainDiv = document.getElementById("movies");

function mySearch(data){
    mainDiv.innerHTML="";    
    
    data.map(function(e,i){

        let cont = document.createElement("div");
        let image = document.createElement("img");
        image.src=e.Poster;

        let title = document.createElement("h3");
        title.innerText=e.Title;

        let butt = document.createElement("button");
        butt.innerText="Book now";
        butt.addEventListener("click",function(){
            book(e,i);
        })

        cont.append(image,title,butt);
        mainDiv.append(cont);
    });
}

let dataArr = JSON.parse(localStorage.getItem("movie"))||[];


function book(e,i){
    dataArr.push(e);
    localStorage.setItem("movie",JSON.stringify(dataArr));
    

}
