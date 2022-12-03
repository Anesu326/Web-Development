const correct_answers = ['B', 'B', 'A', 'A', 'A'];
const form = document.querySelector('.quiz-form');
const results = document.querySelector('.result');
const data = document.querySelector('span');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const user_answer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

  user_answer.forEach((answer, index) => {
    if (answer === correct_answers[index]) {
      score += 20;
    }
  });
  scrollTo(0, 0);
  results.classList.remove('d-none');

  //Animate the score
  let point = 0;
  const timer = setInterval(() => {
    data.textContent = `${point}%`;
    if (point === score) {
      clearInterval(timer);
    } else {
      point++
    }
  }, 10);
});
