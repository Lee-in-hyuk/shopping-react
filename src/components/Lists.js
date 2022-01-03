import List from "./List";
export default function Lists({itemLists}){
    return(
        <ul className="items">
            {itemLists.map(item=>(
                <List item={item} key={item.id}/>
            ))}
        </ul>
    );
}