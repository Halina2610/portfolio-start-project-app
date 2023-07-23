import IconsSprite from '../../assets/img/iconsSprite.svg'

type IconsPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}
export const Icons = (props: IconsPropsType) => {
    return (
        <svg width={props.width || "50"} height={props.height || "50"} viewBox={props.viewBox || "0 0 20 20"}
             fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${IconsSprite}#${props.iconId}`}/>
        </svg>
    )
}