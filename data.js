

















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




//Extracts data from js object    
const movieTitle = `${Object.keys(movieData)[0]}`;  
const moviePlot = `${movieData["The Darjeeling Limited"].plot}`;
const movieCast = `${movieData["The Darjeeling Limited"].cast}`;                 
const movieRating = `${movieData["The Darjeeling Limited"].rating}`;
const movieYear = `${movieData["The Darjeeling Limited"].year}`;
const movieRuntime = `${movieData["The Darjeeling Limited"].runtime}`;


console.log(moviePlot);
console.log(movieCast);                  
console.log(movieRating);
console.log(movieYear);
console.log(movieRuntime);




//Defines movie in DOM
function moviePick(){
    let movie = [moviePlot, movieCast, movieRating, movieYear, movieRuntime]

    console.log(movie)
    document.getElementById("FILM-TITLE").innerText = movieTitle;
    document.getElementById("PLOT-DATA").innerText = moviePlot;
    document.getElementById("RATING-DATA").innerText = movieRating;
    document.getElementById("YEAR-DATA").innerText = movieYear;
    document.getElementById("CAST-DATA").innerText = movieCast;
    document.getElementById("RUNTIME-DATA").innerText = movieRuntime;
   }
   moviePick();




















