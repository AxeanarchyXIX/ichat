import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react'
import { View, StyleSheet } from 'react-native'
// install react element from https://reactnativeelements.com/
import {Input, Button} from 'react-native-elements';
import {auth} from '../firebase';
//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [imageURL, setImageURL] = useState('');
    //create registration to the firebase connection, the doc: https://firebase.google.com/docs/auth/web/start#web-version-8
    const register = () =>{
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                user.updateProfile({
                    displayName: name,
                    //if user didnt input the url else use default imageurl
                    photoURL: imageURL ? imageURL: "https://image.shutterstock.com/image-vector/default-avatar-profile-icon-vector-260nw-1725655669.jpg"
                  }).then(() => {
                    // Update successful
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });  
                navigation.popToTop();
                // ...
            })
            .catch((error) => {
                var errorMessage = error.message;
                alert(errorMessage)
            });
        }
    return (
        // view field, input section and button
        <View style={styles.container}>
            <Input 
            placeholder="Type your Name"
            label="Name"
            leftIcon={{type:'material', name:'badge'}}
            value={name}
            onChangeText={text => setName(text)}
            />
            <Input 
            placeholder="Type your email"
            label="Email"
            leftIcon={{type:'material', name:'email'}}
            value={email}
            onChangeText={text => setEmail(text)}
            />
            <Input 
            placeholder="Type your password"
            label="Password"
            leftIcon={{type:'material', name:'lock'}}
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            />
            <Input 
            placeholder="Enter your image URL"
            label="Profile Picture"
            leftIcon={{type:'material', name:'face'}}
            value={imageURL}
            onChangeText={text => setImageURL(text)}
            />
            <Button title="       Register        " onPress={register} style={styles.button} />
        </View>
    )
}

export default RegisterScreen
//create style for the button
const styles = StyleSheet.create({
    button:{
        width: 200,
        marginTop: 10
    },
    container:{
        flex: 1,
        alignItems: 'center',
        padding: 10
    }
    
})
