import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DeleteIcon from '@mui/icons-material/Delete';
import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import { GridRenderCellParams, GridValueGetterParams } from "@mui/x-data-grid/models/params/gridCellParams";
import PaginatedTableComponent from "../../components/paginatedTable";

export default function UsuariosComponent() {

    //todo: obtener data desde backend y mapear

    const data = [
        {
            id: 1,
            name: 'mock',
            lastName: 'mock',
            email: 'mock@mock.cl',
            role: 'admin'
        },
        {
            id: 2,
            name: 'mock',
            lastName: 'mock',
            email: 'mock@mock.cl',
            role: 'admin'
        }
    ]

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
            <PaginatedTableComponent columns={columns} data={data}/>
        </>
    );
}