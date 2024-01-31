export interface ButtonProps {
    /** Add css classes */
    className: string
    /** Call a function when a button is clicked */
    onClick: () => void
    /** Gets the classification and default behavior of the button */
    type: 'submit' | 'reset' | 'button'
    children: React.ReactNode
}
