export default function RewardsModel(props) {
    return(
        <>
            <a rel="noreferrer" target="_blank" href={props.href} title={props.title}>
                <h4>{props.name}</h4>
            </a>
        </>
    )
}