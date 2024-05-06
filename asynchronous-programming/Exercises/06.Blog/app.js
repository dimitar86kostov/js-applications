async function attachEvents() {


    const btnLoad = document.getElementById("btnLoadPosts").addEventListener('click', handleUploadBtn);
    const btnView = document.getElementById("btnViewPost").addEventListener('click', handleViewBtn);
    const selectDropDown = document.getElementById("posts");
    const postTitleRef = document.getElementById("post-title");
    const postBodyRef = document.getElementById("post-body");
    const postCommentsRef = document.getElementById("post-comments");

    const postURL = "http://localhost:3030/jsonstore/blog/posts";
    const commentsURL = 'http://localhost:3030/jsonstore/blog/comments';

    const response = await fetch(postURL);
    const postData = await response.json();


    async function handleUploadBtn(ev) {

        const response = await fetch(postURL);
        const data = await response.json();
        let entries = Object.entries(data);



        for (const [key, post] of entries) {

            const option = document.createElement('option');
            option.textContent = post.title;

            option.value = key;
            selectDropDown.add(option);
        }

    }

    let postValues = Object.values(postData);


    async function handleViewBtn(e) {

        const response = await fetch(commentsURL);
        const commentsData = await response.json();
        let commEntries = Object.entries(commentsData);

        
        for (const currPost of postValues) {
            
            postTitleRef.textContent = '';
            postBodyRef.textContent = '';
            postCommentsRef.textContent = '';

            const header = document.createElement('h1');
            header.textContent = currPost.title;
            postTitleRef.appendChild(header);

            const body = document.createElement('p');
            body.textContent = currPost.body;
            postBodyRef.appendChild(body);

            for (const [key, comment] of commEntries) {

                if (currPost.id === comment.postId) {

                    const li = document.createElement('li');
                    li.id = comment.id;
                    li.textContent = comment.text;
                    postCommentsRef.appendChild(li);

                }
            }

        }
    }

}


attachEvents();