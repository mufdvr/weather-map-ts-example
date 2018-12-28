import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import Types from 'Types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

import { ICityMap } from '../../models'

import styles from './styles'
import CustomTableCell from './CustomTableCell'
import * as actions from '../../actions'

export interface IProps {
   cityMaps: ICityMap[]
   classes: any
   deleteCity: (index: number) => any
   sortByCity: () => any
}

const CitiesTable = ({ cityMaps, classes, deleteCity, sortByCity }: IProps) =>
  <Table className={classes.table}>
    <TableHead>
      <TableRow>
        <CustomTableCell onClick={sortByCity} className={classes.city}>City</CustomTableCell>
        <CustomTableCell numeric={true}>Temperature</CustomTableCell>
        <CustomTableCell numeric={true}>Pressure</CustomTableCell>
        <CustomTableCell />
      </TableRow>
    </TableHead>
    <TableBody>
      {
        cityMaps.map((city, index) => {
        return (
          <TableRow className={classes.row} key={index}>
            <CustomTableCell component="th" scope="row">
              {city.name}
            </CustomTableCell>
            <CustomTableCell numeric={true}>{city.main.temp}</CustomTableCell>
            <CustomTableCell numeric={true}>{city.main.pressure}</CustomTableCell>
            <CustomTableCell numeric={true}>
              <IconButton className={classes.button} onClick={deleteCity.bind(null, index)} aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </CustomTableCell>
          </TableRow>
        )
      })
      }
    </TableBody>
  </Table>

const mapStateToProps = (state: Types.RootState) => ({
  cityMaps: state.cityMap.cityMaps.payload
})

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) => bindActionCreators({
  deleteCity: actions.deleteCity,
  sortByCity: actions.sortByCity
}, dispatch)

const ReduxWrapper = connect(mapStateToProps, mapDispatchToProps)
const StylesWrapper = withStyles(styles)
const WrappedComponent = ReduxWrapper(StylesWrapper(CitiesTable))
export default WrappedComponent
