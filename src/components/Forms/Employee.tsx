import './style.css'

export default function Employee() {
    const outlets = ["Coyoacan", "Tultitlan","Coacalco"]

    return (
        <main>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className={"form-control"} placeholder={"name"}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="email">Outlet</label>
                    <select className={"form-control"}>
                        {outlets.map(outlet => <option key={outlet}>{outlet}</option>)}
                    </select>
                </div>
                <div className="d-grid gap-2 mt-2 mb-1">
                    <input type="submit" value="Save" className={"btn btn-success"}/>
                </div>
            </form>
        </main>
    )
}