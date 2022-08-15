export const getAllOutlets = async () => {
    let uri = 'http://localhost:4000/outlets';
    const response = await fetch(uri)
    return await response.json()
}

export const getEmployeesByOutlet = async (outletId: number) => {
    let uri = 'http://localhost:4000/employees/byoutlet/' + outletId;
    const response = await fetch(uri)
    return await response.json()
}