import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

import { ICityMap } from '../../models'

export interface IProps {
   cityMaps: ICityMap[]
   fetching: boolean
   classes: IClasses
   error: RequestError
   addCity: (city: string) => any
}

export interface IState {
  readonly [key: string]: string
  readonly city: string
}

interface IClasses {
  root: string
  button: string
  buttonProgress: string
  textField: string
}

class AddCity extends React.Component<IProps, IState> {
  state = {
    city: ''
  }

  handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>): void => 
    this.setState({ [name]: value } as IState )

  handleClick = (): void => {
    const { cityMaps, addCity }: IProps = this.props
    const city = this.state.city.toLowerCase()
    if (cityMaps.find(item => item.name.toLowerCase() === city)) {
      console.log('City already added')
    } else {
      addCity(city)
    }
  }

  componentWillReceiveProps = (nextProps: IProps) => {
    const { fetching, error: { message } } = nextProps
    !message && !fetching && this.setState({ city: '' })
  }

  render = () => {
    const { classes, fetching }: IProps = this.props
    const { city } = this.state
    return (
      <div className={classes.root}>
        <TextField
          label="City"
          className={classes.textField}
          value={city}
          name="city"
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained" className={classes.button} onClick={this.handleClick}>
          Add
          {fetching && <CircularProgress size={24} className={classes.buttonProgress} />}
        </Button>
      </div>
    )
  }
}

export default AddCity