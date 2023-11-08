let issues = [];

const issueForm = document.getElementById('issue-form');
const issueList = document.getElementById('issue-list');

issueForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const priority = document.getElementById('priority').value;

  const issue = {
    title,
    description,
    priority,
  };

  issues.push(issue);
  issueForm.reset();
  renderIssues();
});

function renderIssues() {
  issueList.innerHTML = '';

  issues.forEach((issue, index) => {
    const issueItem = document.createElement('div');
    issueItem.classList.add('issue-item');
    issueItem.innerHTML = `
      <h3>${issue.title}</h3>
      <p>${issue.description}</p>
      <p>Priority: ${issue.priority}</p>
    `;

    issueList.appendChild(issueItem);
  });
}
