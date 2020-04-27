import React,{useState} from "react";
import "./components.css";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';

function InputForm(props) {
  const [loc, setLoc] = useState('')
  const handleClick = event => {
    event.preventDefault();
    setLoc('')
    props.GetWeatherData(loc);
  }
  return (
    <div>
      <form onSubmit={handleClick}>
      <FormControl fullWidth className="loc-input" variant="outlined"  >
        <InputLabel htmlFor="outlined-adornment-amount">Enter Location</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={loc}
          onChange={event => setLoc(event.target.value)}
          startAdornment={<InputAdornment position="start"><LocationSearchingIcon/></InputAdornment>}
          labelWidth={110}
        />
      </FormControl>
      </form>
    </div>
  );
}

export default InputForm;
