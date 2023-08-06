import {Theme} from "./Theme";

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: string
    Fmin?: number
    Fmax?: number
}
export const font = ({family, weight, color, lineHeight, Fmin,  Fmax}: FontPropsType) => `
font-family: ${family || "Poppins"};
font-weight: ${weight || 400};
color: ${color || Theme.colors.textColor};
line-height: ${lineHeight || 1.2};
font-size: calc( (100vh - 360px) / (1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);


`