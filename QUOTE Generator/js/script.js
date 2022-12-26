//Object Array to hold quotes, sources, citaitons and years
var quotes = [
	{
	quote: "गते शोको न कर्तव्यो भविष्यं नैव चिन्तयेत् ।वर्तमानेन कालेन वर्तयन्ति विचक्षणाः ॥",
	Meaning: "We should not fret for what is past, nor should we be anxious about the future; men of discernment deal only with the present moment."
	},
	{
	quote: "क्षणशः कणशश्चैव विद्यामर्थं च साधयेत् । क्षणत्यागे कुतो विद्या कणत्यागे कुतो धनम्॥",
	Meaning: "Knowledge should be gained through minute by minute efforts. Money should be earned utilizing each and every resource. If you waste time, how can you get knowledge. If you waste resources, how can you accumulate the wealth."
	},
	{
	quote: "पदं हि सर्वत्र गुणैर्निधीयते का अर्थ||",
	Meaning: "Good qualities put their footprint everywhere."
	},
	{
	quote: "ॐ असतो मा सद्गमय ।तमसो मा ज्योतिर्गमय ।मृत्योर्मा अमृतं गमय ।ॐ शान्तिः शान्तिः शान्तिः ॥",
	Meaning: "Lead me from the unreal to the real, lead me from darkness to light, lead me from death to immortality."
	},
	{
	quote: "जातस्य हि ध्रुवो मृत्युर्ध्रुवं जन्म मृतस्य च।तस्मादपरिहार्येऽर्थे न त्वं शोचितुमर्हसि॥",
	Meaning: "Death is certain for the born, and re-birth is certain for the dead; therefore you should not feel grief for what is inevitable."
	},
	{
	quote: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥.",
	Meaning: "By being established in Yoga, O Dhananjaya, undertake actions, casting off attachmentand remaining equipoised in success and failure. Equanimity is called Yoga."
	},
	{
	quote: "इन्द्रियाणि पराण्याहुरिन्द्रियेभ्यः परं मनः।मनसस्तु परा बुद्धिर्यो बुद्धेः परतस्तु सः॥",
	Meaning: "The senses are superior to the gross body, and superior to the senses is the mind.Beyond the mind is the intellect, and even beyond the intellect is the soul."
	},
	{
	quote:  "मातृ देवो भव।पितृ देवो भव।आचार्य देवो भव।अतिथि देवो भव॥",
	Meaning: "Honour thy Mother as God.Honour thy Father as God.Honour thy Teacher as God.Honour thy Guest as God."
	},
	{
	quote: " विद्यां चाविद्यां च यस्तद्वेदोभ्य सह ।अविद्यया मृत्युं तीर्त्वाऽमृतमश्नुते ॥",
	Meaning: "One who knows both, the material science as well as the spiritual science, transgresses fear of death by the former, i.e. by proper bodily and mental efforts, and attains salvation by the latter, i.e. by the purity of mind and soul."
	},
	{
	quote: "क्षणशः कणशश्चैव विद्यामर्थं च साधयेत् ।क्षणे नष्टे कुतो विद्या कणे नष्टे कुतो धनम् ॥",
	Meaning: "One should take knowledge without losing a single moment and save every particle and collect money. The one who lost the moment does not get knowledge And those who consider particle as small do not get money."
	},
	{
	quote: "इन्द्रियाणि पराण्याहुरिन्द्रियेभ्यः परं मनः । मनसस्तु परा बुद्धिर्यो बुद्धेः परतस्तु सः ॥",
	Meaning: "Sense organs are superior to matter, mind is higher than matter Intelligence is higher than mind, the self is higher than intelligence.", 
	},
	{
	quote: "अजरामरवत् पाज्ञो विद्यामर्थं च साधयेत् । गृहीत इव केशेषु म्रुत्यना धर्ममाचरेत् ॥",
	Meaning: "The wise man acquires knowledge and wealth as if he is never going to die He practices religion as if he is held by his hairs by death.", 
	},
	{
	quote: "उद्धरेदात्मनात्मानं  नात्मानमवसाधयेत् । आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः ॥ ",
	Meaning: "Be the cause of your own upliftment, do not cause your own degradation You are your best friend and you are your worst enemy.",
	},
	{
	quote: "अरौ अपि उचितं कार्यमातिथ्यं गृहमागते । छेत्तुः पार्श्वमागतां छायां न उपसंहरते  द्रुमः ॥",
	Meaning: "Treat even the enemy who has come to you as a guest. A tree does not deny its shadow even to the person who has come to cut it."
	},
	{
	quote: "अपराध सहस्राणि क्रियन्तेऽहर्निशं मया । दासोऽयं इति मां मत्वा क्षमस्व परमेश्वरी ॥",
	Meaning: "A thousand mistakes are made by me day and night. Please realise that I am your slave and forgive me, O Goddess!"
	},
	{
	quote: "यथा चित्तं तथा वाचो यथा वाचस्तथा क्रियाः । चित्ते वाचि क्रियायांच साधुनामेक्रूपता ॥ ",
	Meaning: "As in the mind so in speech, as in speech so in action. Mind, speech and action are of the same value among saintly persons."
	},
	{
	quote: "स्वभावो नोपदेशेन शक्यते कर्तुमन्यथा । सुतप्तमपि पानीयं पुनर्गच्छति शीतताम् ॥ ",
	Meaning: "The nature of a person cannot be changed by advice to act differently. Just as water that is heated reverts to its cold state."
	},
	{
	quote: "कलहान्तानि हर्म्याणि कुवाक्यान्तं च सौहृदम् । कुराजान्तानि राष्ट्राणि कुकर्मान्तं यशो नृणाम् ॥",
	Meaning: "Even a small help to others is helpful if done in time A big favour done when the time has passed will be in vain"
	},
	{
	quote: "गुणैः सर्वज्ञतुल्योऽपि सीदत्येको निराशयाः । अनर्घ्यमपि माणिक्यं हेमाश्रयमपेक्षते ॥ ",
	Meaning: "Even with qualities equivalent to the all-knowing, people lamguish without patronage.Even a precious gem needs to be studded in gold to shine."
	},
	{
	quote: "विद्या विवादाय धनं मदाय शक्तिः परेषां परिपीडनाय । खलस्य साधोर्विपरीतमेतत् ज्ञानाय दानाय च रक्षणाय ॥",
	Meaning: "For the wicked, knowledge is for argument, money for arrogance, strength For harassing others. For the saintly, knowledge is for wisdom, money for charity and strength to protect the weak."
	},
	{

	quote: "नाम्भोधिरर्थितामेति सदाम्भोभिश्च पूर्यते | आत्मा तु पात्रतां नेय: पात्रमायान्ति संपद: ||",
	Meaning: "An ocean never begs for water, yet it is always full of water. If one makes one-self worthy, riches come to that worthy person by themselves without asking."
	},
	{
	quote: "मातृवत् परदारेषु परद्रव्येषु लोष्टवत् । आत्मवत् सर्वभूतेषु यः पश्यति सः पण्डितः ॥",
	Meaning: "One who sees others’ wives as mother, others’ money as clay, Sees all creatures as his equal, such a person is a scholar."
	},
	{
	quote: "उपाध्यायाद दशाचार्य आचार्यणाम शतं पिता । शस्त्रन्तु पतृण माता गौरवेंणातिरिच्यते ।।",
	Meaning: "A professor is ten times superior to teacher A father is like a hundred professors,and one’s mother is thousand times superior to Father"
	},
	
];

