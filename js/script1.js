var signs = [
	"Capricorn",
	"Aquarius",
	"Pisces",
	"Aries",
	"Taurus",
	"Gemini",
	"Cancer",
	"Leo",
	"Virgo",
	"Libra",
	"Scorpio",
	"Sagittarius"
];

var dates = [
	"December 22 - January 19", 
	"January 20 - February 18", 
	"February 19 - March 20", 
	"March 21 - April 19", 
	"April 20 - May 20", 
	"May 21 - June 20", 
	"June 21 - July 22", 
	"July 23 - August 22", 
	"August 23 - September 22", 
	"September 23 - October 22", 
	"October 23 - November 21", 
	"November 22 - December 21"
];

var horoscopes = [
    "Today is a day for new beginnings. Embrace change and seize opportunities.",
    "Your determination will lead to success today. Stay focused on your goals.",
    "Communication is key today. Express yourself clearly and listen to others.",
    "Trust your intuition. It will guide you in making the right decisions.",
    "Your creativity shines today. Use it to inspire and lead others.",
    "Pay attention to the details. Your meticulous work will pay off.",
    "Balance is essential. Find harmony in all aspects of your life.",
    "Embrace transformation. Let go of what no longer serves you.",
    "Adventure awaits. Explore new horizons and expand your horizons.",
    "Hard work leads to success. Keep pushing toward your goals.",
    "Your unique perspective is an asset. Share your ideas with others.",
    "Trust your emotions. They will guide you in making the right choices."
];

function displayTitle() {
	var title = '<h1>Cosmic Horoscopes</h1>';
	var contentDiv = document.getElementById('title');
	contentDiv.innerHTML += title;
};


function displayHoroscopeCard(cardNum, img, sign, birthday, horoscope, stars) {
	var card = document.getElementsByClassName('card')[cardNum];
	card.innerHTML = '';
	
	card.innerHTML += '<img src="../infoFunction/images/' + img + '">';
	card.innerHTML += '<h3 class="sign">' + sign + '</h3>';
	card.innerHTML += '<p class="dates">' + birthday + '</p>';
	card.innerHTML += '<p class="horoscope">' + horoscope + '</p>';
	card.innerHTML += '<p><strong>Mood:</strong> ' + stars + '</p>';
};


function getStars(numStars) {
	var star = '<span style="color:#9445b6;">&#9733;</span>';
	var rating = star.repeat(numStars);
	return rating;
};



displayTitle();

var capricornStars = getStars(1);
displayHoroscopeCard(0,'capricorn.png',signs[0],dates[0],horoscopes[0],capricornStars);

var aquariusStars = getStars(2);
displayHoroscopeCard(1,'aquarius.png',signs[1],dates[1],horoscopes[1],aquariusStars);

var piscesStars = getStars(5);
displayHoroscopeCard(2,'pisces.png',signs[2],dates[2],horoscopes[2],piscesStars);

var ariesStars = getStars(3);
displayHoroscopeCard(3,'aries.png',signs[3],dates[3],horoscopes[3],ariesStars);
