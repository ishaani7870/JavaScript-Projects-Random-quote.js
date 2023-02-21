var quotes = [
	{
		"quote": "Be the change you wish to see.",
		"author": "Mahatma Gandhi",
		"link": "https://en.wikipedia.org/wiki/Mahatma_Gandhi"
	},
	{
		"quote": "Social progress can be measured by the social position of the female sex.",
		"author": "Karl Marx",
		"link": "https://en.wikipedia.org/wiki/Karl_Marx"
	},
	{
		"quote": "I like the religion that teaches liberty, equality and fraternity.",
		"author": "B. R. Ambedkar",
		"link": "https://en.wikipedia.org/wiki/B._R._Ambedkar"
	},
	{
		"quote": "If you tremble with indignation at every injustice then you are a comrade of mine.",
		"author": "Ernesto Che Guevara",
		"link": "https://en.wikipedia.org/wiki/Che_Guevara"
	},
	{
		"quote": "Teaching is a very noble profession that shapes the character, caliber, and future of an individual. If the people remember me as a good teacher, that will be the biggest honour for me.",
		"author": "Abdul Kalam",
		"link": "https://en.wikipedia.org/wiki/A._P._J._Abdul_Kalam"
	},
    {
        "quote": "A rolling stone gathers no moss.",
        "author": "Publilius Syrus",
        "link": "https://en.wikipedia.org/wiki"
      },
      {
        "quote": "Ideas are the beginning points of all fortunes.",
        "author": "Napoleon Hill",
        "link": "https://en.wikipedia.org/wiki"

      },
      {
        "quote": "Everything in life is luck.",
        "author": "Donald Trump",
        "link": "https://en.wikipedia.org/wiki"
      },
      {
        "quote": "Doing nothing is better than being busy doing nothing.",
        "author": "Lao Tzu",
        "link": "https://en.wikipedia.org/wiki"
      },
      {
        "quote": "Trust yourself. You know more than you think you do.",
        "author": "Benjamin Spock",
        "link": "https://en.wikipedia.org/wiki"
      },
      {
        "quote": "Study the past, if you would divine the future.",
        "author": "Confucius",
        "link": "https://en.wikipedia.org/wiki"
      },
      {
        "quote": "The day is already blessed, find peace within it.",
        "author": "amayda",
        "link": "https://en.wikipedia.org/wiki"
      },
      {
        "quote": "From error to error one discovers the entire truth.",
        "author": "Sigmund Freud",
        "link": "https://en.wikipedia.org/wiki"
      },
      
];

// var bgColors = ["red", "pink", "yellow", "green", "white", "darkcyan", "silver", "BlanchedAlmond", "chocolate", "darkorchid"];




var outputBox = document.getElementById("output");
var button = document.getElementById("nextBtn");
var kink = document.getElementById("alink")
var Ather=document.getElementById("authora")

function changeQuote(params){
    var abc = Math.floor(Math.random()*quotes.length);
    // outputBox=abc; quotes[abc].quotes= quote
    q=quotes[abc].quote
    a=quotes[abc].author
    l=quotes[abc].link

    document.getElementById("output").innerText=q
    document.getElementById("authora").innerText=a
    document.getElementById("alink").innerText=l
    
}   















