document.addEventListener('DOMContentLoaded', function () {
    const exercises = {
      Chest: {
        "Incline Barbell Bench Press": "assets/Chest/Incline Barbell Bench Press.mp4",
        "Dumbbell Bench Press": "assets/Chest/Dumbbell Bench Press.mp4",
        "Cable Crossovers": "assets/Chest/Cable Crossover.mp4",
        "Barbell Bench Press": "assets/Chest/Barbell Bench Press.mp4",
        "Decline Barbell Bench Press": "assets/Chest/Decline Barbell Bench Press.mp4",
        "Incline Dumbbell Bench Press": "assets/Chest/Incline Dumbbell Bench Press.mp4",
        "Decline Dumbbell Bench Press": "assets/Chest/Decline Dumbbell Bench Press.mp4",
        "Machine Chest Press": "assets/Chest/Machine Chest Press.mp4"
      },
      Shoulders: {
        "Seated Dumbbell Press": "assets/Shoulders/Seated Dumbbell Press.mp4",
        "Lateral Dumbbell Raise": "assets/Shoulders/Lateral Dumbbell Raise.mp4",
        "Overhead Barbell Press": "assets/Shoulders/Overhead Barbell Press.mp4",
        "Arnold Press": "assets/Shoulders/Arnold Press.mp4",
        "Machine Shoulder Press": "assets/Shoulders/Machine Shoulder Press.mp4",
        "Front Dumbbell Raise": "assets/Shoulders/Front Dumbbell Raise.mp4",
        "Cable Lateral Raise": "assets/Shoulders/Cable Lateral Raise.mp4"
      },
      Triceps: {
        "Cable Tricep Pushdowns": "assets/Triceps/Cable Tricep Pushdown.mp4",
        "Single-Arm Cable Tricep Extensions": "assets/Triceps/Single-Arm Cable Tricep Extension.mp4",
        "Barbell Overhead Tricep Extension": "assets/Triceps/Barbell Overhead Tricep Extension.mp4",
        "Reverse-Grip Cable Pushdown": "assets/Triceps/Reverse-Grip Cable Pushdown.mp4",
        "Overhead Cable Tricep Extension": "assets/Triceps/Overhead Cable Tricep Extension.mp4",
        "Cable Kickbacks": "assets/Triceps/Cable Kickbacks.mp4",
        "Close-Grip Bench Press": "assets/Triceps/Close-Grip Bench Press.mp4",
        "Tricep Dips": "assets/Triceps/Tricep Dips.mp4"
      },
      Biceps: {
        "Dumbbell Curls": "assets/Biceps/Dumbbell Curl.mp4",
        "Concentration Curls": "assets/Biceps/Concentration Curl.mp4",
        "EZ Bar Curls": "assets/Biceps/EZ-Bar Curl.mp4",
        "Machine Bicep Curls": "assets/Biceps/Machine Bicep Curl.mp4",
        "Cross-Body Hammer Curl": "assets/Biceps/Cross-Body Hammer Curl.mp4",
        "Seated Dumbbell Curl": "assets/Biceps/Seated Dumbbell Curl.mp4",
        "Barbell Curl": "assets/Biceps/Barbell Curl.mp4",
        "Wide-Grip Barbell Curl": "assets/Biceps/Wide-Grip Barbell Curl.mp4",
        "Close-Grip Barbell Curl": "assets/Biceps/Close-Grip Barbell Curl.mp4",
        "Overhead Cable Curl": "assets/Biceps/Overhead Cable Curl.mp4",
        "Single-Arm Cable Curl": "assets/Biceps/Single-Arm Cable Curl.mp4",
        "Reverse Grip Cable Curl": "assets/Biceps/Reverse Grip Cable Curl.mp4"
      },
      Back: {
        "Seated Cable Rows": "assets/Back/Seated Cable Row.mp4",
        "Single-Arm Dumbbell Rows": "assets/Back/Single-Arm Dumbbell Row.mp4",
        "Lat Pulldowns (with a closed grip)": "assets/Back/Lat Pulldown.mp4",
        "Barbell Deadlift": "assets/Back/Barbell Deadlift.mp4",
        "Dumbbell Pullover": "assets/Back/Dumbbell Pullover.mp4",
        "Incline Dumbbell Row": "assets/Back/Incline Dumbbell Row.mp4",
        "Face Pull": "assets/Back/Face Pull.mp4",
        "Straight-Arm Pulldown": "assets/Back/Straight-Arm Pulldown.mp4",
        "Hammer Strength Pulldown": "assets/Back/Hammer Strength Pulldown.mp4",
        "Machine Rear Delt Fly": "assets/Back/Machine Rear Delt Fly.mp4",
        "Lever Row Machine": "assets/Back/Lever Row Machine.mp4"
      },
      Abs: {
        "Bicycle Crunches": "assets/Abs/Bicycle Crunch.mp4",
        "Standard Plank": "assets/Abs/Standard Plank.mp4",
        "Cable Wood Chops": "assets/Abs/Cable Woodchop.mp4",
        "Russian Twists": "assets/Abs/Russian Twists.mp4",
        "Mountain Climbers": "assets/Abs/Mountain Climbers.mp4",
        "Toe Touches": "assets/Abs/Toe Touches.mp4",
        "Hanging Leg Raise": "assets/Abs/Hanging Leg Raise.mp4",
        "Cable Crunch": "assets/Abs/Cable Crunch.mp4",
        "Weighted Sit-ups": "assets/Abs/Weighted Sit-ups.mp4",
        "Decline Sit-ups": "assets/Abs/Decline Sit-ups.mp4"
      },
      Legs: {
        "Barbell Back Squats": "assets/Legs/Barbell Back Squat.mp4",
        "Leg Press": "assets/Legs/Leg Press.mp4",
        "Leg Extensions": "assets/Legs/Leg Extension Machine.mp4",
        "Calf Raises": "assets/Legs/Dumbbell Calf Raise.mp4",
        "Barbell Deadlift": "assets/Legs/Barbell Deadlift.mp4",
        "Barbell Hip Thrust": "assets/Legs/Barbell Hip Thrust.mp4",
        "Dumbbell Squat": "assets/Legs/Dumbbell Squat.mp4",
        "Dumbbell Lunge": "assets/Legs/Dumbbell Lunge.mp4",
        "Dumbbell Calf Raise": "assets/Legs/Dumbbell Calf Raise.mp4",
        "Goblet Squat": "assets/Legs/Goblet Squat.mp4",
        "Hack Squat Machine": "assets/Legs/Hack Squat Machine.mp4",
        "Smith Machine Squat": "assets/Legs/Smith Machine Squat.mp4",
        "Hip Adduction Machine": "assets/Legs/Hip Adduction Machine.mp4"
      }
    };
  
    const categorySelect = document.getElementById('category-select');
    const exerciseSelect = document.getElementById('exercise-select');
    const selectedExercisesList = document.getElementById('selected-exercises-list');
    const exerciseContainer = document.getElementById('exercise-container');
    const addExerciseBtn = document.getElementById('add-exercise-btn');
  
    let weeklyPlan = {};
  
    categorySelect.addEventListener('change', function () {
      exerciseSelect.innerHTML = '<option value="">Select an Exercise</option>';
      const selectedCategory = this.value;
      if (selectedCategory && exercises[selectedCategory]) {
        Object.keys(exercises[selectedCategory]).forEach(exercise => {
          let option = document.createElement('option');
          option.value = exercise;
          option.textContent = exercise;
          exerciseSelect.appendChild(option);
        });
      }
    });
  
    addExerciseBtn.addEventListener('click', function () {
      const selectedDay = document.getElementById('day-select').value;
      const selectedCategory = categorySelect.value;
      const selectedExercise = exerciseSelect.value;
      const sets = document.getElementById('sets-input').value;
      const reps = document.getElementById('reps-input').value;
  
      if (!selectedDay || !selectedCategory || !selectedExercise || !sets || !reps) {
        alert("Please fill in all fields.");
        return;
      }
  
      if (!weeklyPlan[selectedDay]) {
        weeklyPlan[selectedDay] = [];
      }
  
      weeklyPlan[selectedDay].push({ category: selectedCategory, exercise: selectedExercise, sets, reps });
      displaySelectedExercises();
    });
  
    function displaySelectedExercises() {
      selectedExercisesList.innerHTML = "";
      for (let day in weeklyPlan) {
        let dayTitle = document.createElement('h4');
        dayTitle.textContent = day;
        selectedExercisesList.appendChild(dayTitle);
  
        let ul = document.createElement('ul');
        weeklyPlan[day].forEach(item => {
          let li = document.createElement('li');
          li.innerHTML = `${item.exercise} - ${item.sets} sets of ${item.reps} reps 
            <button class='play-video-btn' data-exercise='${item.exercise}' data-category='${item.category}'>Play Demo</button>`;
          ul.appendChild(li);
        });
        selectedExercisesList.appendChild(ul);
      }
    }
  
    document.addEventListener('click', function (e) {
      if (e.target && e.target.classList.contains('play-video-btn')) {
        const exerciseName = e.target.getAttribute('data-exercise');
        const selectedCategory = e.target.getAttribute('data-category');
  
        if (!exercises[selectedCategory] || !exercises[selectedCategory][exerciseName]) {
          alert("Video not available for this exercise.");
          return;
        }
  
        const videoURL = exercises[selectedCategory][exerciseName];
        exerciseContainer.innerHTML = `
          <div class="exercise-item">
            <div class="exercise-item-text">${exerciseName}</div>
            <video controls autoplay loop muted>
              <source src="${videoURL}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        `;
      }
    });
  });
  