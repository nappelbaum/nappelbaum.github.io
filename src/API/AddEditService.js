import axios from "axios";

export default function AddEditService(url, formData, data, myForm, setAddCat) {
  axios.post(`${url}`, formData).then((res) => {
    alert(res.data);
    if (data) {
      if (res.data === data) {
        for (let i = 0; i < myForm.current.children.length; i++) {
          myForm.current.children[i].value = "";
        }
        setAddCat("");
      }
    }
  });
}
