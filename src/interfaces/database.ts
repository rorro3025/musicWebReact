interface information {
   id:number;
   address:string;
   city:string;
   state:string;
   zip:string;
   phone:string;
}

export interface Outlet extends information {}

export interface Customer extends information {
   name:string;
}

export interface Employee{
    id:number;
    outletId:number;
    name:string;
}

export interface Product{
   id:number;
   artist:string;
   title:string;
   cost:number;
   salePrice:number;
}