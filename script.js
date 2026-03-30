const levelData = {
  1: [
    {word:"apple", clue:"A common fruit."},
    {word:"planet", clue:"Earth is one of these."},
    {word:"garden", clue:"A place where flowers grow."},
    {word:"basket", clue:"Used to carry items."},
    {word:"window", clue:"A glass opening in a wall."},
    {word:"pepper", clue:"A seasoning and a vegetable."},
    {word:"blanket", clue:"Keeps you warm in bed."},
    {word:"lantern", clue:"A portable light source."},
    {word:"harvest", clue:"The gathering of crops."},
    {word:"picture", clue:"An image or photo."},
    {word:"flower", clue:"Blooms in a garden."},
    {word:"bridge", clue:"Connects two sides."},
    {word:"ocean", clue:"A large body of water."},
    {word:"pillow", clue:"You rest your head on it."},
    {word:"mirror", clue:"Shows your reflection."},
    {word:"candle", clue:"Gives light when lit."},
    {word:"forest", clue:"A place full of trees."},
    {word:"island", clue:"Land surrounded by water."},
    {word:"button", clue:"Used on clothes or devices."},
    {word:"camera", clue:"Used to take pictures."},
    {word:"school", clue:"Place to learn."},
    {word:"paper", clue:"Used for writing."},
    {word:"music", clue:"Pleasant organized sound."},
    {word:"family", clue:"Your close relatives."},
    {word:"orange", clue:"A fruit and a color."},
    {word:"silver", clue:"A shiny gray metal."},
    {word:"golden", clue:"Like the color of gold."},
    {word:"river", clue:"Flowing water."},
    {word:"mountain", clue:"Very tall landform."},
    {word:"valley", clue:"Low land between hills."},
    {word:"coffee", clue:"A popular morning drink."},
    {word:"letter", clue:"A character in the alphabet."},
    {word:"number", clue:"Used for counting."},
    {word:"circle", clue:"Round shape."},
    {word:"square", clue:"Shape with four equal sides."},
    {word:"ticket", clue:"Used for entry or travel."},
    {word:"market", clue:"A place to buy things."},
    {word:"travel", clue:"To go from place to place."},
    {word:"sunlight", clue:"Light from the sun."},
    {word:"moonlight", clue:"Light from the moon."}
  ],
  2: [
    {word:"journey", clue:"A trip from one place to another."},
    {word:"balance", clue:"To remain steady."},
    {word:"capture", clue:"To catch or record something."},
    {word:"diamond", clue:"A valuable gem."},
    {word:"musical", clue:"Related to songs or rhythm."},
    {word:"umbrella", clue:"Used in the rain."},
    {word:"creative", clue:"Full of ideas and imagination."},
    {word:"triangle", clue:"A shape with three sides."},
    {word:"mystery", clue:"Something difficult to explain."},
    {word:"treasure", clue:"Something precious or valuable."},
    {word:"separate", clue:"To divide or keep apart."},
    {word:"necessary", clue:"Needed or required."},
    {word:"favorite", clue:"Most liked."},
    {word:"business", clue:"Work, trade, or a company."},
    {word:"calendar", clue:"Used to track dates."},
    {word:"opposite", clue:"Completely different in direction or meaning."},
    {word:"library", clue:"A place with books."},
    {word:"computer", clue:"An electronic device for work or play."},
    {word:"language", clue:"A way of speaking or writing."},
    {word:"history", clue:"The story of past events."},
    {word:"important", clue:"Having great value."},
    {word:"interest", clue:"Curiosity or attention."},
    {word:"knowledge", clue:"Facts and understanding."},
    {word:"different", clue:"Not the same."},
    {word:"question", clue:"Something you ask."},
    {word:"possible", clue:"Able to happen."},
    {word:"remember", clue:"To keep in mind."},
    {word:"solution", clue:"An answer to a problem."},
    {word:"building", clue:"A structure with walls and a roof."},
    {word:"exercise", clue:"Physical activity or practice."},
    {word:"chocolate", clue:"A sweet treat."},
    {word:"medicine", clue:"Used to treat illness."},
    {word:"hospital", clue:"Where people get medical care."},
    {word:"decision", clue:"A choice made after thinking."},
    {word:"activity", clue:"Something you do."},
    {word:"improve", clue:"To make better."},
    {word:"success", clue:"A good result."},
    {word:"project", clue:"A planned piece of work."},
    {word:"imagine", clue:"To picture in your mind."},
    {word:"develop", clue:"To grow or create over time."},
    {word:"network", clue:"A connected system."},
    {word:"process", clue:"A series of steps."},
    {word:"system", clue:"A set of connected parts."},
    {word:"support", clue:"Help or encouragement."},
    {word:"manager", clue:"A person in charge."},
    {word:"quality", clue:"How good something is."},
    {word:"service", clue:"Helpful work done for others."},
    {word:"product", clue:"Something made to be sold."},
    {word:"design", clue:"The look or plan of something."},
    {word:"method", clue:"A way of doing something."}
  ],
  3: [
    {word:"rhythm", clue:"A repeated pattern of sound or movement."},
    {word:"conscience", clue:"Your inner sense of right and wrong."},
    {word:"entrepreneur", clue:"Someone who starts a business."},
    {word:"maintenance", clue:"Keeping something in good condition."},
    {word:"recommend", clue:"To suggest."},
    {word:"accommodation", clue:"A place to stay."},
    {word:"acknowledgment", clue:"Recognition or acceptance."},
    {word:"pronunciation", clue:"The way a word is spoken."},
    {word:"miscellaneous", clue:"Made up of many different things."},
    {word:"conscientious", clue:"Very careful and responsible."},
    {word:"embarrassment", clue:"A feeling of shame or awkwardness."},
    {word:"occasionally", clue:"Sometimes, but not often."},
    {word:"independent", clue:"Not relying on others."},
    {word:"responsibility", clue:"A duty or obligation."},
    {word:"communication", clue:"The sharing of information."},
    {word:"psychology", clue:"The study of the mind."},
    {word:"architecture", clue:"The design of buildings."},
    {word:"mathematics", clue:"The study of numbers and patterns."},
    {word:"philosophy", clue:"The study of ideas and knowledge."},
    {word:"literature", clue:"Written works like novels and poems."},
    {word:"environment", clue:"The world around us."},
    {word:"opportunity", clue:"A good chance to do something."},
    {word:"government", clue:"The system that rules a country."},
    {word:"temperature", clue:"A measure of heat or cold."},
    {word:"relationship", clue:"The connection between people or things."},
    {word:"development", clue:"Growth or progress."},
    {word:"understanding", clue:"Knowledge or comprehension."},
    {word:"organization", clue:"An arranged system or group."},
    {word:"information", clue:"Facts or details."},
    {word:"education", clue:"The process of learning."},
    {word:"international", clue:"Involving more than one country."},
    {word:"performance", clue:"How well something is done."},
    {word:"technology", clue:"Tools and systems from science."},
    {word:"professional", clue:"Relating to skilled paid work."},
    {word:"significant", clue:"Important or meaningful."},
    {word:"immediately", clue:"At once."},
    {word:"especially", clue:"More than usual."},
    {word:"experience", clue:"Knowledge gained from doing something."},
    {word:"knowledgeable", clue:"Well informed."},
    {word:"extraordinary", clue:"Very unusual or remarkable."},
    {word:"controversial", clue:"Causing disagreement."},
    {word:"interpretation", clue:"The meaning or explanation of something."},
    {word:"representation", clue:"A sign, image, or example of something."},
    {word:"characteristic", clue:"A typical feature or quality."},
    {word:"administration", clue:"The management of an organization."},
    {word:"determination", clue:"Firm decision and effort."},
    {word:"consideration", clue:"Careful thought."},
    {word:"implementation", clue:"Putting a plan into action."},
    {word:"imagination", clue:"The ability to form ideas in the mind."},
    {word:"transformation", clue:"A complete change in form or appearance."}
  ]
};

