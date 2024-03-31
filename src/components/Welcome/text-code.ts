export const textCode = `import React, { useState } from 'react';

interface Item {
    id: number;
    name: string;
}

const ListaItens: React.FC = () => {
    const [items, setItems] = useState<Item[]>([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
    ]);

    const addItem = () => {
        const novoItem: Item = {
            id: items.length + 1,
            name: \`New Item \${items.length + 1}\`
        };
        setItems([...items, novoItem]);
    };

    return (
        <div>
            <h2>List of items</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <button onClick={addItem}>Add item</button>
        </div>
    );
};

export default ListaItens;
`