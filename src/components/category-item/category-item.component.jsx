import './category-item.styles.scss';
import { useNavigate } from 'react-router-dom';

const CategoryItem = ({ category: {imageUrl, type, route} }) => {
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <div className='category-item-container'>
            <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className='category-body-container'>
                <h2 onClick={onNavigateHandler}>{type}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
};

export default CategoryItem;