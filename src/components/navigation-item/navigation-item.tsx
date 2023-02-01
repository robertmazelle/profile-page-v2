import React from "react"
import { Link } from "react-router-dom";
import NavigationModel from "../../models/navigation";
import { classNames } from '../../utils/class-names';

export default function NavigationItem(props: NavigationModel) {
    const { title, href, current } = props;

    return <Link
        to={href}
        key={title}
        className={classNames(current ? 'border-b-2 border-gray-800' : 'text-gray-400 hover:border-b-2 pb-0', 'block px-3 py-2 text-base font-medium pb-2')}
        aria-current={current ? 'page' : undefined}>
        {title}
    </Link>
} 