import {useState,FC} from 'react';
import { useForm } from 'react-hook-form';
import {Box, Button, FormControl, Grid, Input, InputLabel, NativeSelect, TextField} from "@mui/material";
import {DateField, LocalizationProvider,} from "@mui/x-date-pickers";
import DeleteIcon from '@mui/icons-material/Delete';
import {DemoItem} from "@mui/x-date-pickers/internals/demo";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import {joiResolver} from "@hookform/resolvers/joi";

import styles from './userForm.module.css'
import {Expense} from "../../interfaces";
import {schema} from "../../validators";





export const UserForm:FC = () => {
    const { register, handleSubmit, formState, formState:{errors} } = useForm<Expense>({resolver: joiResolver(schema)});
    const [isFormHidden, setIsFormHidden] = useState(false);


    let result:Expense[]=[]
    const onSubmit = (data: Expense) => {
        result.push(data)
        console.log(result);
    };

    const handleFormHider = () => {
        setIsFormHidden(!isFormHidden);
        result=[]
        console.log(result);
    };

    return (
        <>
            <div className={styles.wrapper}>
                <form onBlur={handleSubmit(onSubmit)} style={{ display: isFormHidden ? 'none' : 'table' }}>
                        <Grid item xs={8} className={styles.placement}>
                        <DeleteIcon className={styles.delete} onClick={handleFormHider}/>
                    </Grid>
                    <div className={styles.money}>
                        <i className={styles.amount}>Amount</i>
                        <Input {...register('amount')} defaultValue={"$0.00"}/>
                        {errors.amount && <p>{errors.amount.message}</p>}
                    </div>
                    <div className={styles.box}>
                        <Box className={styles.container}>
                            <FormControl className={styles.place}>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                    My Checking Account
                                </InputLabel>
                                <NativeSelect
                                    {...register('fromAccount')}
                                    defaultValue={30}
                                    inputProps={{
                                        name: 'account',
                                        id: 'uncontrolled-native',
                                    }}
                                >
                                    <option value={5000}>Account1: $5000</option>
                                    <option value={8000}>Account2: $8000</option>
                                    <option value={11000}>Account4: $11000</option>
                                    <option value={12000}>Account5: $12000</option>
                                    <option value={14000}>Account6: $14000</option>
                                </NativeSelect>
                            </FormControl>
                            {errors.fromAccount && <p className="text-danger">{errors.fromAccount.message}</p>}

                        </Box>
                        {errors?.fromAccount && <p>{errors.fromAccount.message}</p>}
                        <Box>
                            <FormControl className={styles.place}>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                    Payee
                                </InputLabel>
                                <NativeSelect
                                    {...register('payment')}
                                    defaultValue={30}
                                    inputProps={{
                                        name: 'payment',
                                        id: 'uncontrolled-native',
                                    }}
                                >
                                    <option value={"first"}>some operation1</option>
                                    <option value={"second"}>some operation2</option>
                                    <option value={"third"}>some operation3</option>
                                </NativeSelect>
                            </FormControl>
                            {errors.payment && <p className="text-danger">{errors.payment.message}</p>}

                        </Box>

                    </div>

                    <div className={styles.box}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoItem>
                                    <label>
                                        <DateField defaultValue={dayjs('2022-04-17')} label={'date'}/>
                                    </label>
                                </DemoItem>
                        </LocalizationProvider>
                        <TextField
                            {...register('note')}
                            label="Note"
                            variant="outlined"
                        />
                        {errors.note && <p className="text-danger">{errors.note.message}</p>}
                    </div>


                </form>
            </div>
            <div className={styles.adder}>
                <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={!formState.isValid}
                >
                    Add Another Bill
                </Button>
            </div>
        </>
    );
};