document.addEventListener('DOMContentLoaded', function () {
    const faqQuestions = document.querySelectorAll('.faq-question');
  
    faqQuestions.forEach(question => {
      question.addEventListener('click', function () {
        const otherQuestions = Array.from(faqQuestions).filter(q => q !== question);
        otherQuestions.forEach(q => {
          q.classList.remove('active');
          const otherAnswer = q.nextElementSibling;
          otherAnswer.classList.remove('active');
        });
        this.classList.toggle('active');
        const answer = this.nextElementSibling;
        answer.classList.toggle('active');
      });
    });
  });
  