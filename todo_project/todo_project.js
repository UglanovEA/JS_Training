// Находим необходимые элементы на странице
const form = document.querySelector("#newTaskForm");
const input = document.querySelector("#addNewTask");
const taskList = document.querySelector("#list-group");
const emptyList = document.querySelector("#empty-list-item");

// Отслеживаем отправку формы
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Отменим стандартное поведение страницы (перезагрузка страницы)
  const taskText = input.value; // Берем текст введенные ользователем в поле ввода
  const taskHTML = `<li class="list-group-item d-flex justify-content-between">
                        <span contentEditable="true" class="task-title">${taskText}</span>
                          <div>
                            <button type="button" data-action="ready" class="btn btn-light align-self-end">Готово</button>
                            <button type="button" data-action="delete-task" class="btn btn-light align-self-end">Удалить</button>
                          </div>
                    </li>`
  taskList.insertAdjacentHTML("afterbegin", taskHTML); // Добавляем на страницу
  // Скрывать или показывает "Список дел пуст"
  toggleEmptyListItem();
  // Очищаем поле ввода
  input.value = "";
  // Возвращаем фокус на поле ввода после добавления новой задачи
  input.focus();
})


// Кнопки "Готово" и "Удалить"
// Прверяем что клик произошел по кнопке "Удалить"
taskList.addEventListener("click", function (event) {
  if (event.target.getAttribute("data-action") == "delete-task") {
    // Находим родетельский тег <li> и удаляем его
    event.target.closest(".list-group-item").remove();
    // Скрывать или показывает "Список дел пуст"
    toggleEmptyListItem();
  } else if (event.target.getAttribute("data-action") == "ready") {
    // Находим родетельский тег <span> и добавляем дополнительный класс
    const parentElement = event.target.closest(".list-group-item");
    parentElement.querySelector(".task-title").classList.add("task-title--done");
    // Убираем возможность редактировать выполненый элемент
    parentElement.querySelector(".task-title").setAttribute("contentEditable", "false")
    // И перемещаем выполненый элемент в конец списка
    taskList.insertAdjacentElement("beforeend", parentElement);
    // Удалить кнопку "Готово" после выполнения
    parentElement.querySelector('[data-action="ready"]').remove();
  }
})


// Функция удаления поля "Список дел пуст"
function toggleEmptyListItem() {
  if (taskList.children.length > 1) {
    emptyList.style.display = "none";
  } else {
    emptyList.style.display = "block";
  }
}
