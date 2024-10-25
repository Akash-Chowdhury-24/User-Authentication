
import CommonInput from "./commonInput";
import { Button } from "@mui/material";

const initial = {
  INPUT : 'input',
  TEXTAREA : 'textarea',
  SELECT : 'select',
}
function CommonForm({formcontrols=[],handleSubmit,formDetails,setFormDetails,buttontext}) {
  function renderinput(formcontrol){
    let element = null;
    switch(formcontrol.control){
      case initial.INPUT :
        element = <CommonInput type={formcontrol.type} name={formcontrol.name} placeholder={formcontrol.placeholder} value={formDetails[formcontrol.name]} onChange={event => setFormDetails({
          ...formDetails,
          [event.target.name] : event.target.value,
        })}/>
        break;
      default :
        element = <CommonInput type={formcontrol.type} name={formcontrol.name} placeholder={formcontrol.placeholder} value={formDetails[formcontrol.name]} onsubmit={event => setFormDetails({
          ...formDetails,
          [event.target.name] : event.target.value,
        })}/>
    }
    return element;
  }
  return (
    <div>
      <form onSubmit={handleSubmit} style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        color: "black",
      }}>
        {
          formcontrols.length > 0?
          formcontrols.map((item)=>renderinput(item))
          :null
        }
        <Button type="submit" variant="contained" sx={{
          marginTop: "10px",
          marginBottom: "10px",
          width: "100px",
          height: "40px",
          borderRadius: "10px",
          padding: "0 10px",
          border: "1px solid #ccc",
          color: "black",
          backgroundColor: "gray"
        }}>{buttontext}</Button>
      </form>
    </div>
  );
}

export default CommonForm;