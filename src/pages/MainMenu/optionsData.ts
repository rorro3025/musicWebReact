import {Option} from "../../interfaces/Properties";

export const options: Option[] = [
    {
        title: "Do a sale",
        description: "Process a sale from the point of sale",
        link: "/sales",
        option: 0
    }, {
        title: "Process a return",
        description: "Process a return from existing sales",
        link: "/returns",
        option: 1
    }, {
        title: "Manage employees ",
        description: "Create, edit and delete employees if you have the right permissions",
        link: "/management/employees",
        option: 2
    }, {
        title: "Manage customers",
        description: "Create, edit and delete customers if you have the right permissions",
        link: "/management/customers",
        option: 3
    }, {
        title: "Manage products",
        description: "Create, edit and delete products if you have the right permissions",
        link: "/products",
        option: 4
    }
];