
function sleep(ms) {
    
   return new Promise((resolve) => setTimeout(resolve,ms));	
}

const phrases = ['code', 'play games' , 'watch movies'];

const el = document.getElementById("typewriter");

let sleepTime = 100;

let curPhraseIndex = 0;

const writeLoop = async () => {
	
	while(true) {
		let curWord = phrases(curPhraseIndex);
		console.log(curWord);
		sleep(1000);	}
}

writeLoop();