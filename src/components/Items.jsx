import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import data from "../data/itemData";

function Items() {
  return (
    <div className={styles.wrapper} >

    
    {data.map((elem,i)=>{
      return(
        <>
      <ItemCard  key={elem.id} id={elem.id} name={elem.name} price={elem.price} />
        </>
   
      )
    })}
      </div>

  );
}

export default Items;
