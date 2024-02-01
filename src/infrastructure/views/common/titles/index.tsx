import { TitlesProps } from "../../../../domain/models/common"

export default function Titles({ kind, title, className }: TitlesProps) {
    const detectTypeOfTitle = (kind: string) => {
        if (kind === "h1") {
            return <h1 className={className}>{title}</h1>
        }
        if (kind === "h2") {
            return <h2 className={className}>{title}</h2>
        }
        if (kind === "h3") {
            return <h3 className={className}>{title}</h3>
        }
        if (kind === "h4") {
            return <h4 className={className}>{title}</h4>
        }
        if (kind === "h5") {
            return <h5 className={className}>{title}</h5>
        }
        if (kind === "h6") {
            return <h6 className={className}>{title}</h6>
        }
        return <h1 className={className}>{title}</h1>
    }
    return detectTypeOfTitle(kind)
}