import { useEffect, useState } from "react";
import { AllArticle, getCategories } from "../Services/ServiceApi";
import { useShoppingCart } from 'use-shopping-cart';

function Shop() {
    const [articles, setArticles] = useState([]);
    const { addItem } = useShoppingCart();
    const ImgUrl = "http://127.0.0.1:8000/img/"

    const [categories, setCategories] = useState([]);
    const GetCategories = async () => {
        try {
            const res = await getCategories()
            setCategories(res.data);
            console.log(res)
            console.log(res.data)
        } catch (error) {
            console.log(error);
        }
    };
    const GetAllArticle = async () => {
        try {
            const res = await AllArticle()
            setArticles(res.data);
            console.log(res)
            console.log(res.data)
        } catch (error) {
            console.log(error);
        }
    };

    const addToCart = (product) => {
        const target = {
            id: product.id,
            nom: product.nom,
            logo: product.logo,
            description: product.description,
            prix: product.prix,
            id_categorie: product.id_categorie,
            quantity: 1
        };
        addItem(target);
        console.log('Item added to cart:', target);
    };


    useEffect(() => {
        GetAllArticle()
        GetCategories();

    }, []);

    return (
        <div>

            <div className="untree_co-section product-section before-footer-section">
                <div className="container">
                    <div className="row">
                        {articles != undefined && articles.map((article) =>

                            <div key={article?.id} className="col-12 col-md-4 col-lg-3 mb-5">
                                <a className="product-item"  >
                                    {article?.logo ? (
                                        <img className="img-fluid product-thumbnail"
                                            src={`${ImgUrl}${article.logo}`} alt="Logo"
                                        />
                                    ) : (
                                        <img className="img-fluid product-thumbnail" src="src/assets/images/product-3.png" alt="" />
                                    )}

                                    <h3 className="product-title">
                                        {article?.nom}
                                    </h3>
                                    <p>
                                        {article?.description}
                                    </p>
                                    <strong className="product-price">
                                        {article?.prix} DT
                                    </strong>

                                    <span className="icon-cross" onClick={() => addToCart(article)} >
                                        <img src="src/assets/images/cross.svg" className="img-fluid" />
                                    </span>
                                </a>
                            </div>
                        )}


                    </div>
                </div>
            </div>
            <div className="why-choose-section">
                <div className="container">


                    <div className="row my-5">
                        {categories != undefined && categories.map((categorie) =>

                            <div key={categorie?.id} className="col-6 col-md-6 col-lg-3 mb-4">
                                <div className="feature">
                                    <div className="icon">
                                        {categorie?.logo ? (
                                            <img
                                                src={`${ImgUrl}${categorie.logo}`} alt="Logo" className="imf-fluid"
                                            />
                                        ) : (
                                            <img src="src/assets/images/bag.svg" alt="" className="imf-fluid" />
                                        )}
                                    </div>
                                    <h3>
                                        {categorie?.nom}
                                    </h3>
                                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
