
let currentQuestion = 0;
let score = 0;

const questions = [
  {
    question : "Who directed The Sandlot?",
    option1 : "David Mickey Evans",
    option2 : "Hamilton Porter",
    option3 : "Bertram Grover Weeks",
    option4 : "Michael Palledorous",
    correct : "David Mickey Evans"
  },
  {
    question : "What is Benny 'The Jet' Rodriguez's middle name?",
    option1 : "Francisco",
    option2 : "Frederick",
    option3 : "Franklin",
    option4 : "Felix",
    correct : "Franklin"
  },
  {
    question : "On what day did the 'Night Game' happen?",
    option1 : "Labor Day",
    option2 : "President's Day",
    option3 : "First Day of Summer",
    option4 : "Fourth of July",
    correct : "Fourth of July"
  },
  {
    question : "What building set did the boys use to try to get the signed baseball back from The Beast?",
    option1 : "K'nex",
    option2 : "Erector",
    option3 : "Lego",
    option4 : "The Original TinkerToy",
    correct : "Erector"
  },
  {
    question : "Who was the lifeguard that banned the boys from the pool?",
    option1 : "Wendy Peffercorn",
    option2 : "Winnie Cooper",
    option3 : "Topanga Lawrence",
    option4 : "DJ Tanner",
    correct : "Wendy Peffercorn"
  },
  {
    question : "Who was the legendary baseball player that visited Benny in his dream?",
    option1 : "George Ruth",
    option2 : "Willie Mays",
    option3 : "Mickey Mantle",
    option4 : "Lou Gehrig",
    correct : "George Ruth"
  },
  {
    question : "Where was The Sandlot filmed?",
    option1 : "San Fernando, CA",
    option2 : "Flagstaff, AZ",
    option3 : "Salt Lake City, UT",
    option4 : "Houston, TX",
    correct : "Salt Lake City, UT"
  },
  {
    question : "What was the Beast's real name?",
    option1 : "Hades",
    option2 : "Zeus",
    option3 : "Ares",
    option4 : "Hercules",
    correct : "Hercules"
  },
  {
    question : "Who was the actor that played Mr. Mertle?",
    option1 : "James Earl Jones",
    option2 : "Art LaFleur",
    option3 : "Denis Leary",
    option4 : "Tom Guiry",
    correct : "James Earl Jones"
  },
  {
    question : "Which one of the guys made it to the Big Leagues?",
    option1 : "Scott Smalls",
    option2 : "Benny 'The Jet' Rodriguez",
    option3 : "Kenny DeNunez",
    option4 : "Allan 'Yeah-Yeah' McClennan",
    correct : "Benny 'The Jet' Rodriguez"
  },
  {
    question : "Who disappeared into the 60's?",
    option1 : "Timmy Timmons",
    option2 : "Tommy Timmons",
    option3 : "Hamilton Porter",
    option4 : "Bertram Grover Weeks",
    correct : "Bertram Grover Weeks"
  },
  {
    question : "Who married Wendy Peffercorn and had 9 kids?",
    option1 : "Squints",
    option2 : "Yeah-Yeah",
    option3 : "Kenny",
    option4 : "Repeat",
    correct : "Squints"
  },
  {
    question : "What were the magical shoes that guaranteed to make a kid run faster and jump higher",
    option1 : "Chuck Taylor All Stars",
    option2 : "PF Flyers",
    option3 : "Reebok Pumps",
    option4 : "Nike Alphafly NEXT%",
    correct : "PF Flyers"
  },
  {
    question : "What was the original title of The Sandlot",
    option1 : "The Boys of Summer",
    option2 : "Pickling the Beast",
    option3 : "Baseball is Life",
    option4 : "Remember the Tigers",
    correct : "The Boys of Summer"
  },
  {
    question : "Benny and Kenny also starred in 'D2: The Mighty Ducks,' but what other 90's sports movie did 2 other boys star in?",
    option1 : "Little Giants",
    option2 : "The Big Green",
    option3 : "Rookie of the Year",
    option4 : "LadyBugs",
    correct : "The Big Green"

  }
];