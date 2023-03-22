import {
    Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  FormControl,
  Stack,
} from "@mui/material";
import { Form, Link, useLoaderData } from "react-router-dom";
import LoginFormFields from "./LoginFormFields";
import GoogleButton from 'react-google-button'
import jwtLoginAuth from "../../../api/jwtLoginAuth"

export default function Login() {
  const googleOAuth2URL = useLoaderData();
  const handleSubmit = async (e)=>{
    e.preventDefault()
    console.log(e.target["name"].value)
    const formData = new FormData(e.target)
    const {url} = await jwtLoginAuth(formData)
    window.location.href = url
  }

  return (
    <Container sx={{ marginTop: 25, textAlign:"center"}}>
      <Card sx={{border:2}}>
        <CardHeader title="Login" />
        <Divider sx={{ marginLeft:25, marginRight:25}}/>
        <CardContent>
          <Form onSubmit={handleSubmit}>
            <Stack spacing={1}>
                {LoginFormFields.map(formField=>{
                    return (
                        <FormControl key={formField.id}>
                            {formField.field}
                        </FormControl>
                    )
                })}
                <Button variant="contained" type="submit">Submit</Button>
                <GoogleButton onClick={()=> {window.location.href=googleOAuth2URL}} style={{width:"100%"}}/>
                <Link to = "/register" style={{width:"100%", marginTop:53}}> Register</Link>
                
            </Stack>
          </Form>
        </CardContent>
      </Card>
    </Container>
  );
}
