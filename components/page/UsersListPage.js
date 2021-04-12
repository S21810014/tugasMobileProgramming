import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';
import axios from 'axios'

const ResultPage = () => {
    const [apiData, setApiData] = useState([])
    const [numOfRequest, setNumOfRequest] = useState(0) 

    if(numOfRequest < 1) {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(data => {
            setApiData(data.data)
            setNumOfRequest(1)  //this will ensure we only get the API once
        })
    }

    if(apiData.length > 0)
        return (
        <View>
            <ScrollView style={{margin: 18, marginTop: 9}}>
            <Text style={{fontSize: 36, fontWeight: 'bold', marginBottom: 25}}>Users List</Text>
                {
                apiData.map((el, idx) => 
                <View key={idx} style={{padding: 15, borderRadius: 14, borderWidth: 1, marginVertical: 8}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontWeight: 'bold'}}>Name: </Text>
                        <Text>{el.name}</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontWeight: 'bold'}}>Username: </Text>
                        <Text>{el.username}</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontWeight: 'bold'}}>Email: </Text>
                        <Text>{el.email}</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontWeight: 'bold'}}>Address: </Text>
                        <Text style={{flex: 1, flexWrap: 'wrap'}}>
                        {`${el.address.city}, ${el.address.street}, ${el.address.zipcode}`}
                        </Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontWeight: 'bold'}}>Phone: </Text>
                        <Text>{el.phone}</Text>
                    </View>
                </View>)
                }
            </ScrollView>
        </View>
        )
    else
        return (<View><Text>Loading</Text></View>)
}

module.exports = ResultPage
