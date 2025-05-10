function Categories() {
    return (
        <>
            <div className="categories">
                <p>Development</p>
                <p>Business</p>
                <p>IT & Software</p>
                <p>Personal Development</p>
                <p>Design</p>
                <p>Marketing</p>
            </div>

            {/* Sale Image */}
            <div className="sale-image">
                <img src="./images/sale-image.png" alt="Sale_Image" />
                <div className="sale-Image__offer">
                    <h2>Udemy Flash Sale! 24 hours to save</h2>
                    <p>Get the top courses for just 499. Just one day to save but it is a lifetime to learn</p>
                </div>
            </div>
        </>
    );
}

export default Categories;
