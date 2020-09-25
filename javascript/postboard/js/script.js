// global variables

var userPosts = [];
var parrentElement = document.getElementById("posts-section");

// post buleprint
class CustomPost {
  // html components requried to create post element
  postDivision = document.createElement("div");
  postHeadDivision = document.createElement("div");
  postBodyDivision = document.createElement("div");
  commentDivision = document.createElement("div");
  likeDivision = document.createElement("div");
  likeImage = document.createElement("img");
  commentImage = document.createElement("img");
  likeCount = document.createElement("p");

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
    this.commentDivision.className = "comment";
    this.likeImage.src = "assets/like.png";
    this.commentImage.src = "assets/comment.png";

    // post head attributes
    this.postHeadDivision.className = "post-head";
    this.postHeadDivision.appendChild(
      document.createTextNode(this.postContent)
    );

    // post body attributes
    this.likeCount.innerHTML = this.likes;
    this.likeCount.className = "number";
    this.postBodyDivision.className = "post-body";
    this.postBodyDivision.appendChild(this.likeDivision);
    this.postBodyDivision.appendChild(this.commentDivision);
    this.likeDivision.appendChild(this.likeCount);
    this.likeDivision.appendChild(this.likeImage);
    this.commentDivision.appendChild(this.commentImage);

    // post
    this.postDivision.className = "post";
    this.postDivision.appendChild(this.postHeadDivision);
    this.postDivision.appendChild(this.postBodyDivision);

    // parent element
    parrentElement.append(this.postDivision);
  }

  postEvenListener() {
    // likes
    var likeElement = this.postDivision.getElementsByClassName("like");
    var likeImgTages = likeElement[0].getElementsByTagName("img");
    likeImgTages[0].addEventListener("click", () => {
      var likeCounter = this.postDivision.getElementsByClassName("number");
      var number = parseInt(likeCounter[0].innerHTML);
      number += 1;
      likeCounter[0].innerHTML = number;
    });
    // comment
    var commentElement = this.postDivision.getElementsByClassName("comment");
    var commentImgTages = commentElement[0].getElementsByTagName("img");
    commentImgTages[0].addEventListener("click", () => {
      console.log("commenting");
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
