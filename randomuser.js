function loadUsers() {
    fetch('https://randomuser.me/api/?results=1')
        .then(res => res.json())
        .then(data => displayUser(data.results[0]))
}

loadUsers()

const displayUser = users => {
    console.log(users);
    const userContainer = document.getElementById("user-container")
    userContainer.innerHTML = `
    <img width="120" src="${users.picture.large}" class="mx-auto rounded-pill mt-3" alt="...">
    <div class="card-body text-center">
        <p style="color:#999">Hi, My name is</p>
        <h4 class="card-title">${users.name.title} ${users.name.first} ${users.name.last}</h4>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Email: ${users.email}</li>
        <li class="list-group-item">Age: ${users.dob.age}</li>
        <li class="list-group-item">Country: ${users.location.country}</li>
        <li class="list-group-item">Phone: ${users.phone}</li>
        <li class="list-group-item">Street: ${users.location.street.name}</li>
    </ul>
    `
}