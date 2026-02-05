import './Footer.css';

function Footer({StoreInfo, ContactInfo}) {
    return(
        <div className="footer">
            <h2> {StoreInfo} </h2>
            <p> {ContactInfo} </p>
        </div>
    )
}
export default Footer