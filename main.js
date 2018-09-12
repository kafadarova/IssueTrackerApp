function fetchIssues() {
  //retrieve the issues from Local Storage and than parse the result string into a JSON object
  var issues = JSON.parse(localStorage.getItem('issues'));
  var issuesList = document.getElementById('issuesList');

  //access the html content of the issuesList element
  issuesList.innerHTML = '';

  for (var i=0; i < issues.length; i++){
    var id = issues[i].id;
    var desc = issues[i].description;
    var severity = issues[i].severity;
    var assignedTo = issues[i].assignedTo;
    var status = issues[i].status;

//change the content
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
//attach an event handler to the submit event of the form
//on submit event attach a function saveIssue
document.getElementById('issueInputForm').addEventListener('submit', saveIssue);

function saveIssue(e) {
  var issueId = chance.guid();
}
//   if(localStorage.getItem('issues') === null) {
//     var issues = [];
//     issues.push(issue);
//     localStorage.setItem('issues', JSON.stringify(issues));
//   } else {
//     var issues = JSON.parse(localStorage.getItem('issues'));
//     issues.push(issue);
//     localStorage.setItem('issues', JSON.stringify(issues));
//   }
// }
//
// document.getElementById('issueInputForm').reset();
//
// fetchIssues();
// e.preventDefault();
// }
