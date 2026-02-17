"use strict";
const message_ul = document.getElementById("message_ul");
const messageForm = document.getElementById("messageForm");
const message_input = document.getElementById("message_input");
class Message {
  constructor(
    sender,
    recipient,
    text,
    timestamp = new Date().toLocaleTimeString()
  ) {
    this.sender = sender;
    this.recipient = recipient;
    this.text = text;
    this.timestamp = timestamp;
  }
  get_formatted_message() {
    return `${this.timestamp}: ${this.sender} to ${this.recipient}: ${this.text}`;
  }
}

class User {
  #status;
  constructor(username, status) {
    this.username = username;
    this.#status = status;
  }
  //getter method (e.g. getStatus()) to return the current status.
  get_status() {
    return this.#status;
  }
  //sendMessage(text, recipient) that returns a simple message object or string
  send_message(message_text, recipient) {
    return new Message(this.username, recipient.username, message_text);
  }
}
const user_1 = new User("Allen", "online");
const user_2 = new User("John", "away");

console.log(user_1.get_status());
console.log(user_1.send_message("Hey I'm learning OOP", user_2));
console.log(user_1);
class Chat {
  constructor() {
    this.user_list = [];
    this.user_message = [];
  }
  //Adds a User instance to the chat’s user list.
  add_user(user) {
    return this.user_list.push(user);
  }
  send_message(sender_username, receipt_username, message_text) {
    const sender = this.user_list.find(
      (user) => user.username === sender_username
    );
    const recipient = this.user_list.find(
      (user) => user.username === receipt_username
    );
    if (!sender || !recipient) {
      console.log("Sender or recipient not found!");
      return;
    }
    const message = sender.send_message(message_text, recipient);
    this.user_message.push(message)
    return message
  }
  get_all_messages() {
    return this.user_message.map((msg) => msg.get_formatted_message());
  }
}
const chat_app = new Chat();
chat_app.add_user(user_1);
chat_app.add_user(user_2);
messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input_message = message_input.value.trim();
  if (!input_message) return;
    
  
  const message = chat_app.send_message("Allen", "John", input_message);
  //Check if a message exist and if it true create and render a un-order list of message dynamically
  if (message) {
    const li = document.createElement("li");
  // Create message content structure
        const message_content = document.createElement("div");
        message_content.className = "message-content";
        message_content.textContent = message.text;
        
        const message_time = document.createElement("span");
        message_time.className = "message-time";
        message_time.textContent = message.timestamp;
        
        li.appendChild(message_content);
        li.appendChild(message_time);
        message_ul.appendChild(li);
        
        // Enable Scrolling to the bottom of messages
        message_ul.scrollTop = message_ul.scrollHeight;
        
        // Clear input
        message_input.value = "";
        message_input.focus()
  }
});
