import axios from "../api/axios";


export const GetParams = async () => {
    return await axios.get("parameter");
}

export const AddUser = async (user) => {
    return await axios.post("inscrit_client", user);
}

export const getCategories = async () => {
    return await axios.get("tout_categorie");
}

export const ArticleByCategory = async (catId) => {
    return await axios.get("article_par_categorie/" + catId);
}
export const AllArticle = async () => {
    return await axios.get("tout_article");
}

export const PasserCommende = async (userID) => {
    return await axios.post("passer_commende", userID);
}

export const LignieCommende = async (Lcomm) => {
    return await axios.post("lignie_commende", Lcomm);
}
