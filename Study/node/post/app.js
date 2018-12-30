var PostStatus;
(function (PostStatus) {
    PostStatus[PostStatus["Unpublished"] = 0] = "Unpublished";
    PostStatus[PostStatus["Published"] = 1] = "Published";
    PostStatus[PostStatus["Draft"] = 2] = "Draft";
})(PostStatus || (PostStatus = {}));
var post = {
    title: '过五关斩六将，去了鹅厂',
    status: PostStatus.Draft,
    content: '春招以来，我的面试时这么般这么般一个过程'
};
console.log(post);
console.log(PostStatus[0]);
