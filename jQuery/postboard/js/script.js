$(function () {
  // few initial changes
  $("#add-post-popup").hide();
  $("#post-head-empty-error").css("visibility", "hidden");

  // Main working
  $("#add-post").click(function () {
    $("#add-post-popup").toggle();
  });
  $("#cancle").click(function () {
    $("#add-post-popup").hide();
    $("#post-head-empty-error").css("visibility", "hidden");
    $("#add-post-popup-text")[0].value = "";
  });
  $("#post").click(function () {
    var userInput = $("#add-post-popup-text")[0];
    if (userInput.value == "") {
      $("#post-head-empty-error").css("visibility", "visible");
    } else {
      $("#post-head-empty-error").css("visibility", "hidden");
      new Post(userInput.value);
      userInput.value = "";
      $("#add-post-popup").hide();
    }
  });
});

class Post {
  constructor(userInput) {
    this.id = this.generateID();
    this.userInput = userInput;
    this.likeCount = 0;
    this.comments = [];
    this.createHtmlElement();
    this.postEventListner(this.id);

    // few initial changes
    $("#" + this.id + " .user-comments").hide();
  }

  postEventListner(id) {
    $("#" + id + " .comment").click(function () {
      $("#" + id + " .user-comments").slideToggle(350);
    });
    $("#" + id + " .like").click(function () {
      var current = $("#" + id + " .number").text();
      $("#" + id + " .number").text(++current);
    });
    $("#" + id + " .post-comments").click(function () {
      var userComment = $("#" + id + " .comment-text")[0];
      if (userComment.value != "") {
        $("#" + id + " .comments-section").append(
          `<div class="post">
            <div class="post-head">` +
            userComment.value +
            `</div>
          </div>
          `
        );
        userComment.value = "";
      }
    });
  }

  createHtmlElement() {
    var postHTML =
      `<div class="post" id="` +
      this.id +
      `">
        <div class="post-head">` +
      this.userInput +
      `</div>
        <div class="post-body">
          <div class="like">
            <p class="number">` +
      this.likeCount +
      `</p>
            <img src="assets/like.png">
          </div>
          <div class="comment">
            <img src="assets/comment.png">
          </div>
        </div>
        <div class="user-comments">
          <div class="comments-section"></div>
          <div class="comments-input">
            <input type="text" placeholder="Comments" class="comment-text">
            <div class="post-comments zoom-element">Post Comment</div>
          </div>
         </div> 
    </div>`;

    $("#posts-section").append(postHTML);
  }

  generateID() {
    return $(".post").length;
  }
}
