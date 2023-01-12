const Footer = () => {
    return (
        <footer className="text-center text-lg-start text-white">
            <section className="p-3 pt-0">
                <div className="row d-flex align-items-center">
                    <div className="col-md-7 col-lg-8 text-center text-md-start">
                        <div className="p-3">
                            © 2022 Copyright:
                            <a className="text-white" href="https://amyspawton.com/"
                            >Amy Spawton</a
                            >
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                        <a
                            className="btn btn-outline-light btn-floating m-1 text-white"
                            role="button"
                        ><i className="fab fa-facebook-f"></i
                        ></a>
                        <a
                            className="btn btn-outline-light btn-floating m-1 text-white"
                            role="button"
                        ><i className="fab fa-twitter"></i
                        ></a>
                        <a
                            className="btn btn-outline-light btn-floating m-1 text-white"
                            role="button"
                        ><i className="fab fa-google"></i
                        ></a>
                        <a
                            className="btn btn-outline-light btn-floating m-1 text-white"
                            role="button"
                        ><i className="fab fa-instagram"></i
                        ></a>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
