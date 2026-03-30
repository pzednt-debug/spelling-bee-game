const levelPools = {
  1: [
    {word:"apple", clue:"A fruit"},
    {word:"bridge", clue:"Crosses water"},
    {word:"garden", clue:"Flowers grow here"},
    {word:"planet", clue:"Orbits a star"},
    {word:"window", clue:"Lets you see outside"},
    {word:"camera", clue:"Used to take pictures"},
    {word:"music", clue:"Pleasant organized sound"},
    {word:"travel", clue:"To go from place to place"},
    {word:"forest", clue:"A place full of trees"},
    {word:"circle", clue:"A round shape"},
    {word:"silver", clue:"A shiny metal"},
    {word:"orange", clue:"A citrus fruit"},
    {word:"school", clue:"Place for learning"},
    {word:"family", clue:"People related"},
    {word:"energy", clue:"Power source"},
    {word:"flower", clue:"Colorful plant"},
    {word:"yellow", clue:"A bright color"},
    {word:"purple", clue:"Mix of red and blue"},
    {word:"market", clue:"Place to buy goods"},
    {word:"river", clue:"Flows through land"},
    {word:"island", clue:"Land in water"},
    {word:"engine", clue:"Powers machines"},
    {word:"pencil", clue:"Used for writing"},
    {word:"bottle", clue:"Holds liquid"},
    {word:"ticket", clue:"Entry pass"},
    {word:"pocket", clue:"Clothing storage"},
    {word:"butter", clue:"Spread on bread"},
    {word:"coffee", clue:"Morning drink"},
    {word:"doctor", clue:"Treats illness"},
    {word:"farmer", clue:"Works land"},
    {word:"ladder", clue:"Used to climb"},
    {word:"mirror", clue:"Shows reflection"},
    {word:"rocket", clue:"Goes to space"},
    {word:"thread", clue:"Used for sewing"},
    {word:"wallet", clue:"Holds money"},
    {word:"zebra", clue:"Striped animal"}
  ],
  2: [
    {word:"library", clue:"Place full of books"},
    {word:"computer", clue:"Electronic machine"},
    {word:"electric", clue:"Powered by energy"},
    {word:"mountain", clue:"Very tall hill"},
    {word:"language", clue:"Used to communicate"},
    {word:"building", clue:"Structure for people"},
    {word:"hospital", clue:"Place for medical care"},
    {word:"exercise", clue:"Physical activity"},
    {word:"notebook", clue:"Used for writing"},
    {word:"painting", clue:"Art on canvas"},
    {word:"training", clue:"Learning skills"},
    {word:"delivery", clue:"Bringing goods"},
    {word:"airplane", clue:"Flies in sky"},
    {word:"backpack", clue:"Carried on back"},
    {word:"software", clue:"Programs on computer"},
    {word:"hardware", clue:"Physical tech parts"},
    {word:"business", clue:"Making money activity"},
    {word:"vacation", clue:"Time off travel"},
    {word:"document", clue:"Written file"},
    {word:"security", clue:"Protection"}
  ],
  3: [
    {word:"knowledge", clue:"Information and understanding"},
    {word:"beautiful", clue:"Pleasing to look at"},
    {word:"important", clue:"Of great value"},
    {word:"different", clue:"Not the same"},
    {word:"challenge", clue:"Something difficult"},
    {word:"education", clue:"Process of learning"},
    {word:"technology", clue:"Advanced systems"},
    {word:"experience", clue:"Gained over time"},
    {word:"performance", clue:"How well something works"},
    {word:"environment", clue:"Surrounding conditions"}
  ]
};

let queues = {1: [], 2: [], 3: []};
let level = 1, score = 0, lives = 5, streak = 0, timeLeft = 90;
let timer = null, current = null, correctCount = 0, wrongCount = 0, bestStreak = 0;
let audioCtx = null;

function ensureAudio(){
  if (!audioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (AC) audioCtx = new AC();
  }
  if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
}

function tone(freq, duration, type="sine", gainValue=0.03){
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.value = gainValue;
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
  osc.stop(audioCtx.currentTime + duration);
}

function soundCorrect(){
  ensureAudio();
  tone(740, 0.10, "triangle", 0.04);
  setTimeout(() => tone(920, 0.12, "triangle", 0.03), 70);
}

function soundWrong(){
  ensureAudio();
  tone(220, 0.12, "sawtooth", 0.035);
  setTimeout(() => tone(170, 0.14, "sawtooth", 0.03), 90);
}

function soundLevelUp(){
  ensureAudio();
  [440, 660, 880].forEach((f, i) => setTimeout(() => tone(f, 0.12, "triangle", 0.035), i * 90));
}

