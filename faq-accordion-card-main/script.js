document.querySelectorAll('.question').forEach((question) => question.addEventListener('click', ()=>{
  if(question.parentNode.classList.contains('active')) {
    question.parentNode.classList.toggle('active')
} else {
    document.querySelectorAll(".question").forEach(question => question.parentNode.classList.remove('active'));
     question.parentNode.classList.add('active')
  }
}));

// const question = document.querySelecror('.question');
// const questions = document.querySelecrorAll(".question");
// question.forEach((quest) =>{
//   quest.addEventListener('click', () =>{
//     if (quest.parentNode.classList.contain("active")) {
// 			quest.parentNode.classList.toggle("active");
// 		}
//   })
// })