const app = "https://raw.githubusercontent.com/Rafisto/postsdata/main";
const url = (part: String) => {
    return app + part;
}

class Data {
    static fetchArticles = url("/projects/articles/__list__.json");
    static fetchArticle = url("/projects/articles/");
    static fetchArticleContentImage = url("/projects/articles/images/");
    static fetchAccopmlishments = url("/general/accomplishments");
    static fetchAvailability = url("/general/availability.json");
    static gitlabCodebaseTree = "https://gitlab.com/api/v4/projects/51249390/repository/tree?recursive=1";
    static gitlabRef = "?ref=main";
    static gitlabCodebaseFile = "https://gitlab.com/api/v4/projects/51249390/repository/files/";
}

export default Data