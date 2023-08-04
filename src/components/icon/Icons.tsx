import IconsSprite from '../../assets/img/iconsSprite.svg'
import styled from "styled-components";

type IconsPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}
export const Icons = (props: IconsPropsType) => {
    return (
        <StyledIcons width={props.width || "80"} height={props.height || "80"} viewBox={props.viewBox || "0 0 120 120"}
                     fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${IconsSprite}#${props.iconId}`}/>
        </StyledIcons>
    )
}

const StyledIcons = styled.svg`
  &:hover {
    transform: scale(1.2);

  }
`