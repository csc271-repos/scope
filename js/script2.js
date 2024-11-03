var signs = [
	"Sagittarius",
	"Scorpio",
	"Libra",
	"Virgo",
	"Leo",
	"Cancer",
	"Gemini",
	"Taurus",
	"Aries",
	"Pisces",
	"Aquarius",
	"Capricorn"
];

var dates = [
	"November 22 - December 21",
	"October 23 - November 21", 
	"September 23 - October 22", 
	"August 23 - September 22", 
	"July 23 - August 22", 
	"June 21 - July 22",
	"May 21 - June 20", 
	"April 20 - May 20", 
	"March 21 - April 19", 
	"February 19 - March 20",  
	"January 20 - February 18", 
	"December 22 - January 19" 
];

var horoscopes = [
	"Trust your emotions. They will guide you in making the right choices.",
	"Your unique perspective is an asset. Share your ideas with others.",
	"Hard work leads to success. Keep pushing toward your goals.",
	"Adventure awaits. Explore new horizons and expand your horizons.",
	"Embrace transformation. Let go of what no longer serves you.",
	"Balance is essential. Find harmony in all aspects of your life.",
	"Pay attention to the details. Your meticulous work will pay off.",
	"Your creativity shines today. Use it to inspire and lead others.",
	"Trust your intuition. It will guide you in making the right decisions.",
	"Communication is key today. Express yourself clearly and listen to others.",
	"Your determination will lead to success today. Stay focused on your goals.",
    "Today is a day for new beginnings. Embrace change and seize opportunities."
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

var sagittariusStars = getStars(3);
displayHoroscopeCard(0,'sagittarius.png',signs[0],dates[0],horoscopes[0],sagittariusStars);

var scorpioStars = getStars(5);
displayHoroscopeCard(1,'scorpio.png',signs[1],dates[1],horoscopes[1],scorpioStars);

var libraStars = getStars(2);
displayHoroscopeCard(2,'libra.png',signs[2],dates[2],horoscopes[2],libraStars);

var virgoStars = getStars(1);
displayHoroscopeCard(3,'virgo.png',signs[3],dates[3],horoscopes[3],virgoStars);


