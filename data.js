

















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







//Create array to store the movie objects. 
let moviesArr = [];

//push movieData objects into moviesArr.
moviesArr.push(movieData["The Darjeeling Limited"])
moviesArr.push(movieData["The Royal Tenenbaums"])
moviesArr.push(movieData["Fantastic Mr. Fox"])
moviesArr.push(movieData["The Grand Budapest Hotel"])


console.log(moviesArr) //Check to see if objects are pushed into moviesArr.


//Extract values from moviesArr 
let movieProps = Object.values(moviesArr)
console.log(movieProps); //Check if values were extracted. 


//loop through our array of objects. 
for (let i=0; i<movieProps.length; i+=1){
    console.log(movieProps[i])


    //Store the object information inside a parameter.
    let movieTitle = `${Object.keys(movieProps)[i]}`;  
    let moviePlot = `${Object.values(movieProps)[i].plot}`;
    let movieCast = `${Object.values(movieProps)[i].cast}`;                 
    let movieRating = `${Object.values(movieProps)[i].rating}`;
    let movieYear = `${Object.values(movieProps)[i].year}`;
    let movieRuntime = `${Object.values(movieProps)[i].runtime}`;

    //Add movie switch button. 
    let changeMovie = document.getElementById("BUTTON")

    //Create text elements rendered in the DOM
    document.getElementById("FILM-TITLE").innerText = movieTitle;
    document.getElementById("PLOT-DATA").innerText = moviePlot;
    document.getElementById("RATING-DATA").innerText = movieRating;
    document.getElementById("YEAR-DATA").innerText = movieYear;
    document.getElementById("CAST-DATA").innerText = movieCast;
    document.getElementById("RUNTIME-DATA").innerText = movieRuntime;
    
    //Create function for looping through data onclick 
    changeMovie.addEventListener('click', (e) => {
      let clickEvent = new MouseEvent ('click', 'loopData');
    }
)

}










































