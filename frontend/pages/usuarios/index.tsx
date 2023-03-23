import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DeleteIcon from '@mui/icons-material/Delete';
import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import { GridRenderCellParams, GridValueGetterParams } from "@mui/x-data-grid/models/params/gridCellParams";
import PaginatedTableComponent from "../../components/paginatedTable";
import { useEffect, useState } from "react";

async function getUsersData() {
    const res = await fetch('http://localhost:3001/taloTest/user/all');
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default function UsuariosComponent() {

    //todo: obtener data desde backend y mapear
    let [data, setData] = useState<any>({});
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getUsersData()
            //.then((res) => res.json())
            .then(usersData => {
                console.log('DTA: ', usersData)
                if ((usersData.users as []).length > 0) {
                    console.log('entra')
                    const newUsersData = usersData.users.map(user => {
                        return {
                            id: user.userId,
                            name: user.name,
                            lastName: user.lastName,
                            email: user.email,
                            role: user.role
                        }
                    });

                    console.log('maped:',newUsersData)

                    setData(newUsersData);
                }
                setLoading(false);
            }).catch(error => {
                console.log("ERR: ", error)
                console.error(error);
                setLoading(false);
            });
    }, []);


    // setData( [
    //     {
    //         id: 1,
    //         name: 'mock',
    //         lastName: 'mock',
    //         email: 'mock@mock.cl',
    //         role: 'admin'
    //     },
    //     {
    //         id: 2,
    //         name: 'mock',
    //         lastName: 'mock',
    //         email: 'mock@mock.cl',
    //         role: 'admin'
    //     }
    // ]);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'name',
            headerName: 'Nombre',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Apellido',
            width: 150,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            type: 'number',
            width: 200,
            editable: false,
        },
        {
            field: 'role',
            headerName: 'Rol',
            sortable: true,
            width: 100,
            editable: true,
        },
        {
            field: '',
            headerName: ' ',
            width: 150,
            renderCell: (params: GridRenderCellParams<Date>) => (
                <strong>
                    <IconButton
                        size="large"
                        aria-label="done"
                        color="inherit"
                    >
                        <Badge badgeContent={0} color="error">
                            <DoneAllIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        size="large"
                        aria-label="delete"
                        color="inherit"
                    >
                        <Badge badgeContent={0} color="error">
                            <DeleteIcon />
                        </Badge>
                    </IconButton>
                </strong>
            ),
        },
    ];

    return (
        <>
            <h1>Usuarios</h1>
            <PaginatedTableComponent columns={columns} data={data} />
        </>
    );
}