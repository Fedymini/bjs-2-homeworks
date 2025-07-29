// Функция для вывода текста в область вывода
function log(message) {
    const output = document.getElementById('output');
    const timestamp = new Date().toLocaleTimeString();
    output.innerHTML += `<p>[${timestamp}] ${message}</p>`;
    output.scrollTop = output.scrollHeight;
}

// Функция для очистки вывода
function clearOutput() {
    const output = document.getElementById('output');
    output.innerHTML = '<h3>Вывод:</h3><p>Результаты выполнения кода будут отображаться здесь.</p>';
}

// Функция для запуска тестов
function runTest() {
    clearOutput();
    log('Тест запущен...');
    
    // Здесь вы можете добавлять свой код для тестирования
    // Например:
    // testYourFunction();
    
    log('Тест завершен.');
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    log('Страница загружена. Готов к работе!');
    log('Используйте функцию log() для вывода результатов вашего кода.');
}); 