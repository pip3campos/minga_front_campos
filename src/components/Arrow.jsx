export default function Arrow ( props ) {
    return (
        <img className={`absolute ${props.direccion}`} onClick={props.onClick} src="./images/circlearrow.svg" alt="" />
    )
}