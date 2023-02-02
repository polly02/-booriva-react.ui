import style from "./Preview.module.css"

function Preview(){
return(
    <div className={style["wrapper"]}>
        <div className={style["img-womens"]}></div>
        <div className={style["img-coll"]}></div>
        <div className={style["img-store"]}></div>
        <div></div>
    </div>
)
}

export default Preview