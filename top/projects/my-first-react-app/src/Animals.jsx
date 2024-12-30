function ListItem(props){
    return <li>{props.animals}</li>
    //esto imprime la lista de una? no me acuerdo como lo recorria
}

function List(props){
    return (
        <ul>
            {props.animals.map((animal)=>{
                return <ListItem key={animal} animal={animal}/>
            })}
        </ul>
    )
}