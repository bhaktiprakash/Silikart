// function ProductCard(product, price){
// function ProductCard(data) {
// function ProductCard(props) {
function ProductCard({pData}) {
    // console.log(data)
    // const { product, price } = data.pData
    const { product, price } = pData
    return (
        <div className="pcard">
            <h2>{product}</h2>
            <p>{price}</p>
        </div>
    )
}

export default ProductCard
// export {ProductCard}
