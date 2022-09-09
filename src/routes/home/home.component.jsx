import Directory from '../../components/directory/directory.component';

const Home = () => {
    const categories = [
        // {
        //     id: 1,
        //     type: 'Shoes',
        //     imageUrl: 'https://www.tomwoodproject.com/wp-content/uploads/2021/10/QuickStyle_2560x1277px-2560x1277.png'
        // },
        {
            id: 1,
            type: 'Shoes',
            imageUrl: 'assets/quick_style_suleman.png'
        },
        {
            id: 2,
            type: 'Chappals',
            imageUrl: 'https://www.tomwoodproject.com/wp-content/uploads/2021/10/V4_QUICK_STYLE_10_0810_JPEG_4000px_72dpi-1275x1020.jpg'
        },
        {
            id: 3,
            type: 'Socks',
            imageUrl: 'https://www.tomwoodproject.com/wp-content/uploads/2021/10/QuickStyle_800x1003px-800x1003.png'
        },
        {
            id: 4,
            type: 'Track pants',
            imageUrl: 'https://www.tomwoodproject.com/wp-content/uploads/2021/10/V4_QUICK_STYLE_08_0633_hvitt_JPEG_4000px_72dpi_BW-850x1063.jpg'
        },
        // {
        //     id: 5,
        //     type: 'Funky Tees',
        //     imageUrl: 'https://www.fuchsiamagazine.com/wp-content/uploads/2022/06/Untitled-design-2022-06-13T145729.879.jpg'
        // },
        {
            id: 5,
            type: 'Ethnic',
            imageUrl: 'https://images.squarespace-cdn.com/content/v1/5707e3a1f85082fe4855cc5f/1652697295016-5IIX60YQBXZ80ETHS80L/V4_QUICK_STYLE_10_0785_JPG%2Bhires_300dpi.jpg'
        },
        // {
        //     id: 6,
        //     type: 'Earpods',
        //     imageUrl: 'https://d1fdloi71mui9q.cloudfront.net/l90r8bpZQOGxTNgjFvvx_qMaCDV2BexT4b3o1'
        // },

        {
            id: 6,
            type: 'Earpods',
            imageUrl: 'assets/quick_style_airthreads.jpg'
        },
        {
            id: 7,
            type: 'Socks',
            imageUrl: 'https://images.squarespace-cdn.com/content/v1/5707e3a1f85082fe4855cc5f/1485001647109-FHEP8A7GWBI9A1S65032/image-asset.jpeg?format=1000w'
        }
    ];

    return (
        <div className='home'>
            <Directory categories={categories} />
        </div>
    );
}

export default Home;

