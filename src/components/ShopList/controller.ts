export const getProductsByStore = async (outlet: number) => {
    let uri = `http://localhost:4000/products/byOutlet/${outlet}`;
    let response = await fetch(uri);
    return await response.json();
}