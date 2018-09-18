function fetchIssues() {
  // Retrieve the issues from Local Storage
  // Parse the result string into a JSON object
  var issues = JSON.parse(localStorage.getItem('issues'));
  var issuesList = document.getElementById('issuesList');

  // Access the html content of the issuesList element
  issuesList.innerHTML = '';

  for (var i=0; i < issues.length; i++){
    var id = issues[i].id;
    var desc = issues[i].description;
    var severity = issues[i].severity;
    var assignedTo = issues[i].assignedTo;
    var status = issues[i].status;

// Change the content
    issuesList.innerHTML += '<div class="well">' +
                            '<h6>Issue ID: ' + id + '</h6>' +
                            '<p><span class="label label-info">'+
                            status + '</span></p>' +
                            '<h3>' + desc + '</h3>' +
                            '<p><span class="glyphicon glyphicon-time"></span> '
                            + severity + ' ' +
                            '<span class="glyphicon glyphicon-user"></span> '
                            + assignedTo + '</p>' +
                            '<a href="#" class="btn btn-warning" onclick="setStatusClosed(\''+id+'\')">Close</a> ' +
                            '<a href="#" class="btn btn-danger" onclick="deleteIssue(\''+id+'\')">Delete</a>'+
                            '</div>';

  }
}
// Attach an event handler to the submit event of the form
// On submit event attach a function saveIssue
document.getElementById('issueInputForm').addEventListener('submit', saveIssue);

// Save issue after submitting the form
function saveIssue(e) {
  //store the input values from the form
  var issueId = chance.guid();
  var issueDesc = document.getElementById('issueDescInput').value;
  var issueSeverity = document.getElementById('issueSeverityInput').value;
  var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
  var issueStatus = 'Open';

// Create an issue object
  var issue = {
    id: issueId,
    description: issueDesc,
    severity: issueSeverity,
    assignedTo: issueAssignedTo,
    status: issueStatus
  }

// Check if there is already an object in the local storage
// Insert the new issue int the issues object
  if(localStorage.getItem('issues') === null) {
    var issues = []; //create an issues array
    issues.push(issue); //insert the new object
    localStorage.setItem('issues', JSON.stringify(issues));
  } else {
    var issues = JSON.parse(localStorage.getItem('issues'));
    issues.push(issue);
    // Update the local storage
    localStorage.setItem('issues', JSON.stringify(issues));
  }

// Empty the form
document.getElementById('issueInputForm').reset();

// Call again the fetchIssues function to regenerated the list output
  fetchIssues();
  // Avoid the default submission of the form
  e.preventDefault();
}

// Change the status of the issue to Closed after clicking the button
// Pass the id of the current issue as parameter
function setStatusClosed (id) {
  var issues = JSON.parse(localStorage.getItem('issues'));

  for (var i = 0; i < issues.length; i++) {
    if (issues[i].id == id){
      issues[id].status = "Closed";
    }
  }
  localStorage.setItem('issues', JSON.stringify(issues));
  fetchIssues();
}

// Delete an issue
function deleteIssue (id) {
  var issue = JSON.parse(localStorage.getItem('issues'));

  for (var i = 0; i < issues.length; i++) {
    if (issues[id].id == id){
      issues.splice(i, 1); // Delete the current item from the issue array
    }
  }
  localStorage.setItem('issues', JSON.stringify(issues));
  fetchIssues();
}
