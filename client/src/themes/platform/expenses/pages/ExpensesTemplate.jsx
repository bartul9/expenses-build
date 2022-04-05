import React from "react";
import { observer } from "mobx-react";

import FilterListIcon from '@mui/icons-material/FilterList';
import AddIcon from '@mui/icons-material/Add';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';

import { InfoCard, Filter, Deposit } from "platform/expenses/components";
import { UserEdit } from "platform/user/pages";
import { ExpenseEdit } from "platform/expenses/pages";
import { Chart, BasicTable, EmptyState, ActionButton, NotifyOutsideClick } from "core/components";

import { noResults } from "assets";

const ExpensesTemplate = observer(({ expensesStore }) => {

    const { 
        cardsData, 
        chartData, 
        dateValue,
        setDate,
        onFilterClick,
        tableStore,
        loaderStore,
        expenseId,
        openSlider,
        closeSlider,
        sliderType,
        filterExpenses,
        rootStore: { 
            userStore: { currency },
            balanceStore: { createBalance }
        } 
    } = expensesStore;

    if(loaderStore.isLoading) {
        return (
        <div className="overlay">
            <div className="overlay__inner">
                <div className="overlay__content">
                    <span className="spinner"></span>
                </div>
            </div>
        </div>)
    }

    return (
        <div className="expensesContainer">
            <div className="expenses">
                {tableStore.hasData ? <BasicTable store={tableStore} /> : <EmptyState icon={noResults} message={"Create new expense, or try to change date range"} />}
            </div>

            <div className="expensesStatistics">
                <div className="chartContainer">
                    <Chart chartData={chartData} />
                </div>
                {cardsData && 
                <div className="infoCardsContainer">
                    <InfoCard data={cardsData.expensesCardData} currency={currency} />
                    <InfoCard data={cardsData.highestExpense} currency={currency} />
                    <InfoCard data={cardsData.depositCardData} currency={currency} />
                </div>}
            </div>

            {sliderType && 
                <NotifyOutsideClick onOutsideClick={closeSlider}>
                    <div className="actionsSlider">
                        {sliderType === "filter" && <Filter closeSlider={closeSlider} onFilterClick={onFilterClick} filterExpenses={filterExpenses} dateValue={dateValue} setDate={setDate} />}
                        {sliderType === "expense" && <ExpenseEdit expensesStore={expensesStore} id={expenseId} closeSlider={closeSlider} />}
                        {sliderType === "deposit" && <Deposit submitDeposit={createBalance} cancelSubmit={closeSlider} />}
                        {sliderType === "account" && <UserEdit cancel={closeSlider} />}
                    </div>
                </NotifyOutsideClick>}

            <div className="actionButtons">
                <ActionButton color={sliderType === "filter" ? "#2196f3" : "#1976d2"} title="Open filter" Icon={FilterListIcon} onClick={() => openSlider("filter")} />
                <ActionButton color={sliderType === "expense" ? "#2196f3" : "#1976d2"} title={expenseId ? "Edit expense" : "Create expense"} Icon={expenseId ? EditIcon : AddIcon} onClick={() => openSlider("expense")} />
                <ActionButton color={sliderType === "deposit" ? "#2196f3" : "#1976d2"} title="Balance" Icon={AccountBalanceIcon} onClick={() => openSlider("deposit")} />
                <ActionButton color={sliderType === "account" ? "#2196f3" : "#1976d2"} title="Account" Icon={AccountCircle} onClick={() => openSlider("account")} />
            </div>
        </div>
    )
})

export default ExpensesTemplate;