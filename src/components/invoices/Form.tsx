'use client'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import TextField from '@mui/material/TextField';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece]

export default function Form() {
    const [status, setStatus] = useState('');
    const [dateValue, dateOnChange] = useState<Value>(new Date());

    const handleChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value);
    }
  return (
    <div>
        <h2 className='pb-[38px] text-[26px] font-semibold w-full max-w-[1024px] mx-auto text-left'>
            Add Invoice
        </h2>
        <div className='bg-white w-full max-w-[1024px] mx-auto border border-[#E2E8F0]'>
            <h3 className='font-semibold w-full px-[26px] py-[15px] border-b border-b-[#E2E8F0]'>Invoice Form</h3>
            <form  className='px-[26px] py-[15px]'>
                <div className='flex flex-row flex-wrap justify-between items-start gap-x-[35px] gap-y-[18px]'>
                    <label className='flex flex-row flex-wrap content-center items-center w-full max-w-[47%]'>
                        Name <span className='my-auto'>*</span>
                        <TextField type="text" className='w-full border border-inputBorderColor rounded-md mt-[12px]' id="inv-name" label="" variant="outlined" />
                        {/* <input className='w-full border border-inputBorderColor rounded-md py-[13px] px-[22px] mt-[12px]' type="text" name='username' placeholder="Enter your invoice name" required/> */}
                    </label>

                    <label className='flex flex-row flex-wrap content-center items-center w-full max-w-[47%]'>
                        Number <span className='my-auto'>*</span>
                        <TextField type="number" className='w-full border border-inputBorderColor rounded-md mt-[12px]' id="inv-number" label="" variant="outlined" />
                        {/* <input className='w-full border border-inputBorderColor rounded-md py-[13px] px-[22px] mt-[12px]' type="text" name='invoicenumber' placeholder="Enter your invoice number" required/> */}
                    </label>

                    {/* <label className='flex flex-row flex-wrap content-center items-center w-full max-w-[47%]'>
                        Due Date <span className='my-auto'>*</span>
                        <input className='w-full border border-inputBorderColor rounded-md py-[13px] px-[22px] mt-[12px]' type="date" name='duedate' placeholder="" required/>
                    </label> */}

                    <label className='flex flex-row flex-wrap content-center items-center w-full max-w-[47%]'>
                        Due Date <span className='my-auto'>*</span>
                        <DatePicker format='dd/MM/yyyy' dayPlaceholder="DD" monthPlaceholder="MM" yearPlaceholder="YYYY" className="w-full mt-[12px]" onChange={dateOnChange} value={dateValue} />
                    </label>
                    
                    <label className='amount-input flex flex-row flex-wrap content-center items-center w-full max-w-[47%]'>
                        Amount <span className='my-auto'>*</span>
                        <TextField type="number" className='w-full border border-inputBorderColor rounded-md mt-[12px]' id="inv-amount" label="" variant="outlined" />
                        {/* <input className='pl-[90px] w-full border border-inputBorderColor rounded-md py-[13px] px-[22px] mt-[12px]' type="text" name='usernames' placeholder="Enter your invoice amount" required/> */}
                    </label>

                    <div className='flex flex-row flex-wrap content-center items-center w-full max-w-[47%]'>
                        <label htmlFor="cars">Status <span className='my-auto'>*</span></label>
                        <FormControl className='w-full mt-[12px]' sx={{ m: 0, minWidth: 120 }}>
                            <Select
                            value={status}
                            onChange={handleChange}
                            displayEmpty
                            className='pl-[10px] h-[50px]'
                            inputProps={{ 'aria-label': 'Without label' }}
                            >
                            <MenuItem className='' style={{fontSize: '12px'}} disabled value="">
                                <em>Status</em>
                            </MenuItem>
                            <MenuItem className='' style={{fontSize: '12px'}} value={10}>Paid</MenuItem>
                            <MenuItem className='' style={{fontSize: '12px'}} value={20}>Unpaid</MenuItem>
                            <MenuItem className='' style={{fontSize: '12px'}} value={30}>Pending</MenuItem>
                            </Select>
                            {/* <FormHelperText>Without label</FormHelperText> */}
                        </FormControl>
                        {/* <select name="cars" id="cars" className='border border-inputBorderColor rounded-md w-full py-[13px] px-[22px] mt-[12px]'>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select> */}
                    </div>
                </div>

                {/* <button 
                className='bg-buttonPrimaryColor text-white rounded-sm px-[78px] py-[13px] mt-[58px] mb-[36px] ml-auto mr-0 my-auto flex justify-end'
                type='submit'>
                    <span>+</span> Add Invoice
                </button> */}
                <Button className='bg-buttonPrimaryColor px-[78px] py-[13px] mt-[58px] mb-[36px] ml-auto mr-0 my-auto flex justify-end' variant="contained"  startIcon={<AddIcon />}>Contained</Button>
            </form>
        </div>
    </div>
  )
}
