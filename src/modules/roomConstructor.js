class Room {
  constructor(
    roomNumber,
    code,
    firstName,
    lastName,
    gender,
    birthday,
    codeStatus,
    titleStatus,
    startDate,
    startTime,
    doctorName,
    assistant,
    isDoctor,
    heightFt,
    heightIn,
    weight,
    bmi,
    updateTime,
    parent
  ) {
    this.roomNumber = roomNumber;
    this.code = code;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.birthday = birthday;
    this.status = {
      codeStatus: codeStatus,
      titleStatus: titleStatus,
    };
    this.startDate = startDate;
    this.startTime = startTime;
    this.doctorName = doctorName;
    this.assistant = assistant;
    this.isDoctor = isDoctor;
    this.parameters = {
      heightFt: heightFt,
      heightIn: heightIn,
      weight: weight,
      bmi: bmi,
    };
    this.updateTime = updateTime;
    this.parent = parent;
  }

  render() {
    const element = document.createElement("div");
    const formElement = document.createElement("form");
    const botton = document.createElement("botton");
    botton.setAttribute("id", this.roomNumber);
    element.setAttribute("id", this.roomNumber);
    botton.textContent = "OPEN";
    botton.classList.add("open-botton");
    element.classList.add("room");

    const appeal = this.appealToPerson(this.gender, this.isDoctor);

    //Якщо вік не вказаний = ''
    const agePerson = this.getAge(this.birthday)
      ? `${this.getAge(this.birthday)} years,`
      : "";

    botton.addEventListener("click", (event) => {
      this.open();
    });

    //Шаблонний текст для кімнати
    element.innerHTML = `
    <div class="room-number">
    <span>${"Room-" + this.roomNumber}</span>
    <span>(${this.code})</span>
    </div>
    
    <div class="person">
    <span class="name-person">${this.firstName + " " + this.lastName}</span>
    <h4 class="appeal-person">${
      appeal +
      " " +
      this.firstName +
      " " +
      this.lastName +
      ", " +
      agePerson +
      " " +
      String(this.gender).slice(0, 1)
    }
    </h4>
    
    <div class="vital-signs">
    <span>(HT: ${this.parameters.heightFt}'${this.parameters.heightIn}'')</span>
    <span>(WT: ${this.parameters.weight}lbs.)</span>
    <span>(BMI: ${this.parameters.bmi})</span>
    </div>
    </div>

    <div class="status">
    <span>${this.status.codeStatus}</span>
    <p>${this.status.titleStatus}</p>
    </div>

    <div class="date">Date: ${this.startDate}</div>
    <span class="time">Time: ${this.startTime}</span>
    <div class="name-doc">${this.doctorName}</div>
    <div class="assistant-doc">${this.assistant}</div>`;
    element.append(formElement);
    element.append(botton);
    this.parent.append(element);
  }

  getAge(personDate) {
    const now = new Date(); //Поточна дата
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Поточна дата без часу
    const dob = new Date(personDate); //Дата народження
    const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //народження в теперішньому часі
    let age; //Вік

    //Вік = поточний рік - рік народження
    age = today.getFullYear() - dob.getFullYear();
    //Якщо день народження цього року, то віднімаєм 1 рік
    if (today < dobnow) {
      age = age - 1;
    }

    return age;
  }

  appealToPerson(gender, doctor) {
    if (doctor) {
      return "Dr.";
    } else if (gender === "Female") {
      return "Ms.";
    } else {
      return "Mr.";
    }
  }

  open() {
    this.removeAllChild(this.parent);
    this.render();
    this.parent.firstChild.classList.add("room-active");
    const closeButton = document.querySelector(".close-button");
    closeButton.style.display = "block";
  }

  removeAllChild(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
}

export { Room };
