function createCalendar(year, month) {
  const date = new Date(year, month - 1)
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let year_and_month = `${monthNames[date.getMonth()]} ${year}\n`
  document.getElementById("info").textContent = year_and_month
  let tableDays = document.getElementById("days")
  for (let i = 0; i < days.length; i++) {
    let td = document.createElement("td")
    td.textContent = days[i]
    tableDays.appendChild(td)
  }
  let firstDay = new Date(year, month - 1, 1).getDay()
  let numberOfDays = new Date(year, month, 0).getDate()
  let tableDates = document.getElementById("dates")
  for (let i = 0; i < firstDay; i++) {
    let td = document.createElement("td")
    tableDates.appendChild(td)
  }
 for (let i = 1; i <= noOfDays; i++) {
          let td =document.createElement("td");
          td.textContent=i;
          tr.appendChild(td);
          if ((i+firstDay)%7===0) {
            tableDates.appendChild(tr);
            tr=document.createElement("tr");
          }
        }

        if(tr.children.length>0){
          tr.parentNode.appendChild(tr);
        }
    }
}
let currentYear = new Date().getFullYear()
let currentMonth = new Date().getMonth() + 1
createCalendar(currentYear, currentMonth)
