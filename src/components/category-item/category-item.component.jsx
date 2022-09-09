import './category-item.styles.scss';

const CategoryItem = ({ category: {imageUrl, type} }) => {
    return (
        <div className='category-container'>
            <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className='category-body-container'>
                <h2>{type}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
};

export default CategoryItem;