function flash(mode){
  const card = document.getElementById("mainCard");
  card.classList.remove("success-flash", "error-flash");
  void card.offsetWidth;
  card.classList.add(mode === "success" ? "success-flash" : "error-flash");
  setTimeout(() => card.classList.remove("success-flash", "error-flash"), 320);
}

function shuffle(arr){ return [...arr].sort(() => Math.random() - 0.5); }
function refill(l){ queues[l] = shuffle(levelPools[l]); }
function getWord(l){ if(!queues[l].length) refill(l); return queues[l].pop(); }

function updateHud(){
  document.getElementById("levelDisplay").innerText = "Level: " + level;
  document.getElementById("scoreDisplay").innerText = "Score: " + score;
  document.getElementById("livesDisplay").innerText = "Lives: " + lives;
  document.getElementById("streakDisplay").innerText = "Streak: " + streak;
  document.getElementById("timeDisplay").innerText = "Time: " + timeLeft + "s";
  document.getElementById("levelBanner").innerText =
    "Level " + level + " - " + (level === 1 ? "Easy Words" : level === 2 ? "Medium Words" : "Hard Words");
}

function setFeedback(msg, mode){
  const box = document.getElementById("feedbackBox");
  box.innerText = msg;
  box.classList.remove("neutral", "success", "error");
  box.classList.add(mode);
}

function next(){
  current = getWord(level);
  document.getElementById("letterCount").innerText = current.word.length + " letters";
  document.getElementById("clue").innerText = current.clue;
  document.getElementById("answer").value = "";
}

function showLevelUpOverlay(){
  const overlay = document.getElementById("levelUpOverlay");
  document.getElementById("overlaySub").innerText = "Welcome to Level " + level;
  overlay.classList.remove("hidden");
  soundLevelUp();
  setTimeout(() => overlay.classList.add("hidden"), 1000);
}

function levelCheck(){
  if(correctCount >= 5 && level === 1){
    level = 2;
    setFeedback("Level 2 begins. Words are getting tougher.", "neutral");
    showLevelUpOverlay();
  }
  if(correctCount >= 10 && level === 2){
    level = 3;
    setFeedback("Level 3 begins. Hard round unlocked.", "neutral");
    showLevelUpOverlay();
  }
}

function start(){
  ensureAudio();
  refill(1); refill(2); refill(3);
  level = 1; score = 0; streak = 0; correctCount = 0; wrongCount = 0; bestStreak = 0;
  lives = parseInt(document.getElementById("livesSelect").value, 10);
  timeLeft = parseInt(document.getElementById("roundLength").value, 10);

  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("gameScreen").classList.remove("hidden");
  document.getElementById("resultScreen").classList.add("hidden");

  updateHud();
  setFeedback("Level 1 begins. Type the word exactly.", "neutral");
  next();

  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    updateHud();
    if(timeLeft <= 0) end("Time's up");
  }, 1000);
}

function check(){
  const val = document.getElementById("answer").value.toLowerCase().trim();
  if(!val) return;

  if(val === current.word){
    correctCount++;
    streak++;
    if(streak > bestStreak) bestStreak = streak;
    score += 10 + (streak > 1 ? 2 : 0);
    setFeedback('Correct! +10 points. The word was "' + current.word + '".', "success");
    soundCorrect();
    flash("success");
    levelCheck();
  } else {
    wrongCount++;
    streak = 0;
    lives--;
    setFeedback('Wrong. The word was "' + current.word + '".', "error");
    soundWrong();
    flash("error");
  }

  updateHud();

  if(lives <= 0) return end("Out of lives");
  next();
}

function skip(){
  wrongCount++;
  streak = 0;
  lives--;
  setFeedback('Skipped. The word was "' + current.word + '".', "error");
  soundWrong();
  flash("error");
  updateHud();
  if(lives <= 0) return end("Out of lives");
  next();
}

function end(reason){
  clearInterval(timer);
  document.getElementById("gameScreen").classList.add("hidden");
  document.getElementById("resultScreen").classList.remove("hidden");
  document.getElementById("finalScore").innerText = score;
  document.getElementById("correctCount").innerText = correctCount;
  document.getElementById("wrongCount").innerText = wrongCount;
  document.getElementById("bestStreak").innerText = bestStreak;
  document.getElementById("resultText").innerText =
    reason === "Time's up" ? "The clock ran out. Nice round." : "You ran out of lives. Good effort.";
}

document.getElementById("startBtn").onclick = start;
document.getElementById("submitBtn").onclick = check;
document.getElementById("skipBtn").onclick = skip;
document.getElementById("playAgainBtn").onclick = start;
document.getElementById("answer").addEventListener("keydown", e => {
  if(e.key === "Enter") check();
});
