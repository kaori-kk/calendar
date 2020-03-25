const day = document.querySelector("#app-calendar")
const name = document.querySelector("#app-calendar")

for (let count = 1; count <= 31; count++) {
    day.insertAdjacentHTML("beforeend", `<div class="day">
${count}</div>`);
};

const eachDay = document.querySelectorAll("#app-calendar .day")
eachDay.forEach(item => {
    item.addEventListener("click", event => {
    item.classList.toggle("selected");
    });

    const weekend = [6,7,13,14,20,21,27,28]
    weekend.forEach(weekend => {
        if (item.innerHTML == weekend){
            item.classList.add("weekend")
        }
    })

    const date = new Date(Date.UTC(2018, 0, Number.parseInt(item.innerHTML, 10)));
    const options = { weekday: "long" };
    const weekname = new Intl.DateTimeFormat("en-US", options).format(date);
    if (item.innerText >= 1 && item.innerText <= 7) {
        item.insertAdjacentHTML("afterbegin", `<h3 class="name">${weekname}</h3>`);
      }
})