const els = {
  startScreen: document.getElementById("startScreen"),
  gameScreen: document.getElementById("gameScreen"),
  resultScreen: document.getElementById("resultScreen"),
  startBtn: document.getElementById("startBtn"),
  submitBtn: document.getElementById("submitBtn"),
  skipBtn: document.getElementById("skipBtn"),
  playAgainBtn: document.getElementById("playAgainBtn"),
  roundLength: document.getElementById("roundLength"),
  livesCount: document.getElementById("livesCount"),
  levelValue: document.getElementById("levelValue"),
  scoreValue: document.getElementById("scoreValue"),
  livesValue: document.getElementById("livesValue"),
  streakValue: document.getElementById("streakValue"),
  timerValue: document.getElementById("timerValue"),
  levelBanner: document.getElementById("levelBanner"),
  wordPrompt: document.getElementById("wordPrompt"),
  wordHint: document.getElementById("wordHint"),
  answerInput: document.getElementById("answerInput"),
  feedbackBox: document.getElementById("feedbackBox"),
  feedbackText: document.getElementById("feedbackText"),
  finalScore: document.getElementById("finalScore"),
  resultSummary: document.getElementById("resultSummary"),
  correctCount: document.getElementById("correctCount"),
  wrongCount: document.getElementById("wrongCount"),
  bestStreak: document.getElementById("bestStreak"),
  highestLevel: document.getElementById("highestLevel"),
  levelUpOverlay: document.getElementById("levelUpOverlay"),
  levelUpTitle: document.getElementById("levelUpTitle"),
  levelUpText: document.getElementById("levelUpText")
};

