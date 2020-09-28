// global variables
var userPosts = [];
var parrentElement = document.getElementById("posts-section");

// post buleprint
class CustomPost {
  // html components requried to create post element
  postDivision = document.createElement("div");
  postHeadDivision = document.createElement("div");
  postBodyDivision = document.createElement("div");
  likeDivision = document.createElement("div");
  likeImage = document.createElement("img");
  likeCount = document.createElement("p");
  commentSection = document.createElement("div");
  commentInput = document.createElement("div");
  postComment = document.createElement("div");
  commentText = document.createElement("input");

  constructor(postContent) {
    this.postContent = postContent;
    this.comments = [];
    this.likes = 0;
    this.createHtmlElement();
    this.postEvenListener();
  }

  createHtmlElement() {
    // adding image attributes
    this.likeDivision.className = "like";
    this.likeImage.src = "assets/like.png";

    // post head attributes
    this.postHeadDivision.className = "post-head";
    this.postHeadDivision.appendChild(
      document.createTextNode(this.postContent)
    );

    // post like
    this.likeCount.innerHTML = this.likes;
    this.likeCount.className = "number";
    this.postBodyDivision.className = "post-body";
    this.postBodyDivision.appendChild(this.likeDivision);
    this.likeDivision.appendChild(this.likeCount);
    this.likeDivision.appendChild(this.likeImage);

    this.postDivision.className = "post";
    this.postDivision.appendChild(this.postHeadDivision);
    this.postDivision.appendChild(this.postBodyDivision);

    // post comments attributes
    this.commentText.type = "text";
    this.commentText.placeholder = "Comments";
    this.commentText.classList = ["comment-text"];
    this.postComment.classList = ["post-comments zoom-element"];
    this.postComment.innerHTML = "Post Comment";
    this.commentInput.classList = ["comments-input"];

    // comment section
    this.commentSection.classList = ["comments-section"];
    this.postDivision.appendChild(this.commentSection);

    // comment input
    this.commentInput.appendChild(this.commentText);
    this.commentInput.appendChild(this.postComment);
    this.postDivision.appendChild(this.commentInput);

    // parent element
    parrentElement.append(this.postDivision);
  }

  postEvenListener() {
    // elements
    var likeElement = this.postDivision.getElementsByClassName("like");
    var likeImgTages = likeElement[0].getElementsByTagName("img");
    var postCommentButton = this.postDivision.getElementsByClassName(
      "post-comments"
    );

    // likes
    likeImgTages[0].addEventListener("click", () => {
      var likeCounter = this.postDivision.getElementsByClassName("number");
      var number = parseInt(likeCounter[0].innerHTML);
      number += 1;
      likeCounter[0].innerHTML = number;
    });

    // comment
    postCommentButton[0].addEventListener("click", () => {
      var commentText = this.postDivision.getElementsByClassName(
        "comment-text"
      );
      if (commentText[0].value !== "") {
        // displaying comments
        var commentPostDiv = document.createElement("div");
        var commentHeadDiv = document.createElement("div");

        commentPostDiv.className = "post";
        commentHeadDiv.className = "post-head";
        commentHeadDiv.appendChild(
          document.createTextNode(commentText[0].value)
        );

        commentPostDiv.appendChild(commentHeadDiv);

        this.postDivision
          .getElementsByClassName("comments-section")[0]
          .appendChild(commentPostDiv);

        commentText[0].value = "";
        // this is a vim comment
      }
    });
  }
}

function eventListener() {
  var createpostPopup = document.getElementById("add-post-popup");

  // add post button
  document.getElementById("add-post").addEventListener("click", () => {
    toggelVisibility(createpostPopup);
  });

  // cancel button in the create post pop up
  document.getElementById("cancel").addEventListener("click", () => {
    toggelVisibility(createpostPopup);
    hide(document.getElementById("post-head-empty-error").classList);
    document.getElementById("add-post-popup-text").value = "";
  });

  // post button in the create post pop up
  document.getElementById("post").addEventListener("click", createPost);
}

function createPost() {
  var errorClassList = document.getElementById("post-head-empty-error")
    .classList;
  var textElement = document.getElementById("add-post-popup-text");
  var postHead = textElement.value;
  if (postHead === "") {
    show(errorClassList);
  } else {
    hide(errorClassList);
    hide(document.getElementById("add-post-popup").classList);
    var singlePost = new CustomPost(postHead);
    userPosts.push(singlePost);
    textElement.value = "";
  }
}

// util classes
function toggelVisibility(elementName) {
  var currentClasses = elementName.classList;
  if (currentClasses.contains("close")) {
    show(currentClasses);
  } else {
    hide(currentClasses);
  }
}

function show(eleClassList) {
  eleClassList.remove("close");
  eleClassList.add("open");
}
function hide(eleClassList) {
  eleClassList.remove("open");
  eleClassList.add("close");
}

eventListener();
