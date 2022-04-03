import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import { observer } from "mobx-react";
import { BasicTableCell, Loader } from 'core/components';

import "styles/expenses.css";

const BasicTableTemplate = observer(({ store }) => {

  const { 
    filter: {
      page, 
      rpp, 
      order, 
      orderBy, 
    },
    renderData, 
    toggleOrderDirection, 
    actions,
    quantity,
    handleChangePage, 
    onDispose, 
    handleChangeRowsPerPage, 
    isLoading,
    columns, 
    config: {
      globalSelector,
    } 
  } = store;

  useEffect(() => {
    return () => {
      onDispose();
    };
  }, []);

  return (
    <Box sx={{ width: '100%', height: "100%", margin: "10px" }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer style={{ height: 383, position: "relative" }}>
          {isLoading && <Loader className="table--loader" />}
          <Table 
            stickyHeader
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={'medium'}
            style={{ border: "none" }}
          >
            <EnhancedTableHead
              order={order}
              columns={columns}
              orderBy={orderBy}
              globalSelector={globalSelector}
              toggleOrderDirection={toggleOrderDirection}
              rowCount={renderData.length}
            />
            <TableBody>
              {renderData.map(row => {

                return (
                <TableRow
                  key={Math.random()}
                >
                  {columns.map(({Cell, ...rest}) => rest.id && 
                  
                  (Cell ? <Cell key={Math.random()} value={row[rest.id]} props={rest} /> : <BasicTableCell key={Math.random()} value={row[rest.id]} props={rest}/>))}

                  {renderActions(actions, row)}
                </TableRow>)
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={quantity}
          rowsPerPage={rpp}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
})

export default BasicTableTemplate;


function EnhancedTableHead(props) {
  const { order, orderBy, toggleOrderDirection, columns } =
    props;

  return (
    <TableHead>
      <TableRow>
        {columns.map((headCell) => (
          <TableCell
            className={headCell.headerClass}
            key={Math.random()}
            align={headCell.align || 'left'}
            padding={headCell.padding || 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          > 
          {headCell.sortable ? 
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={() => toggleOrderDirection(headCell.id)}
            >
              <span className='cell--header--label'>{headCell.label}</span>
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel> 
            :
            <span className='cell--header--label'>{headCell.label}</span>}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};


function EnhancedTableToolbar(props){
  const { numSelected, title } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%', fontSize: "1.1rem" }}
          id="tableTitle"
          component="div"
        >
          {title}
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

function renderActions(actions, row) {
  const { edit, remove } = actions;

    return (
    <TableCell className='cell--width--100' align="right" >
      {edit && <Tooltip title={<span style={{ fontSize: "0.8rem" }}>Edit</span>}><EditIcon onClick={() => edit(row._id)} className="icon edit" /></Tooltip>}
      {remove && <Tooltip title={<span style={{ fontSize: "0.8rem" }}>Delete</span>}><DeleteIcon onClick={() => remove(row._id)} className="icon delete" /></Tooltip>}
    </TableCell>)
}