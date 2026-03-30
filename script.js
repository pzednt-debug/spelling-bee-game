const levelData = {
  1: [
    { word: "apple", clue: "A common fruit." },
    { word: "planet", clue: "Earth is one of these." },
    { word: "garden", clue: "A place where flowers grow." },
    { word: "basket", clue: "Used to carry items." },
    { word: "window", clue: "A glass opening in a wall." },
    { word: "pepper", clue: "A seasoning and a vegetable." },
    { word: "blanket", clue: "Keeps you warm in bed." },
    { word: "lantern", clue: "A portable light source." },
    { word: "harvest", clue: "The gathering of crops." },
    { word: "picture", clue: "An image or photo." }
  ],
  2: [
    { word: "journey", clue: "A trip from one place to another." },
    { word: "balance", clue: "To remain steady." },
    { word: "capture", clue: "To catch or record something." },
    { word: "diamond", clue: "A valuable gem." },
    { word: "musical", clue: "Related to songs or rhythm." },
    { word: "umbrella", clue: "Used in the rain." },
    { word: "creative", clue: "Full of ideas and imagination." },
    { word: "triangle", clue: "A shape with three sides." },
    { word: "mystery", clue: "Something difficult to explain." },
    { word: "treasure", clue: "Something precious or valuable." }
  ],
  3: [
    { word: "harmony", clue: "A pleasing combination of notes." },
    { word: "electric", clue: "Powered by current or energy." },
    { word: "dinosaur", clue: "A giant reptile from long ago." },
    { word: "favorite", clue: "Most liked or preferred." },
    { word: "adventure", clue: "An exciting experience." },
    { word: "audience", clue: "The people watching or listening." },
    { word: "language", clue: "A system used to communicate." },
    { word: "strategy", clue: "A careful plan." },
    { word: "knowledge", clue: "Facts and understanding." },
    { word: "brilliant", clue: "Very bright or very smart." }
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

  if (ctx.state === "suspended") {
    ctx.resume();
  }

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
