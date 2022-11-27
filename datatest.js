



















let movieData = {"The Darjeeling Limited": { plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
                                             cast: [" Jason Schwartzman ", " Owen Wilson ", " Adrien Brody "],
                                             runtime: 151,
                                             rating: 7.2,
                                             year: 2007,
                                           },



                   "The Royal Tenenbaums":  { plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
                                              rating: 7.6,
                                              year: 2001,
                                              cast: [" Gene Hackman ", " Gwnyeth Paltrow ", " Anjelica Huston "],
                                              runtime: 170,
                                           },



                      "Fantastic Mr. Fox": {  year: 2009,
                                              plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
                                              cast: [
                                                     " George Clooney ",
                                                     " Meryl Streep ",
                                                     " Bill Murray ",
                                                     " Jason Schwartzman ",
                                                    ],
                                              runtime: 147,
                                              rating: 7.9,
                                           },



               "The Grand Budapest Hotel": {  rating: 8.1,
                                              runtime: 159,
                                              year: 2014,
                                              plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
                                              cast: [" Ralph Fiennes ", " F. Murray Abraham ", " Mathieu Amalric "],
                                           },
                  };



let movieProps = Object.keys(movieData)
console.log(movieProps);




for (let i=0; i<movieProps.length; i+=1){
    console.log(movieProps[i])
        document.getElementById("BUTTON").onclick
    
    }


}



let movieTitle = `${Object.keys(movieProps)[i]}`;  
let moviePlot = `${Object.values(movieProps)[i].plot}`;
let movieCast = `${Object.values(movieProps)[i].cast}`;                 
let movieRating = `${Object.values(movieProps)[i].rating}`;
let movieYear = `${Object.values(movieProps)[i].year}`;
let movieRuntime = `${Object.values(movieProps)[i].runtime}`;






function moviePick(){

    document.getElementById("FILM-TITLE").innerText = movieTitle;
    document.getElementById("PLOT-DATA").innerText = moviePlot;
    document.getElementById("RATING-DATA").innerText = movieRating;
    document.getElementById("YEAR-DATA").innerText = movieYear;
    document.getElementById("CAST-DATA").innerText = movieCast;
    document.getElementById("RUNTIME-DATA").innerText = movieRuntime;
    
   }
   moviePick();



var click;
for (let t = 1; t < 8; t++){
    td = document.getElementById('td'+t);
    if (typeof window.addEventListener === 'function'){
        (function (_td) {
            td.addEventListener('click', function(){
                console.log(_td);
            });
        })(td);
    }
}