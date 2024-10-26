
document.addEventListener('DOMContentLoaded', function() {
    const routineData = [
        { day: "Saturday", classes: ["Higher Math", "Higher Math", "Higher Math", "Higher Math"] },
        { day: "Sunday", classes: ["Physics", "Physics", "Physics", "Physics"] },
        { day: "Monday", classes: ["Biology", "Biology", "Biology", "Biology"] },
        { day: "Tuesday", classes: ["Chemistry", "Chemistry", "Chemistry", "Chemistry"] },
        { day: "Wednesday", classes: ["Higher Math", "Higher Math", "Higher Math", "Higher Math"] },
        { day: "Thursday", classes: ["Physics", "Physics", "Physics", "Physics"] },
        { day: "Friday", classes: ["OFF", "OFF", "OFF", "OFF"] }
    ];

    const routineContainer = document.getElementById('routine-container');
    const progressContainer = document.getElementById('progress-container');

    routineData.forEach((item) => {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day-schedule');
        
        const dayName = document.createElement('h3');
        dayName.textContent = item.day;
        dayDiv.appendChild(dayName);
        
        item.classes.forEach((subject) => {
            const subjectDiv = document.createElement('div');
            subjectDiv.classList.add('subject');
            subjectDiv.innerHTML = `<input type="checkbox"> ${subject}`;
            dayDiv.appendChild(subjectDiv);
        });
        
        routineContainer.appendChild(dayDiv);
    });
});
