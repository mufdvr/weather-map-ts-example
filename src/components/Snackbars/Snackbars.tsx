import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Snackbar from '@material-ui/core/Snackbar'

import SnackbarContentWrapper from './SnackbarContentWrapper'

export interface IProps {
  variant: 'success' | 'warning' | 'error' | 'info'
  message: string
  autoHideDuration: number
}

export interface IState { 
  open: boolean
}

class Snackbars extends React.Component<IProps, IState> {

  static defaultProps: Partial<IProps> = {
    autoHideDuration: 3000,
    variant: 'info',
  }

  static error (message: string, autoHideDuration?: number): void {
    ReactDOM.render(<Snackbars key={Math.random()} message={message} autoHideDuration={autoHideDuration} variant="error" />, portal)
  }

  static success (message: string, autoHideDuration?: number): void {
    ReactDOM.render(<Snackbars key={Math.random()} message={message} autoHideDuration={autoHideDuration} variant="success" />, portal)
  }
  
  static warning (message: string, autoHideDuration?: number): void {
    ReactDOM.render(<Snackbars key={Math.random()} message={message} autoHideDuration={autoHideDuration} variant="warning" />, portal)
  }
  
  static info (message: string, autoHideDuration?: number): void {
    ReactDOM.render(<Snackbars key={Math.random()} message={message} autoHideDuration={autoHideDuration} variant="info" />, portal)
  }
  
  static close () {
    ReactDOM.render(<div />, portal)
  }
  
  state = {
    open: true
  }

  handleClose = (event: any, reason: string): void => {
    if (reason === 'clickaway') {
      return
    }
    this.setState({ open: false });
  }

  render = () => {
    const { open } = this.state
    const { variant, message, autoHideDuration } = this.props
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={this.handleClose}
      >
        <SnackbarContentWrapper
          onClose={this.handleClose}
          variant={variant}
          message={message}
        />
      </Snackbar>
    )
  }
}

const portal = document.getElementById('portal')

export default Snackbars