import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import WarningIcon from '@material-ui/icons/Warning'
import classNames from 'classnames'

import styles from './styles'

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
}

export interface IClasses {
  message: string
  icon: string
  iconVariant: string
  close: string
}

export interface IProps {
  classes: IClasses
  className?: string
  message?: string
  onClose?: (event: any, reason?: string) => void
  variant: 'success' | 'warning' | 'error' | 'info'
}

const SnackbarContentWrapper = ({ classes, className, message, onClose, variant }: IProps) => {
  const Icon = variantIcon[variant]
  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          <div>
            {message}
          </div>
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
    />
  )
}

const StylesWrapper = withStyles(styles)
const WrappedComponent = StylesWrapper(SnackbarContentWrapper)
export default WrappedComponent