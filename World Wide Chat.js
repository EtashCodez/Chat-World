function addUser() {
    user_name = document.getElementById("text_input_user_name").value
    localStorage.setItem("name", user_name);
    window.location = "World Wide Chat_room.html"
}