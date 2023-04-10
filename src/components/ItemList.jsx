import Item from "./Item";
import Stack from 'react-bootstrap/Stack';

const ItemList = ({ bass }) => {


  return (
    <>
      <Stack direction="horizontal" gap={2}>
        {bass?.map((bass) => (
          <Item
            key={bass.id}
            id={bass.id}
            name={bass.name}
            description={bass.description}
            price={bass.price}
            stock={bass.stock}
            image={bass.image}
            category={bass.category}
          />
        ))}
      </Stack>
    </>
  );
}

export default ItemList
