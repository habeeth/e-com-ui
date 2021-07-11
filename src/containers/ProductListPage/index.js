import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsBySlug } from '../../actions';
import Layout from '../../components/Layout.js';
import { generateImgURI } from '../../uriConfig';
import './style.css';

/**
* @author
* @function ProductListPage
**/

const ProductListPage = (props) => {

    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    const [priceRange, setPriceRange] = useState({
        under5k: '5000',
        under10k: '10000',
        under15k: '15000',
        under20k: '20000',
        under30k: '25000',
    });
    console.log('productlistingpage', product);

    useEffect(() => {
        console.log('productlistpage', 'props', props);
        const slug = props.match.params.slug;
        dispatch(getProductsBySlug(slug));
    }, []);

    return (
        <Layout>
            {
                Object.keys(product.productsByPrice).map((key, index) => {
                    return (
                        <div className='card'>
                            <div className='cardHeader'>
                                <div>{props.match.params.slug} mobiles under {priceRange[key]}</div>
                                <button>View All</button>
                            </div>
                            <div style={{ display: 'flex' }}>
                                {
                                    product.productsByPrice[key].map(prod =>
                                        < div className='productContainer'>
                                            <div className='productImgContainer'>
                                                <img alt="" src={generateImgURI(prod.productPictures[0].img)}></img>
                                            </div>
                                            <div className='productInfo'>
                                                <div style={{ margin: '5px 0' }}>{prod.name}</div>
                                                <div>
                                                    <span>4.3</span>&nbsp;
                                                        <span>(345)</span>
                                                </div>
                                                <div className='productPrice'><span>₹</span>{prod.price}</div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    )
                })
            }

            {/* <div className='card'>
                <div className='cardHeader'>
                    <div>Samsung mobiles under 10k</div>
                    <button>View All</button>
                </div>
                <div>
                    <div className='productContainer'>
                        <div className='productImgContainer'>
                            <img alt="" src="http://localhost:3000/public/SAMSUNG-Galaxy-A72-(Awesome-Blue-128-GB)-(8-GB-RAM)-jDMntiMDy-galaxy-a72-1.jpeg"></img>
                        </div>
                        <div className='productInfo'>
                            <div style={{ margin: '5px 0' }}>Samsung Mobile</div>
                            <div>
                                <span>4.3</span>&nbsp;
                                <span>(345)</span>
                            </div>
                            <div className='productPrice'><span>₹</span>1500</div>
                        </div>
                    </div>
                </div>
            </div> */}
        </Layout >
    )

}

export default ProductListPage;