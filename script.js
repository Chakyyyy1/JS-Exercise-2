function generateFullName() {
    let first = document.getElementById("firstName").value.trim();
    let middle = document.getElementById("middleName").value.trim();
    let last = document.getElementById("lastName").value.trim();
    
    let fullName = `${first} ${middle} ${last}`.trim();
    
    document.getElementById("fullName").textContent = fullName || "Please enter a name!";
    
}
