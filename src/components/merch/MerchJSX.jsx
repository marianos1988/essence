import Filters from "./filters";

export default function Merch( { categories }) {


    return(
        <div className="container-merch">
            <section className="sec-filters">
                <Filters
                    categories = {categories}
                />
            </section>
            <section className="sec-products">

            </section>
        </div>
    )
}