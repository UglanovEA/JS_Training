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
                        <span contenteditable="true" class="task-title task-title--done">${taskText}</span>
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

// Функция удаления поля "Список дел пуст"
function toggleEmptyListItem() {
  if (taskList.children.length > 1) {
    emptyList.style.display = "none"
  } else {
    emptyList.style.display = "block"
  }
}
