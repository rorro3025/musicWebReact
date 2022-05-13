import './style.css'

export default function Customer() {

    return (
        <main>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className={"form-control"} placeholder={"name"}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" placeholder={"address"} className={"form-control"}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" placeholder={"city"} className={"form-control"}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="state">State</label>
                    <input type="text" name="state" placeholder={"state"} className={"form-control"}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="zip">Zip code</label>
                    <input type="text" name="zip" placeholder={"zip"} className={"form-control"}/>
                </div>
                <div className="d-grid gap-2 mt-2 mb-1">
                    <input type="submit" value="Save" className={"btn btn-success"}/>
                </div>
            </form>
        </main>
    )
}