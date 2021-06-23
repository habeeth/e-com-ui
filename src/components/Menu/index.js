import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../actions/category.action';
import './style.css';

/**
* @author
* @function Menu
**/


const Menu = (props) => {
    const dispatch = useDispatch();
    const category = useSelector(state => state.category);

    useEffect(() => {
        dispatch(getAllCategories());
    }, [])

    const renderCategories = (categories) => {
        let myCats = [];
        // console.log("typeof categories", typeof categories);
        for (let cat of categories) {
            myCats.push(
                <li key={cat.name}>
                    {
                        cat.parentId ? <a href={cat.slug}>{cat.name}</a> : <span>{cat.name}</span>
                    }

                    {cat.children.length > 0 ? (<ul> {renderCategories(cat.children)}</ul>) : null}
                </li >
            )
        }
        return myCats;
    }
    return (
        <div className='menuHeader'>
            <ul>
                {category.categories.length > 0 ? renderCategories(category.categories) : null}
            </ul>
        </div>
    )

}

export default Menu;