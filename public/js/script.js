document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("token"); // clear token
  window.location.href = "login.html"; // back to login
});

// Placeholder: later fetch backend files
const fileTableBody = document.getElementById("fileTableBody");
fileTableBody.innerHTML = `
  <tr>
    <td>example.png</td>
    <td>image/png</td>
    <td>120</td>
    <td>
      <button class="download-btn">Download</button>
      <button class="delete-btn">Delete</button>
    </td>
  </tr>
`;
