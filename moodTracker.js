function initMoodTracker() {
    const moodOptions = document.querySelectorAll('.mood-option');

    moodOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            const mood = e.target.dataset.mood;
            saveMood(mood);
        });
    });

    function saveMood(mood) {
        // Save the selected mood to localStorage
        localStorage.setItem('mood', mood);
        // Update the UI based on selected mood
    }
}