let game = null;
let timer = null;

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getLevelName(level) {
  if (level === 1) return "Easy";
  if (level === 2) return "Medium";
  return "Hard";
}

function getLevelPool(level) {
  return shuffle(levelData[level]);
}

function playTone(freq, duration, type = "sine", volume = 0.03) {
  const AudioContextRef = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextRef) return;
  if (!window.__beeAudioCtx) window.__beeAudioCtx = new AudioContextRef();
  const ctx = window.__beeAudioCtx;
  if (ctx.state === "suspended") ctx.resume();

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.value = volume;
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
  osc.stop(ctx.currentTime + duration);
}

function soundCorrect() {
  playTone(740, 0.12, "triangle", 0.04);
  setTimeout(() => playTone(980, 0.14, "triangle", 0.03), 70);
}

function soundWrong() {
  playTone(240, 0.18, "sawtooth", 0.035);
  setTimeout(() => playTone(180, 0.18, "sawtooth", 0.03), 90);
}

function soundLevelUp() {
  [440, 660, 880].forEach((freq, index) => {
    setTimeout(() => playTone(freq, 0.16, "triangle", 0.04), index * 90);
  });
}

function showScreen(which) {
  els.startScreen.classList.add("hidden");
  els.gameScreen.classList.add("hidden");
  els.resultScreen.classList.add("hidden");
  if (which === "start") els.startScreen.classList.remove("hidden");
  if (which === "game") els.gameScreen.classList.remove("hidden");
  if (which === "result") els.resultScreen.classList.remove("hidden");
}

function setFeedback(message, mode) {
  els.feedbackText.textContent = message;
  els.feedbackBox.classList.remove("success", "error", "neutral");
  els.feedbackBox.classList.add(mode);
}

function updateHud() {
  els.levelValue.textContent = game.level;
  els.scoreValue.textContent = game.score;
  els.livesValue.textContent = game.lives;
  els.streakValue.textContent = game.streak;
  els.timerValue.textContent = game.timeLeft;
  els.levelBanner.textContent = `Level ${game.level} - ${getLevelName(game.level)} Words`;
}

function nextWord() {
  if (game.currentIndex >= game.words.length) {
    game.words = getLevelPool(game.level);
    game.currentIndex = 0;
  }
  const current = game.words[game.currentIndex];
  els.wordPrompt.textContent = current.word.length + " letters";
  els.wordHint.textContent = current.clue;
  els.answerInput.value = "";
}

