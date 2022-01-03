export default function List({item}){
    // console.log(item);
    return(
        <li className="item">
            <img src={item.image} alt="tshirt" className="item_thumbnail"/>
            <span>{item.gender}</span>
            <span>{item.size}</span>
            <span>{item.color}</span>
        </li>
    );
}