import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Nav({ categories }) {
    // 遷移先パス: カテゴリIDが1の場合は /all, それ以外は /category/<categoryId>
    const to = category => (
        category.id === '1' ? '/all' : `/category/${category.id}`
    );
    const links = categories.map(category => {
        const key = `nav-item-${category.id}`
        return (
            <li key={key}>
                <Link to={to(category)}>{category.name}</Link>
            </li>
        )
    });

    return (
        <ul>
            {links}
        </ul>
    )
}

Nav.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired
};