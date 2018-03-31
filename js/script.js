var link = document.querySelector(".mail-button");
      var popup = document.querySelector(".write-to-us");
      var close = document.querySelector(".write-to-us-close");
      var inputname = popup.querySelector("[name=name]");
      var mail = popup.querySelector("[name=e-mail]");
      var text = popup.querySelector("[name=letter]");
      var form = popup.querySelector("form");
      
      link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("write-to-us-show");
        inputname.focus();
      });

      close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("write-to-us-show");
        inputname.classList.remove("invalid");
        mail.classList.remove("invalid");
        text.classList.remove("invalid");
      });

      form.addEventListener("submit", function (evt) {
        if (!inputname.value || !mail.value || !text.value) {
          evt.preventDefault();
          console.log("Пусто!!!!");
          if (!inputname.value) {
            inputname.classList.add("invalid");
          }
          if (!mail.value) {
            mail.classList.add("invalid");
          }
          if (!text.value) {
            text.classList.add("invalid");
          }      
        }
      });

      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();

          if (popup.classList.contains("write-to-us-show")) {
            popup.classList.remove("write-to-us-show");
            inputname.classList.remove("invalid");
            mail.classList.remove("invalid");
            text.classList.remove("invalid");
          } 
          
        }
      })


      