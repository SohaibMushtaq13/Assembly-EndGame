export function LossVoice(message = "You Losse!") {
  const utterance = new SpeechSynthesisUtterance(message);
  utterance.pitch = 2;
  utterance.rate = 1;
  window.speechSynthesis.speak(utterance);
}
