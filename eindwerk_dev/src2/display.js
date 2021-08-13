var articletest = document.getElementById('logs');

var counterDuration = 0;
var finalDuration = 0;
var activityArray = [];


//bij start opvragen van logs en categorieen
getCategories();
getActivities();


//Zin maken van activity 
function getActivities() {
    articletest.innerHTML = "";
    fetch('http://127.0.0.1:3000/api/activities/')
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                articletest.insertAdjacentHTML('beforeend', `<p>On ${element.date} I did ${element.activity} during ${element.duration} hours. I did this: ${element.description}(description).</p>`);
            });
            counterDuration = parseFloat(counterDuration) + parseFloat(document.getElementById('duration').value);
            console.log(counterDuration);
        });
}


//Post activities in html
//button om value te krijgen en printen
var button = document.getElementById('push');
button.addEventListener('click', function (e) {
    e.preventDefault();
    fetch('http://127.0.0.1:3000/api/activities/', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            date: new Date(),
            activity: document.getElementById('activity').value,
            duration: document.getElementById('duration').value,
            description: document.getElementById('description').value
        })
    })
    var activityValue = document.getElementById('activity').value;
    getActivities();
    checkCategoryName(activityValue);
})


//Checken met array welke categories al bestaan
function checkCategoryName(activityValue) {
    fetch('http://127.0.0.1:3000/api/category/')
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                activityArray.push(element.activitycategory);
            });
        });
    fetch('http://127.0.0.1:3000/api/category/')
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                if (activityArray.includes(activityValue)) { //als als bestaat duration toevoegen in category
                    finalDuration = parseFloat(counterDuration) + parseFloat(element.totalduration);
                    if (activityValue == element.activitycategory) {
                        patchDuration(element.uuid_);
                        counterDuration = 0;
                        finalDuration = 0;
                    }
                } else if (!activityArray.includes(activityValue)) { //niet bestaat toevoegen
                    postCategory();
                    activityArray.push(activityValue);
                }
            });
        });
}


//toevoegen in category table
function postCategory() {
    fetch('http://127.0.0.1:3000/api/category/', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            activitycategory: document.getElementById('activity').value,
            totalduration: document.getElementById('duration').value
        })

    })
};


//duration veranderen
function patchDuration(id) {
    fetch('http://127.0.0.1:3000/api/category/' + id, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: "PATCH",
        body: JSON.stringify({
            totalduration: finalDuration
        })
    })
};


var idcategory = document.getElementById("categoriesprint");
//printen van categorieen
function getCategories() {
    fetch('http://127.0.0.1:3000/api/category/')
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                idcategory.insertAdjacentHTML("beforeend",
                    `<h2>Activity category : ${element.activitycategory}</h2>
                     <h2>Total duration:  ${element.totalduration}</h2>
                     <br>`
                );
            });
        })
};