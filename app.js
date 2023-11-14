function talk() {
        var know = {
            "Helo" : "Hi there &#128512",
            "Who are you": "My name is chatty batty",
            "What can you do for me" : "Not much for now just keeping you busy",
            "Ok" : "You are welcome",
            "Bye" : "Chat later, bye for now",
            "Tell me about yourself": "I'm just a smallernyana chatbot just keeping you busy with html, css and JS"
        }

        var user = document.getElementById('userBox').value;
        document.getElementById('chatLog').innerHTML = user + "<br>";
 if (user in know) {
    document.getElementById('chatLog').innerHTML = know(user); + "<br>"
 } else {
    document.getElementById('chatLog').innerHTML = "Sorry I don't understand";
 }
}