export const handleSubmit = ({e, submit}) =>{
    e.preventDefault()
    console.log(e)
    const formData = new FormData();
    formData.append("name", e.target["name"].value);
    formData.append("description", e.target["description"].value);
    formData.append("email", e.target["email"].value);
    formData.append("phone", e.target["phone"].value);
    formData.append("address1", e.target["address1"].value);
    formData.append("address2", e.target["address2"].value);
    formData.append("country", e.target["country"].value);
    formData.append("city", e.target["city"].value);
    thumbnail ?? formData.append("thumbnail", thumbnail);
    if (gallery){
      for(let i=0;i<gallery.length;i++){
        formData.append("gallery", gallery[i])
      }
    }
    submit(formData)
}