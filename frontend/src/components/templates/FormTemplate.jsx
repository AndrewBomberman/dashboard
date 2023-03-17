import { Form, useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";
import { createContext } from "react";
import editHotelRequest from "../../api/internal/requests/hotel/editHotelRequest";
import { useAddHotelRequest } from "../../../../frontend3/src/api/internal/hotel/requests/hotelRequests";

export const FormContext = createContext();

export default function FormTemplate({title, submit, children }) {
  const { id } = useParams()
  const [fields, setFields] = useState({});
  const [editable, setEditable ] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData()
    for( const [key, value] of Object.entries(fields)){
      if(key!== "gallery"){
        formData.append(key, value);
      }
      else{
        for(let i=0;i<value.length;i++){
          formData.append(key, value[i]);
        } 
      }
    }
    console.log(fields.gallery)
    await editHotelRequest(id, formData)
    
  };
  const updateFields = (key, value) => {
    fields[key] = value
    setFields(fields);
    console.log(fields)
  };

  return (
    <div className="FormTemplate">
      <Form onSubmit={handleSubmit}>
        <Card>
          <CardHeader title={title} />
          <CardContent>
            <FormContext.Provider
              value={{
                formFields: fields,
                setFormFields: updateFields,
                editable: editable,
              }}
            >
              {children}
            </FormContext.Provider>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <IconButton type="submit" color="primary" onClick={()=>setEditable(false)}>
              <SaveIcon />
            </IconButton>
            <IconButton color="success" onClick={()=>setEditable(!editable)}>
              <EditIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Form>
    </div>
  );
}