function showLevelUpOverlay(level) {
  els.levelUpTitle.textContent = `Level ${level}!`;
  els.levelUpText.textContent = `${getLevelName(level)} words unlocked`;
  els.levelUpOverlay.classList.remove("hidden");
  els.levelBanner.classList.add("flash-level");
  soundLevelUp();

  setTimeout(() => {
    els.levelUpOverlay.classList.add("hidden");
    els.levelBanner.classList.remove("flash-level");
    els.answerInput.focus();
  }, 1300);
}

function maybeLevelUp() {
  let nextLevel = game.level;
  if (game.correct >= 6) nextLevel = 2;
  if (game.correct >= 12) nextLevel = 3;

  if (nextLevel !== game.level) {
    game.level = nextLevel;
    game.highestLevel = Math.max(game.highestLevel, game.level);
    game.words = getLevelPool(game.level);
    game.currentIndex = 0;
    updateHud();
    setFeedback(`Level up! Welcome to Level ${game.level} - ${getLevelName(game.level)}.`, "neutral");
    showLevelUpOverlay(game.level);
  }
}

function endGame(reason) {
  clearInterval(timer);
  els.finalScore.textContent = game.score;
  els.correctCount.textContent = game.correct;
  els.wrongCount.textContent = game.wrong;
  els.bestStreak.textContent = game.bestStreak;
  els.highestLevel.textContent = game.highestLevel;
  els.resultSummary.textContent =
    reason === "Time's up"
      ? "Clock expired. Strong finish."
      : "You used all your lives. Good run.";
  showScreen("result");
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    game.timeLeft -= 1;
    updateHud();
    if (game.timeLeft <= 0) endGame("Time's up");
  }, 1000);
}

function initGame() {
  game = {
    level: 1,
    highestLevel: 1,
    score: 0,
    lives: Number(els.livesCount.value),
    streak: 0,
    bestStreak: 0,
    correct: 0,
    wrong: 0,
    timeLeft: Number(els.roundLength.value),
    words: getLevelPool(1),
    currentIndex: 0
  };
  updateHud();
  setFeedback("Level 1 begins. Type the word exactly.", "neutral");
  showScreen("game");
  nextWord();
  startTimer();
  els.answerInput.focus();
}

function checkAnswer() {
  const current = game.words[game.currentIndex];
  const guess = els.answerInput.value.trim().toLowerCase();

  if (!guess) {
    setFeedback("Type a spelling before you submit.", "neutral");
    return;
  }

  if (guess === current.word.toLowerCase()) {
    game.correct += 1;
    game.streak += 1;
    game.bestStreak = Math.max(game.bestStreak, game.streak);
    const points = (game.level * 10) + Math.min(game.streak - 1, 5) * 2;
    game.score += points;
    setFeedback(`Correct! +${points} points. The word was "${current.word}".`, "success");
    soundCorrect();
  } else {
    game.wrong += 1;
    game.streak = 0;
    game.lives -= 1;
    setFeedback(`Wrong. Correct spelling: "${current.word}".`, "error");
    soundWrong();
  }

  game.currentIndex += 1;
  maybeLevelUp();
  updateHud();

  if (game.lives <= 0) {
    endGame("Out of lives");
    return;
  }

  setTimeout(() => {
    nextWord();
    els.answerInput.focus();
  }, 700);
}

function skipWord() {
  const current = game.words[game.currentIndex];
  game.wrong += 1;
  game.streak = 0;
  game.lives -= 1;
  setFeedback(`Skipped. Correct spelling: "${current.word}".`, "error");
  soundWrong();
  game.currentIndex += 1;
  updateHud();

  if (game.lives <= 0) {
    endGame("Out of lives");
    return;
  }

  setTimeout(() => {
    nextWord();
    els.answerInput.focus();
  }, 700);
}

els.startBtn.addEventListener("click", initGame);
els.submitBtn.addEventListener("click", checkAnswer);
els.skipBtn.addEventListener("click", skipWord);
els.playAgainBtn.addEventListener("click", () => showScreen("start"));
els.answerInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") checkAnswer();
});
