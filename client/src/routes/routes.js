import React from 'react';

import { Home } from 'platform/home/pages';
import { Expenses, ExpenseEdit, ExpenseCreate } from "platform/expenses/pages";
import { CreateUser, UserEdit } from "platform/user/pages";

const routes = [
    {
        name: 'home',
        pattern: '/',
        component: <Home />,
        title: "Home"
    },
    // {
    //     name: 'createUser',
    //     pattern: '/createUser',
    //     component: <CreateUser />,
    // },
    {
        name: 'expenses',
        pattern: '/expenses',
        component: <Expenses />,
        title: "Monefy",
        // children: [
        //     {
        //         name: 'expenses.edit',
        //         pattern: '/edit/:id',
        //         component: <ExpenseEdit />,
        //         title: "Edit"
        //     },
        //     {
        //         name: 'expenses.create',
        //         pattern: '/create',
        //         component: <ExpenseCreate />,
        //         title: "Create"
        //     },
        // ]
    },
    {
        name: 'notFound',
        pattern: '/not-found',
    },
];

export default routes;