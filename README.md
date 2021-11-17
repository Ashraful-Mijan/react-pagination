# react-paginatin

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-sakdyd)

#calculation
posts = [];
currentPage = 1;
postsPerPage = 10;

// cal

indexOfLastPost(10) = currentPage(1) \* postsPerPage(10);
indexOfFirstPost(0) = indexOfLastPost(10) - postPerPage(10);
currentPosts = posts.slice(indexOfFirstPost(0), indexOfLastPost(10));
