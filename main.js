// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.querySelector('#modal').className='hidden'
const likes=document.querySelectorAll('.like-glyph')
function simpLikes(){
  likes.forEach(function(press){
    press.addEventListener('click', function(event){
      event.preventDefault();

      if (event.target.innerHTML==EMPTY_HEART){
        mimicServerCall("")
        .then(function(response){
          event.target.innerHTML=FULL_HEART
          event.target.classList.add('activated-heart')

        })

      }
      else{
        event.target.innerHTML=EMPTY_HEART
        event.target.classList.remove('activated-heart')
      }
    })
    .catch((error) =>{
      const divError=document.querySelector('.hidden')
      divError.classList.remove('hidden')
      divError.textContent=error
      setTimeout(()=> divError.classList.add('hidden'),3000)
    })
  })
}

simpLikes()

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
