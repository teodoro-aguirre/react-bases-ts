interface Person {
    firstName: string;
    lastName: string;
    age: number;

    address: Address;
    isAlive?: boolean; // El simbolo ? permite que sea opcional
}

interface Address {
    country: string;
    houseNo: number;
}

export const ObjectLiterals = () => {

    const person: Person = {
        age: 22,
        firstName: "Teodoro",
        lastName: "Rodriguez",
        address: {
            country: 'México',
            houseNo: 615
        }
    }

    return (
        <>
            <h3>Objetos Literales</h3>
            <pre>
                { JSON.stringify(person, null, 2) }
            </pre>
        </>
    )
}
