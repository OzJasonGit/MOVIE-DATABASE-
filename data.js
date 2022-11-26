

















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
const moviePlot = `${Object.values(movieData)[0].plot}`;
const movieCast = `${Object.values(movieData)[0].cast}`;                 
const movieRating = `${Object.values(movieData)[0].rating}`;
const movieYear = `${Object.values(movieData)[0].year}`;
const movieRuntime = `${Object.values(movieData)[0].runtime}`;





console.log(Object.values(movieData))





//Defines movie in DOM
function moviePick(){

    document.getElementById("FILM-TITLE").innerText = movieTitle;
    document.getElementById("PLOT-DATA").innerText = moviePlot;
    document.getElementById("RATING-DATA").innerText = movieRating;
    document.getElementById("YEAR-DATA").innerText = movieYear;
    document.getElementById("CAST-DATA").innerText = movieCast;
    document.getElementById("RUNTIME-DATA").innerText = movieRuntime;
    
   }
   moviePick();




const tdlB = document.getElementById('TDL')
const trtB = document.getElementById('TRT')
const fmfB = document.getElementById('FMF')
const tgbhB = document.getElementById('TGBH')









tdlB === movieData[0]
trtB === movieData[1]
fmfB === movieData[2]
tgbhB === movieData[3]





0















