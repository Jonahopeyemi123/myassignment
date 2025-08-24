const form = document.getElementById('requestForm');
const issueList = document.getElementById('issueList');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const category = document.getElementById('category').value;
  const description = document.getElementById('description').value;

  const issueCard = document.createElement('div');
  issueCard.classList.add('issue-card');
  issueCard.innerHTML = `
    <h4>${category} Issue</h4>
    <p><strong>Reported by:</strong> ${name} (${email})</p>
    <p><strong>Description:</strong> ${description}</p>
    <p class="status">Status: Pending</p>
  `;

  if (issueList.querySelector('p')) {
    issueList.innerHTML = '';
  }

  issueList.appendChild(issueCard);

  form.reset();
});

// Contact form dummy function
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you for contacting us! We'll get back to you shortly.");
  this.reset();
});
