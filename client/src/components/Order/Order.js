import style from "./Order.module.css"
import { FormControlLabel, RadioGroup, Radio, FormControl, TextField } from '@mui/material';

function Order() {
    return (
        <div className={style["order"]}>
            <div className={style["contact"]}>
                <div className={style["img"]}></div>
                <div >
                    <div className={style["forms"]}>
                        <TextField id="outlined-basic" label="Имя" sx={{ width: "570px" }} color="secondary" variant="outlined" />
                    </div>
                    <div className={style["forms"]}>
                        <TextField id="outlined-basic" label="Фамилия" sx={{ width: "570px" }} color="secondary" variant="outlined" />
                    </div>
                    <div className={style["forms"]}>
                        <TextField id="outlined-basic" label="+375 (__) ___-__-__" sx={{ width: "570px" }} color="secondary" variant="outlined" />
                    </div>
                    <div className={style["forms"]}>
                        <TextField id="outlined-basic" label="E-mail" sx={{ width: "570px" }} color="secondary" variant="outlined" />
                    </div>
                </div>
            </div>
            <div className={style["delivery"]}>
                <div className={style["img"]}></div>
                <div>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group" 
                        >
                            <FormControlLabel value="post" control={<Radio />} label="Доставка в отделение почты " />
                            <FormControlLabel value="courier" control={<Radio />} label="Курьерская доставка"  />
                            <FormControlLabel value="international" control={<Radio />} label="Международная доставка " />
                            <FormControlLabel value="pickup" control={<Radio />} label="Самовывоз" />
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
            <div className={style["comments"]}>
                <TextField
                    id="outlined-multiline-static"
                    multiline rows={4}
                    label="Комментарий к заказу"
                    sx={{ width: "570px" }}
                    color="secondary"
                />
            </div>
            <div className={style["btn"]}></div>
        </div >
    )
}

export default Order