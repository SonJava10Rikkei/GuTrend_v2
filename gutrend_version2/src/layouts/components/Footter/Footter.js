function Footter() {
    return (
        <>
            {/*footer start*/}
            <footer id="footer" className="footer">
                <div className="container">
                    <div className="hm-footer-copyright text-center">
                        <div className="footer-social">
                            <a href="#">
                                <i className="fa fa-facebook" />
                            </a>
                            <a href="#">
                                <i className="fa fa-instagram" />
                            </a>
                            <a href="#">
                                <i className="fa fa-linkedin" />
                            </a>
                            <a href="#">
                                <i className="fa fa-pinterest" />
                            </a>
                            <a href="#">
                                <i className="fa fa-behance" />
                            </a>
                        </div>
                        <p>
                            ©copyright. designed and developed by{" "}
                            <a href="https://www.themesine.com/">themesine</a>
                        </p>
                        {/*/p*/}
                    </div>
                    {/*/.text-center*/}
                </div>
                {/*/.container*/}
                <div id="scroll-Top">
                    <div className="return-to-top">
                        <i
                            className="fa fa-angle-up "
                            id="scroll-top"
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Back to Top"
                            aria-hidden="true"
                        />
                    </div>
                </div>
                {/*/.scroll-Top*/}
            </footer>
            {/*/.footer*/}
            {/*footer end*/}
        </>
    )
}
export default Footter;
