function renderTask() { 
    document.querySelector(".btn").addEventListener("click", () => { 
        fetch("https://apis.scrimba.com/bored/api/activity") 
            .then(response => response.json()) 
            .then(data => { 
                document.querySelector(".random-task").innerHTML = ` 
                    <p>${data.activity}</p>
                `
            }) 
             .catch(error => console.error(error));
    })
} 

renderTask() 
