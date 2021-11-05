import React, {useEffect, useState} from 'react'
import { View, StyleSheet} from 'react-native'
// install react element from https://reactnativeelements.com/
import {Input, Button} from 'react-native-elements';
import {auth} from '../firebase';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //signin set up full documntation on firebase.
    const signIn = ()=>{
        auth.signInWithEmailAndPassword(email, password)
        .catch((error) => {
            var errorMessage = error.message;
            alert(errorMessage)
  });
    }
    useEffect(() => {
        const unsusbcribe = auth.onAuthStateChanged((user) => {
            if (user) {
                navigation.replace('Chat')
            } else {    
                navigation.canGoBack()&&navigation.popToTop();
              // User is signed out
              // ...
            }
          });
        return unsusbcribe
    }, [])
    return (
        // view field, input section and button
        <View style={styles.container}>
            <Input 
            placeholder="Type your email..."
            label="Email"
            leftIcon={{type:'material', name:'email'}}
            value={email}
            onChangeText={text => setEmail(text)}
            />
            <Input 
            placeholder="Type your password... "
            label="Password"
            leftIcon={{type:'material', name:'lock'}}
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            />
            <Button title="         Sign in         " type="clear" style={styles.button} onPress={signIn} />
            <Button title="       Register        " style={styles.button} onPress={()=>navigation.navigate('Register')}/>
        </View>
    )
}

export default LoginScreen
//create style for the button
const styles = StyleSheet.create({
    button:{
        width: 200,
        marginTop: 10,
    },
    container:{
        flex: 1,
        alignItems: 'center',
        padding: 10
    }
    
})


