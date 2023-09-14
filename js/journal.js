document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth', // Відображення календаря за замовчуванням
    events: [
      // Тут можна додавати події на календар
      {
        title: 'Тренування',
        start: '2023-09-15',
        end: '2023-09-15',
      },
      // Додайте інші події за потреби
    ],
  });

  calendar.render();
});

// ==================================================

// Отримуємо посилання на елементи DOM
const eventForm = document.getElementById('event-form');
const eventTitleInput = document.getElementById('event-title');
const eventDateInput = document.getElementById('event-date');
const eventsList = document.getElementById('events-list');

// Змінна для зберігання списку подій
const events = [];

// Функція для відображення списку подій
function displayEvents() {
    eventsList.innerHTML = '';

    events.forEach((event, index) => {
        const eventItem = document.createElement('li');
        eventItem.classList.add('event-item');

        const eventText = document.createElement('span');
        eventText.innerText = `${event.date} - ${event.name}`;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Видалити';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            // Видаляємо подію зі списку за індексом
            events.splice(index, 1);
            // Повторно відображаємо список подій
            displayEvents();
        });

        eventItem.appendChild(eventText);
        eventItem.appendChild(deleteButton);
        eventsList.appendChild(eventItem);
    });
}

// Обробник події для форми
eventForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const eventName = eventTitleInput.value;
    const eventDate = eventDateInput.value;

    if (eventName && eventDate) {
        // Додаємо нову подію до списку
        events.push({ name: eventName, date: eventDate });
        // Повторно відображаємо список подій
        displayEvents();
        // Очищаємо поля введення
        eventTitleInput.value = '';
        eventDateInput.value = '';
    }
});

// Ініціалізація відображення списку подій
displayEvents();

