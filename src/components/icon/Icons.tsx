import IconsSprite from '../../assets/img/iconsSprite.svg'

type IconsPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}
export const Icons = (props: IconsPropsType) => {
    return (
        <svg width={props.width || "80"} height={props.height || "80"} viewBox={props.viewBox || "0 0 120 120"}
             fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${IconsSprite}#${props.iconId}`}/>
        </svg>
    )
}