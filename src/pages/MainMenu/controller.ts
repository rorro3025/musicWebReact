export const getUserInfo = async (id: number) => {
    let uri = 'http://localhost:4000/employees/' + id;
    const response = await fetch(uri)
    return await response.json()
}