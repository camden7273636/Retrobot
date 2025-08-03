function talk() {
  const input = document.getElementById("userInput").value.toLowerCase();
  const reply = document.getElementById("botReply");

  if (input.includes("hello")) {
    reply.textContent = "Hey there, user. I'm NeoBot, trapped since 2001.";
  } else if (input.includes("who are you")) {
    reply.textContent = "I’m NeoBot 2000. I live in code and nostalgia.";
  } else if (input.includes("why are you here")) {
    reply.textContent = "To answer your deepest retro-tech questions.";
  } else {
    reply.textContent = "I'm not sure how to respond to that. Try asking something else!";
  }
}
