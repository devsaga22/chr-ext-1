document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.getElementById('save');
    const durationInput = document.getElementById('duration');

    saveButton.addEventListener('click', function() {
        const duration = parseInt(durationInput.value);
        chrome.alarms.clearAll(); // Clear existing alarms
        chrome.alarms.create({ delayInMinutes: duration });
        window.close(); // Close popup after saving
    });
});
