import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Preview from "../../components/Preview/Preview"
import style from "./PreviewPage.module.css"

function PreviewPage() {
    return (
        <>
            <Header></Header>
            <div className={style["preview-component"]}>
                <Preview></Preview>
            </div>
            <Footer></Footer>
        </>
    )
}

export default PreviewPage