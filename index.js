//adding event listeners
function addingEventListener() {
        const input = document.getElementById('button');
        
        function clickAlert() {
          alert('I was clicked!');
        }
        
        input.addEventListener('click', clickAlert);
      }
      
 // Calling function to activate event listener
      addingEventListener();
       const input = document.getElementById('button');
