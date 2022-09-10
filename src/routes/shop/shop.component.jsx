import './shop.styles.scss';
import { CategoriesContext } from '../../contexts/categories.context';
import { useContext } from 'react';
import ProductCard from '../../components/product-card/product-card.component';

const Shop = () => {
    const categoriesMap = useContext(CategoriesContext);
    console.log(categoriesMap);
    console.log(Object.keys(categoriesMap));

    return (
        <>
            {
                Object.keys(categoriesMap).map(title => (
                    <>
                        <h2>{title.toUpperCase()}</h2>
                        <div className="products-container">
                            {
                                categoriesMap[title].map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))
                            }
                        </div>
                    </>
                ))
            }
        </>
    );
}

export default Shop;