import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import { withStyles } from "@material-ui/core/styles";

import { useState } from 'react'

const styles = {
  root: {
    '& label': {
      color: "#FA5E6B",
    },
  }
};

function App(props) {
  const { classes } = props;
  const [showCelcius, setShowCelcius] = useState(false);
  const [celcius, setCelcius] = useState("");
  const [showFahrenheit, setShowFahrenheit] = useState(false);
  const [fahrenheit, setFahrenheit] = useState("");
  const [showApiKey, setShowApiKey] = useState(true);
  const [showCityName, setShowCityName] = useState(true);
  const [showButton, setShowButton] = useState(true);

  const divStyle = {
    margin: 10,
    minWidth: "195px",
    
  }

  const divStyle2 = {
    margin: 10,
    minWidth: "195px",
    color: "white",
    backgroundColor:"#FA5E6B"
  }

  function handleChange() { 

      setShowCelcius(!showCelcius)
      setShowFahrenheit(!showFahrenheit)
      setShowApiKey(!showApiKey)
      setShowCityName(!showCityName)
      setShowButton(!showButton)
      fetch("http://api.weatherapi.com/v1/current.json?key=ff9f895b2e884d6680530135202710&q=Kuala%20Lumpur")
        .then(result => result.json())
        .then(data =>{
          console.log(data)
          setCelcius(data.current.temp_c)
          setFahrenheit(data.current.temp_f)
        })

  };

  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form noValidate autoComplete="off">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >

          <Grid item xs={12} >
            {
              showCelcius && <TextField
                style={divStyle}
                id="celcius"
                label="Celcius"
                value = {celcius}
                className = {classes.root}
                InputProps={{
                  readOnly: true,
                }}
              />
            }
          </Grid>

          <Grid item xs={12} >
            {
              showFahrenheit && <TextField
                style={divStyle}
                id="fahrenheit"
                label="Fahrenheit"
                value = {fahrenheit}
                className = {classes.root}
                InputProps={{
                  readOnly: true,
                }}
              />
            }

          </Grid>

          <Grid item xs={12} >
            {
              showApiKey && <TextField
                id="apiKey"
                label="Your API Key"
                style={divStyle}
                defaultValue="ff9f895b2e884d6680530135202710"
                className = {classes.root}
              />
            }
          </Grid>

          <Grid item xs={12} >
            {
              showCityName && <FormControl id="cityName" style={divStyle}>
                <InputLabel htmlFor="name-native-error" style = {{color: "#FA5E6B"}}>City Name</InputLabel >
                <NativeSelect
                  // value={state.name}
                  // onChange={handleChange}
                  name="name"
                  inputProps={{
                    id: 'name-native-error',
                  }}
                >
                  <option value="KL">Kuala Lumpur</option>
                  <option value="SG">Singapore</option>
                </NativeSelect>

              </FormControl>
            }
          </Grid>

          <Grid item xs={12}>
            {
              showButton && <Button variant="contained" style={divStyle2} onClick={() => handleChange()}>Submit</Button>
            }
          </Grid>
        </Grid>
      </form>

    </div>
  );
}

export default withStyles(styles)(App);