document.getElementById("resumeForm")?.addEventListener("submit", function (event) {
    event.preventDefault();
  
    // type assertion
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLTextAreaElement;
    const experienceElement = document.getElementById("experience") as HTMLTextAreaElement;
    const skillsElement = document.getElementById("skills") as HTMLTextAreaElement;
  
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;
  
      // output
      const resumeOutPut = `<h2>Resume</h2>
        <p><strong>Name:</strong> <span id="edit_name" class="editable"> ${name} </span></p>
        <p><strong>Email:</strong> <span id="edit_email" class="editable"> ${email}</span> </p>
        <p><strong>Phone Number:</strong> <span id="edit_phone" class="editable"> ${phone} </span> </p>
  
        <h3>Education</h3>
        <p id="edit_education" class="editable">${education}</p>
  
        <h3>Experience</h3>
        <p id="edit_experience" class="editable">${experience}</p>
  
        <h3>Skills</h3>
        <p id="edit_skills" class="editable">${skills}</p>`;
  
      const resumeOutPutElement = document.getElementById('resumeOutPut');
      if (resumeOutPutElement) {
        resumeOutPutElement.innerHTML = resumeOutPut;
        makeEditable();
      }
    } else {
      console.error("One or more output elements are missing");
    }
  });

  function makeEditable() {
    const editableElement = document.querySelectorAll('.editable')
    editableElement.forEach(element=>{
      element.addEventListener('click' , function(){
        const currentElement = element as HTMLElement;
        const currentValue = currentElement.textContent || "";
        //replace content
        if (currentElement.tagName ==="p" || currentElement.tagName ==="span") {
          const input= document.createElement('input')
          input.type =' text'
          input.value =currentValue
          input.classList.add('editing input')

           input.addEventListener('blur', function(){
            currentElement.textContent = input.value
            currentElement.style.display = 'inline'
            input.remove()
           })



          currentElement.style.display = 'none'
          currentElement.parentNode?.insertBefore(input , currentElement)
          input.focus()
        }

      })
    })
  }