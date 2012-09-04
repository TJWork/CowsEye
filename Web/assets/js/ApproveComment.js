// Generated by CoffeeScript 1.3.3
(function() {
  var args, calltype, contentArea, make, onFail, onSuccess, path;

  contentArea = $("#approveCommentContent");

  make = function(c) {
    var acceptButton, btnGroup, incident, outcome, postCalltype, postDone, postPath, rejectButton;
    incident = $("<ul class=\"thumbnails\">						<li class = \"span3\">							<div class=\"thumbnail\">								<img src=\"" + c.thumbnail_url + "\" alt=\"\">							</div>						</li>						<li class = \"span5\">							<div class = \"caption\">								<h2>Description</h2>								<p>" + c.description + "</p>							</div>						</li>						<li class = \"span4\">							<div class = \"caption\">								<h2>Comment</h2>								<p>" + c.comment + "</p>							</div>						</li>						<li class=\"span12\"> 							<div class=\"btn-group\" id =\"btns\"> 							</div>						</li>					</ul>				</div>");
    outcome = "reject";
    acceptButton = $("<a href=\"#\" class=\"btn btn-success btn-long\"><i class=\"icon-ok icon-white\"></i> Accept</a>");
    rejectButton = $("<a href=\"#\" class=\"btn btn-danger btn-long\"><i class=\"icon-remove icon-white\"></i> Reject</a>");
    btnGroup = incident.find("#btns");
    btnGroup.append(acceptButton);
    btnGroup.append(rejectButton);
    contentArea.append(incident);
    postPath = "assess_incident_stub";
    postCalltype = "POST";
    postDone = function(data) {
      return incident.animate({
        height: 0,
        opacity: 0.25
      }, function() {
        return incident.remove();
      });
    };
    acceptButton.click(function() {
      return Window.RWCall(postDone, postDone, {}, postPath, "/id=" + c.incident_id + "/comment_id=" + c.comment_id + "/status=accepted}", postCalltype);
    });
    return rejectButton.click(function() {
      return Window.RWCall(postDone, postDone, {}, postPath, "/id=" + c.incident_id + "/comment_id=" + c.comment_id + "/status=rejected}", postCalltype);
    });
  };

  onFail = function(data) {
    return console.log("Rest Call has failed");
  };

  path = "unapproved_comments";

  args = "/start=" + 0 + "/range=24";

  calltype = "GET";

  onSuccess = function(data) {
    var c, _i, _len, _ref, _results;
    _ref = data["comments"];
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      c = _ref[_i];
      _results.push(make(c));
    }
    return _results;
  };

  Window.RWCall(onSuccess, onFail, {}, path, args, calltype);

}).call(this);