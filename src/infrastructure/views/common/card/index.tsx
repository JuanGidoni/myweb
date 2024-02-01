import { CardProps } from '../../../../domain/models/common'


export default function Card({ children, className }: CardProps) {
    return (
        <div className={`card ${className}`}>{children}</div>
    )
}