//Function to randomly select a quote value and return a random quote object from the quotes array
function getRandomQuote () {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	var randomQuote = quotes[randomNumber];
	return randomQuote;
}	

//Function to select random rgb color value
function getRandomColor () {
	var red = Math.floor(Math.random() * 256 );
	var green = Math.floor(Math.random() * 256 );
	var blue = Math.floor(Math.random() * 256 );
	 var randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}

//Function to call the getRandomQuote function and stores the returned quote object in a variable
//Constructs a string containing the different properties of the quote object 
function printQuote () {
		var quotes = getRandomQuote ();
		var quoteContainer = document.getElementById("quote-box");
		var quoteString = `<p class="quote">${quotes.quote}</p><p class="source">${quotes.source}`;
				if (quotes.citation) {quoteString += `<span class="citation">${quotes.citation}</span>`}
				if (quotes.year) {quoteString += `<span class="year">${quotes.year}</span></p>`}
				else {quoteString += '</p>'};
					quoteContainer.innerHTML = quoteString;

					//assigns random color value to document background color 
					document.body.style.backgroundColor = getRandomColor ();
}

//Quote automatically refreshes every 15 seconds
window.setInterval(function(){
printQuote ();
}, 15000);

//Event listener on LoadQuote button to generate new quote		
document.getElementById("loadQuote").addEventListener("click", printQuote, false);




