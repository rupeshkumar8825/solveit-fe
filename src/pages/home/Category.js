// this is category component 
// in this i will be storing the different present categories to which the ideas will be searched 
import React from "react";
import "../../css/Home.css"

const Category = ()=>{
    return (
        <>
            <div className="container" id="category">
                <div className="trendingHeading">
                    <h4>Category Wise Ideas</h4>

                </div>
                <div class="card">
                    <img src="https://source.unsplash.com/random" class="card-img-top" alt="Search By Category"/>
                    <div class="card-body">
                        <p class="card-text">1. Agriculture</p>
                    </div>
                    <div class="card-body">
                        <p class="card-text">2. Fintech </p>
                    </div>
                    <div class="card-body">
                        <p class="card-text">3. Inventory</p>
                    </div>
                    <div class="card-body">
                        <p class="card-text">4. SaaS</p>
                    </div>
                    <div class="card-body">
                        <p class="card-text">5. Healthcare</p>
                    </div>
                    <div class="card-body">
                        <p class="card-text">6. Lending</p>
                    </div>
                    <div class="card-body">
                        <p class="card-text">7. Edtech</p>
                    </div>
                </div>

            </div>
        </>
    )
}

// say everything went fine 
export default Category;