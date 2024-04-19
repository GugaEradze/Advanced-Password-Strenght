document.addEventListener("DOMContentLoaded", function() 
{
  var password = document.getElementById("password");
  var message = document.getElementById("message");
  var strength = document.getElementById("strength");

  password.addEventListener('input', () => 
  {
      if (password.value.length > 0) 
      {
          message.style.display = "block";
      } else 
      {
          message.style.display = "none";
      }
      var score = 0;

      if (password.value.length >= 8)
      {
         score += 1;
      }

      if (/[A-Z]/.test(password.value)) 
      {
          score += 1;
      }

      if (/[a-z]/.test(password.value)) 
      {
          score += 1;
      }

      if (/\d/.test(password.value)) 
      {
          score += 1;
      }

      if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password.value)) 
      {
          score += 1;
      }

      switch(score) 
      {
          case 0:
          case 1:
              strength.innerHTML = "Weak";
              password.style.borderColor = "#ff5925";
              message.style.color = "#ff5925";
              break;
          case 2:
              strength.innerHTML = "Medium";
              password.style.borderColor = "#fbb710";
              message.style.color = "#fbb710";
              break;
          case 3:
          case 4:
          case 5:
              strength.innerHTML = "Strong";
              password.style.borderColor = "#2ecc71";
              message.style.color = "#2ecc71";
              break;
      }
  });
});