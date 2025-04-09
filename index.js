document.getElementById("fileInput").addEventListener("change", function () {
    const file = this.files[0];
    const infoBox = document.getElementById("fileInfo");
    if (!file) {
    infoBox.innerHTML = "No file selected.";
    return;
    }
    const fileSize = (file.size / 1024).toFixed(2); // size in KB
    const lastModified = new Date(file.lastModified).toLocaleString();
    let fileDetails = `
    <p><strong>Name:</strong> ${file.name}</p>
    <p><strong>Type:</strong> ${file.type || 'Unknown'}</p>
    <p><strong>Size:</strong> ${fileSize} KB</p>
    <p><strong>Last Modified:</strong> ${lastModified}</p>
    `;
    if (file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = function (e) {
    fileDetails += `<p><strong>Preview:</strong></p><img src="${e.target.result}" width="200">`;
    infoBox.innerHTML = fileDetails;
    };
    reader.readAsDataURL(file);
    } else {
    infoBox.innerHTML = fileDetails;
    }
   });