import * as React from 'react'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

import { ICityMap } from '../../models'
import CustomTableCell from './CustomTableCell'

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

export default CitiesTable