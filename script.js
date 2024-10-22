function shuffleSentence() {
    const sentence = document.getElementById('sentenceInput').value;
    const words = sentence.split(' ');
    for (let i = words.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [words[i], words[j]] = [words[j], words[i]];
    }
    const shuffledSentence = words.join(' / ');
    document.getElementById('result').innerText = shuffledSentence;
}
