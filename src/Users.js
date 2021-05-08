import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

function Users() {

    // const user = [
    //     { name: "Jihad", age: 18, address: "abcd road" },
    //     { name: "Rohid", age: 21 },
    //     { name: "Jannat", age: 32 },
    //     { name: "Suji", age: 30 },
    //     { name: "Jesmin", age: 40 },
    //     { name: "Peter", age: 55 }
    // ]

    const [user, setUser] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/").then((data) =>{
            data.json().then(result => {
                console.log("result", result);
                setUser(result)
            })
        })
    }, [])

    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // user.map((item, i) =>
                        //     <tr key={i}>
                        //         <td>{i}</td>
                        //         <td>{item.name}</td>
                        //         <td>{item.age}</td>
                        //         <td>{item.address}</td>
                        //     </tr>
                        // )

                        user.map((item, index) =>
                            <tr key={index}>
                                <td>{item.userId}</td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.completed ? "Yes" : "No"}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </>
    )
}

export default Users;