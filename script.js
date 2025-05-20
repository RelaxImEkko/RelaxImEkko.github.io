// Функция для изменения фамилии
function changeSurname() {
  const newSurname = document.getElementById("newSurname").value;
  if (newSurname.trim() !== "") {
    document.getElementById("name").textContent = "Артём " + newSurname;
  } else {
    alert("Пожалуйста, введите фамилию.");
  }
}

// Функция для изменения цвета фона на случайный
function changeBackgroundColor() {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#F1C40F", "#8E44AD", "#1ABC9C"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
