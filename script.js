function appendListItem(value) {
    var ul = document.getElementById("list")
    var li = document.createElement("li")
    li.appendChild(document.createTextNode(value))
    ul.appendChild(li)
}

var data = JSON.parse(document.getElementById("data").innerHTML);
var days = []

for (var idx in data) {
    m = eval(data[idx].moment)
    if (moment().date() === m.date() && moment().month() === m.month()) {
        days.push(data[idx])
    }
}

if (days.length === 0) {
    appendListItem(moment().format("dddd"))
} else {
    for (var day in days) {
        appendListItem(days[day].name)
    }
}