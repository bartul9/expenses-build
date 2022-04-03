import React from "react";
import Pagination from '@mui/material/Pagination';
import { observer } from "mobx-react";

const PaginationTemplate = observer(({ store: { totalPages, currentPage, changePage } }) => {
    return (
        <Pagination count={totalPages} page={currentPage} onChange={changePage} variant="outlined" color="primary" />
    );
})

export default PaginationTemplate;