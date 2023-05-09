import Header from './Header';
import Footer from './Footer';

function DefaultLayout({ children }) {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="container">{children}</div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default DefaultLayout;
