import Item from "./Item";
import Stack from 'react-bootstrap/Stack';

const ItemList = ({ basses }) => {
  return (

    <Stack direction="horizontal" gap={2}>
      {basses.map((bass) => (
        <Item
          key={bass.id}
          id={bass.id}
          title={bass.title}
          description={bass.description}
          precio={bass.precio}
          stock={bass.stock}
          thumbnailUrl={bass.thumbnailUrl}
          category={bass.category}
        />
      ))}
    </Stack>
  );
}

export default ItemList
