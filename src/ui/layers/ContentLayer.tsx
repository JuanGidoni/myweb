import React from 'react'

interface Props {
    children: React.ReactNode
    className?: string
    type: 'section' | 'article' | 'div' | 'main'
}

const ContentLayer = ({
    children,
    className,
    type
}: Props
) => {
    if (type === 'section') return (
        <section className={className}>{children}</section>
    )
    if (type === 'article') return (
        <article className={className}>{children}</article>
    )
    if (type === 'main') return (
        <main className={className}>{children}</main>
    )
    return (
        <div className={className}>{children}</div>
    )
}
export default ContentLayer