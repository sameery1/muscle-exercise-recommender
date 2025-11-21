function filterExercises(exercises, selectedMuscles) {
    const muscles = selectedMuscles.map(m => m.toLowerCase());

    return exercises.filter(ex => {
        const primary = ex.primary.some(m => muscles.includes(m.toLowerCase()));
        const secondary = ex.secondary.some(m => muscles.includes(m.toLowerCase()));

        return primary || secondary;
    });
}

module.exports = filterExercises;
