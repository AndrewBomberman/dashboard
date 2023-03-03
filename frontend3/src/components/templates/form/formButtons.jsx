import { IconButton } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

export const EnableFormButton = ({enabled, setter})=>{
    return (
        <IconButton color="success" onClick={()=>{setter(!enabled)}}>
            <EditIcon/>
        </IconButton>
    )
}

export const SubmitButton = ()=>{
    return (
        <IconButton type="submit" color="primary">
            <SaveIcon/>
        </IconButton>
    )
}