import React, { useState } from 'react';
import styled from 'styled-components';
import {useForm} from 'react-hook-form';
import Access from './Access';
import icon_complete from '../images/icon-complete.svg';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--white-color);
    color: black;
    padding: 0 25px 30px 25px;

    @media(min-width: 1240px) {
        form {
            margin-left: 200px;
        }
    }
    
`;
const Container = styled.div`
    form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        h3, h2, p {
            text-transform: uppercase;
            margin-bottom: 10px;
            color: #000;
        }
        .error {
            color: red;
            font-size: 10px;
        }
        gap: 25px;
    }
    &.hide {
        display: none;
    }
`;
const Input = styled.input`
    width: 100%;
    padding: 10px 7px;
    font-size: var(--fs);
    border-radius: 10px;
    border: 1px solid var(--dark-violet-color);
    ::placeholder {
        color: var(--dark-violet-color);
    }
`;
const Name = styled.div`
    display: block;
    width: 100%;
    
`;
const Number = styled.div`
    display: block;
    width: 100%;
    
`;
const Date = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
    gap: 10px;
    .month__year {
        display: block;
        width: 300px;
        .month__year__input {
            display: flex;
            gap: 10px;
        }
    }  
    .cvc {
        width: 100%;
    }
`;

const Button = styled.button`
    width: 100%;
    background-color: var(--very-dark-violet-color);
    color: var(--white-color);
    text-align: center;
    padding: 17px 0;
    border: none;
    border-radius: 10px;
    font-size: var(--fs);
`;

const AccessStyle = styled.div`
    // display: none;
    display: ${props => props.display};

    &.active {
        display: block;
    }
`;


const Inputs = ({updateNumCard, updateName, updateDateMM, updateDateYY, updateCvc, access, setAccess}) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm();

    const onSubmit = (data) => {
        setAccess(true);
        console.log(JSON.stringify(data));
    }

    return ( 
        <Wrapper>
            <Container className={access === true ? "hide" : ""}>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Name>
                    <h3>Cardholdere name</h3>
                    <Input 
                        type='text' 
                        {...register('name', {
                            required: true,
                            minLength: 5,
                            maxLength: 25,
                            pattern: /^[a-zA-Z0-9._]+|[\b]+$/
                        })}
                        onChange={(e) => {updateName(e)}} 
                        placeholder='e.g. Jane Appleseed'
                    />
                    {errors?.name?.type === 'required' && <p className='error'>This field is required</p>}
                    {errors?.name?.type === 'minLength' && (
                        <p className='error'>Name cannot exceed less than 5 characters</p>
                    )}

                    {errors?.name?.type === 'maxLength' && (
                        <p className='error'>Name cannot exceed 25+ characters</p>
                    )}
                    {errors?.name?.type === 'pattern' && (
                        <p className='error'>Alphabetical characters only</p>
                    )}
                </Name>
                

                <Number>
                    <h3>Card number</h3>
                    <Input 
                        type='number'
                        {...register('card_num', {
                            required: true,
                            minLength: 16,
                            maxLength: 16,
                        })}
                        onChange={(e) => {updateNumCard(e)}} 
                        placeholder='e.g. 1234 5678 9123 0000'
                    />
                    {errors?.card_num?.type === 'required' && <p className='error'>This field is required</p>}
                    {errors?.card_num?.type === 'minLength' && (
                        <p className='error'>Card Number must exceed 16 characters</p>
                    )}
                    {errors?.card_num?.type === 'maxLength' && (
                        <p className='error'>Card Number must exceed 16 characters</p>
                    )}
                </Number>

                <Date>
                    <div className="month__year">
                        <h3>Exp. date (mm/yy)</h3>
                        <div className="month__year__input">
                            <Input 
                                style={{width: 60}}
                                type='number' 
                                {...register('datemm', {
                                    required: true,
                                    minLength: 2,
                                    maxLength: 2,
                                })}
                                onChange={(e) => updateDateMM(e)} 
                                placeholder='MM'
                            />
                            {errors?.datemm?.type === 'required' && <p className='error'>This field is required</p>}
                            {errors?.datemm?.type === 'minLength' && (
                                <p className='error'>Date MM must include 2 numbers</p>
                            )}
                            {errors?.datemm?.type === 'maxLength' && (
                                <p className='error'>Date MM must include 2 numbers</p>
                            )}
                            <Input 
                                style={{width: 60}}
                                type='number' 
                                {...register('dateyy', {
                                    required: true,
                                    minLength: 2,
                                    maxLength: 2,
                                })}
                                onChange={(e) => updateDateYY(e)}   
                                placeholder='YY'
                            />
                            {errors?.dateyy?.type === 'required' && <p className='error'>This field is required</p>}
                            {errors?.dateyy?.type === 'minLength' && (
                                <p className='error'>Date YY must include 2 numbers</p>
                            )}
                            {errors?.dateyy?.type === 'maxLength' && (
                                <p className='error'>Date YY must include 2 numbers</p>
                            )}
                        </div>
                    </div>
                    <div className="cvc">
                        <h3>cvc</h3>
                        <Input 
                            type='number'
                            {...register('cvc', {
                                required: true,
                                minLength: 3,
                                maxLength: 3,
                            })}
                            onChange={(e) => {updateCvc(e)}} 
                            placeholder='e.g. 123'
                        />
                         {errors?.cvc?.type === 'required' && <p className='error'>This field is required</p>}
                        {errors?.cvc?.type === 'minLength' && (
                            <p className='error'>Date YY must include 3 numbers</p>
                        )}
                        {errors?.cvc?.type === 'maxLength' && (
                            <p className='error'>Date YY must include 3 numbers</p>
                        )}
                    </div>
                </Date>

                    <Button>Confirm</Button>
                </form>
                
            </Container>

            <AccessStyle display={'none'} className={access === true ? "active" : ""} >
                <Access>
                    <img src={icon_complete} alt="icon-complete" />
                    <h2>Thank you</h2>
                    <p>We've added your card details</p>
                </Access>
            </AccessStyle>
        </Wrapper>
     );
}
 
export default Inputs;