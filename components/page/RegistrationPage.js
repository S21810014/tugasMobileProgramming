import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import Tombol from '../atoms/Tombol'
import TioInputField from '../atoms/TioInputField'

const RegistrationPage = ({setData, registerButtonHandler}) => {
    const inputs = [
        {
        inputName: "name",
        label: "Name",
        helperText: "Masukkan nama lengkap anda",
        stateHandler: useState("")
        },
        {
        inputName: "username",
        label: "Username",
        helperText: "Masukkan username anda",
        stateHandler: useState("")
        },
        {
        inputName: "email",
        label: "Email",
        helperText: "Masukkan email anda",
        stateHandler: useState("")
        },
        {
        inputName: "address",
        label: "Address",
        helperText: "Masukkan alamat anda",
        stateHandler: useState("")
        },
    ]

    //there's a special case with phone number input where
    //the user can only type numbers, therefore we create a standalone state
    //and handler for phone number
    const [phoneNumber, setPhoneNumber] = useState('')
    const setPhoneNumberHandler = (value) => {
        value = value.replace(/\D/g, '');   //https://stackoverflow.com/questions/4993764/how-to-remove-numbers-from-a-string
                                            //used the code from link above, but adapted to work with states and to do the 
                                            //opposite of it
        setPhoneNumber(value);
    }

    const regButtonHandler = () => {
        inputs.forEach(el => console.log(`${el.label} : ${el.stateHandler[0]}`))    //print the user inputs to console
        registerButtonHandler() //call the parent function that will change the page to users list
    }

    return (
        <SafeAreaView>
            <View style={{margin: 18, marginTop: 9}}>
                <Text style={{fontSize: 36, fontWeight: 'bold', marginBottom: 25}}>Registration</Text>
                {
                inputs.map((el, idx) => <TioInputField key={idx} label={el.label} helperText={el.helperText} stateHandler={el.stateHandler}/>)
                }
                <TioInputField label={"Phone Number"} helperText={"Masukkan Nomor Telepon Anda"} stateHandler={{'0': phoneNumber, '1': setPhoneNumberHandler}}/>
                <Tombol label="Register" handler={regButtonHandler}/>
            </View>
        </SafeAreaView>
    );
}

module.exports = RegistrationPage