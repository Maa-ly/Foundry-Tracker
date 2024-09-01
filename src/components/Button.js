// src/components/Button.js
import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

export default function Button({ children, onClick, type = 'button', variant = 'primary', className, ...props }) {
    const baseStyles = 'px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2'

    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
        success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={clsx(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger']),
    className: PropTypes.string,
}
