import './Cart.css'

const Cart = (props) => {
    const {cart, time} = props;
    let newsTitle= [];

    let readingTime = 0;
    for( const item of time){
        readingTime = readingTime+ item;
    }

    for ( const news of cart){
        const title = news.title; 
        newsTitle = [...newsTitle, title];
    }
    


    return (
        <div className='cart-body'>
            <div className='time-reading'>Spent time on read: {readingTime} mins</div>
            <h3>Bookmarked Blogs: {newsTitle.length}</h3>
            <div>
            {
                newsTitle.map(item=><div className='cart-item-title'>{item}</div>)
            }
            </div>
        </div>
    );
};

export default Cart;